import { FullOffer, Offer, Offers } from './types/offers';
/* eslint-disable */
const offersAdapter = (offers: any): Offers =>
  offers.map(
    (offer: any): Offer => ({
      id: offer.id,
      src: offer.previewImage,
      title: offer.title,
      rating: offer.rating,
      offerType: offer.type,
      price: offer.price,
      city: offer.city.name,
      cordinates: offer.location,
      premium: offer.isPremium,
    })
  );

const offerAdapter = (offer: any): FullOffer => ({
  id: offer.id,
  images: offer.images,
  description: offer.description,
  title: offer.title,
  rating: offer.rating,
  offerType: offer.type,
  price: offer.price,
  city: offer.city,
  cordinates: offer.location,
  isFavorite: offer.isFavorite,
  premium: offer.isPremium,
  goods: offer.goods,
  bedrooms: offer.bedrooms,
  maxAdults: offer.maxAdults,
  host: offer.host,
});

export { offersAdapter, offerAdapter };
