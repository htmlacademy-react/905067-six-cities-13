import { City } from './types';

export type Offer = {
  id: string;
  src: string;
  title: string;
  premium: boolean;
  rating: number;
  offerType: string;
  price: number;
  city: string;
  cordinates: { latitude: number; longitude: number; zoom: number };
};

export type FullOffer = {
  id: string;
  images: string[];
  description: string;
  title: string;
  rating: number;
  offerType: string;
  price: number;
  city: City;
  cordinates: { latitude: number; longitude: number; zoom: number };
  isFavorite: boolean;
  premium: boolean;
  goods: string[];
  bedrooms: number;
  maxAdults: number;
  host: { avatarUrl: string; isPro: boolean; name: string };
};

export type Offers = Offer[];
