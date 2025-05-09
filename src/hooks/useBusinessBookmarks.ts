
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/auth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useBusinessBookmarks = () => {
  const { user, isAuthenticated } = useAuth();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch user's bookmarks
  const fetchBookmarks = useCallback(async () => {
    if (!user || !isAuthenticated) {
      return;
    }

    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('bookmarks')
        .select('business_id')
        .eq('user_id', user.uid);

      if (error) {
        throw error;
      }

      if (data) {
        // Convert business_id to string array
        const bookmarkIds = data.map(item => String(item.business_id));
        setBookmarks(bookmarkIds);
      }
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      toast.error('Failed to load your bookmarks');
    } finally {
      setIsLoading(false);
    }
  }, [user, isAuthenticated]);

  // Load bookmarks when user changes
  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  // Check if a business is bookmarked
  const isBookmarked = useCallback((businessId: string) => {
    return bookmarks.includes(businessId);
  }, [bookmarks]);

  // Add a bookmark
  const addBookmark = useCallback(async (businessId: string) => {
    if (!user || !isAuthenticated) {
      toast.error('Please sign in to bookmark businesses');
      return false;
    }

    try {
      setIsLoading(true);
      
      const { error } = await supabase
        .from('bookmarks')
        .insert({
          user_id: user.uid,
          business_id: parseInt(businessId),
        });

      if (error) {
        throw error;
      }

      // Update local state
      setBookmarks(prev => [...prev, businessId]);
      toast.success('Business added to your bookmarks');
      return true;
    } catch (error) {
      console.error('Error adding bookmark:', error);
      toast.error('Failed to add bookmark');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [user, isAuthenticated]);

  // Remove a bookmark
  const removeBookmark = useCallback(async (businessId: string) => {
    if (!user || !isAuthenticated) {
      return false;
    }

    try {
      setIsLoading(true);
      
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', user.uid)
        .eq('business_id', parseInt(businessId));

      if (error) {
        throw error;
      }

      // Update local state
      setBookmarks(prev => prev.filter(id => id !== businessId));
      toast.success('Business removed from your bookmarks');
      return true;
    } catch (error) {
      console.error('Error removing bookmark:', error);
      toast.error('Failed to remove bookmark');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [user, isAuthenticated]);

  // Toggle bookmark status
  const toggleBookmark = useCallback(async (businessId: string) => {
    return isBookmarked(businessId) 
      ? removeBookmark(businessId)
      : addBookmark(businessId);
  }, [isBookmarked, removeBookmark, addBookmark]);

  return {
    bookmarks,
    isLoading,
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    refreshBookmarks: fetchBookmarks
  };
};
