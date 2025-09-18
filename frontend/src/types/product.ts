export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  basePrice?: number;
  thumbnail?: string;
  imageUrl?: string; 
  categoryId?: number;
  brand?: {
    id: number;
    name: string;
  };
};
