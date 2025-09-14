export interface Artists {
  id: number;
  name: string;
  price: string;
  rating: number;
  category: string;
  imageUrl: string;
  imagePlaceholder: string;
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  subcategories: string[];
}

export interface Booking {
  id: string;
  artistName: string;
  artistCategory: string;
  artistPrice?: string;
  artistImage?: string;
  userName: string;
  userEmail: string;
  userPhone?: string;
  bookingDate: string;
  bookingTime: string;
  createdAt: string;
}
