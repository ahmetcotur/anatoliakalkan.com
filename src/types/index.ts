export type Language = 'tr' | 'en';

export type MenuCategory = 
  | 'all'
  | 'breakfast'
  | 'mezze'
  | 'pizza_pide'
  | 'burgers_wraps'
  | 'mains'
  | 'seafood'
  | 'cocktails'
  | 'wine_drinks'
  | 'desserts';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  price: number;
  currency?: string;
  tags?: string[];
  popular?: boolean;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free' | 'chef-choice')[];
  ingredients?: {
    tr: string;
    en: string;
  };
  allergens?: {
    tr: string;
    en: string;
  };
}

export interface SignatureCocktail {
  id: string;
  name: string;
  subtitle: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  ingredients: {
    tr: string;
    en: string;
  };
  flavorProfile: {
    tr: string;
    en: string;
  };
  glass: string;
  baseAlcohol: string;
  price: number;
  accentColor: string;
}

export interface ReservationData {
  fullName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'terrace' | 'indoor' | 'any';
  specialRequests?: string;
}
