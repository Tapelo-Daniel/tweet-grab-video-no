
export interface Position {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  category: string;
  description?: string;
  position: Position;
  image?: string;
  address?: string;
  contact?: string;
  website?: string;
  createdAt?: string;
  updatedAt?: string;
  ownerId?: string;
  verified?: boolean;
  rating?: number;
  totalReviews?: number;
  business_types?: string[];
  keywords?: string[];
  hours?: Record<string, string>;
  phone?: string;
  isVerified?: boolean;
  isUserBusiness?: boolean;
  location?: Position;
}

// Mock places data
const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Coffee Shop',
    category: 'Food & Drink',
    description: 'A cozy coffee shop with great pastries.',
    position: { lat: 37.7749, lng: -122.4194 },
    rating: 4.5
  },
  {
    id: '2',
    name: 'Tech Hub',
    category: 'Business',
    description: 'Co-working space for tech startups.',
    position: { lat: 37.7848, lng: -122.4294 },
    rating: 4.2
  }
];

// Add the mock data sets for recommendations
export const recommendedForYou: Place[] = [
  {
    id: '3',
    name: 'Pi Electronics',
    address: '789 Pine Ave, San Francisco, CA',
    category: 'Technology',
    description: 'Electronics store that accepts Pi cryptocurrency. Latest gadgets and tech accessories.',
    image: '/placeholder.svg',
    position: { lat: 37.783, lng: -122.410 },
    rating: 4.4,
    website: 'https://pielectronics.example.com'
  },
  {
    id: '4',
    name: 'Pi Bookstore',
    address: '321 Market St, San Francisco, CA',
    category: 'Retail',
    description: 'Bookstore offering a wide selection of books and accepts Pi cryptocurrency.',
    image: '/placeholder.svg',
    position: { lat: 37.792, lng: -122.396 },
    rating: 4.6,
    website: 'https://pibookstore.example.com'
  }
];

export const suggestedForYou: Place[] = [
  {
    id: '5',
    name: 'Pi Health Club',
    address: '555 Fitness Lane, San Francisco, CA',
    category: 'Health & Wellness',
    description: 'Gym and wellness center that accepts Pi cryptocurrency for memberships.',
    image: '/placeholder.svg',
    position: { lat: 37.775, lng: -122.415 },
    rating: 4.7,
    website: 'https://pihealthclub.example.com'
  },
  {
    id: '6',
    name: 'Pi Art Gallery',
    address: '123 Creative St, San Francisco, CA',
    category: 'Arts & Entertainment',
    description: 'Gallery showcasing local artists that accepts Pi for purchases.',
    image: '/placeholder.svg',
    position: { lat: 37.788, lng: -122.408 },
    rating: 4.3,
    website: 'https://piartgallery.example.com'
  }
];

export const avanteTopChoice: Place[] = [
  {
    id: '7',
    name: 'Pi Gourmet Restaurant',
    address: '888 Culinary Blvd, San Francisco, CA',
    category: 'Food & Drink',
    description: 'Fine dining restaurant accepting Pi cryptocurrency with farm-to-table cuisine.',
    image: '/placeholder.svg',
    position: { lat: 37.780, lng: -122.405 },
    rating: 4.9,
    website: 'https://pigourmet.example.com'
  }
];

export default mockPlaces;
