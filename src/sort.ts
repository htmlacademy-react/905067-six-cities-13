import { Offers } from './types/offers';
export const cityNameSort = (offers: Offers, cityName: string): Offers => {
  const sortedOffers = [...offers];
  return sortedOffers.filter((offer) => offer.city === cityName);
};
