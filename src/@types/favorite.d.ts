export type FavoriteInput = {
  userId: string;
  placeId: string;
  name: string;
  category: string;
  description: string;
  rating?: number | null;
  hours: string;
  latitude?: number;
  longitude?: number;
};