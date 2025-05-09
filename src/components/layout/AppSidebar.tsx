
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopSidebar from './sidebar/DesktopSidebar';
import MobileSidebar from './sidebar/MobileSidebar';
import { navItems, legalItems } from './sidebar/sidebarConfig';
import { getUnreadNotificationsCount } from '@/utils/notificationUtils';

interface AppSidebarProps {
  className?: string;
}

const AppSidebar = ({ className }: AppSidebarProps = {}) => {
  const location = useLocation();
  const { openMobile, setOpenMobile } = useSidebar();
  const isMobile = useIsMobile();
  const [notificationCount, setNotificationCount] = useState(getUnreadNotificationsCount());
  
  useEffect(() => {
    const handleNotificationUpdate = () => {
      setNotificationCount(getUnreadNotificationsCount());
    };
    
    window.addEventListener('notificationUpdate', handleNotificationUpdate);
    
    return () => {
      window.removeEventListener('notificationUpdate', handleNotificationUpdate);
    };
  }, []);
  
  useEffect(() => {
    console.log('AppSidebar: openMobile state changed:', openMobile);
  }, [openMobile]);
  
  const handleLinkClick = () => {
    console.log('Link clicked, closing mobile sidebar');
    setOpenMobile(false);
  };

  // Update notification badge in navItems
  const updatedNavItems = navItems.map(item => 
    item.to === '/notifications' 
      ? { ...item, badge: notificationCount }
      : item
  );

  // Render both sidebars but control visibility with conditional rendering for mobile
  return (
    <>
      {!isMobile ? (
        <DesktopSidebar
          className={className}
          navItems={updatedNavItems}
          legalItems={legalItems}
          currentPath={location.pathname}
          onLinkClick={handleLinkClick}
        />
      ) : (
        <MobileSidebar
          isOpen={openMobile}
          navItems={updatedNavItems}
          legalItems={legalItems}
          currentPath={location.pathname}
          onClose={() => {
            console.log('Closing mobile sidebar');
            setOpenMobile(false);
          }}
          onLinkClick={handleLinkClick}
        />
      )}
    </>
  );
};

export default AppSidebar;
