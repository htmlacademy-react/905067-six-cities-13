import { Offers } from './types/offers';
import { SortTypeName } from './const';
export const offersSort = (
  offers: Offers,
  cityName: string,
  sortType: string
): Offers => {
  const sortedOffers = [...offers].filter((offer) => offer.city === cityName);
  switch (sortType) {
    case SortTypeName.Popular:
      return sortedOffers;
    case SortTypeName.HighToLow:
      return sortedOffers.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    case SortTypeName.LowToHigh:
      return sortedOffers.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case SortTypeName.TopRated:
      return sortedOffers.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        return 0;
      });
    default:
      return sortedOffers;
  }
};