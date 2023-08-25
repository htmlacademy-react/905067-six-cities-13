import { FullOffer, FullOfferServer, Offer, OfferServer, Offers, OffersServer } from './types/offers';

const offersAdapter = (offers: OffersServer): Offers =>
  offers.map(
    (offer: OfferServer): Offer => ({
      id: offer.id,
      src: offer.previewImage,
      title: offer.title,
      rating: offer.rating,
      offerType: offer.type,
      price: offer.price,
      city: offer.city.name,
      cordinates: offer.location,
      premium: offer.isPremium,
      favorite: offer.isFavorite,
    })
  );


const favOfferAdapter = (offer: OfferServer): Offer => ({
  id: offer.id,
  src: offer.previewImage,
  title: offer.title,
  rating: offer.rating,
  offerType: offer.type,
  price: offer.price,
  city: offer.city.name,
  cordinates: offer.location,
  premium: offer.isPremium,
  favorite: offer.isFavorite,
});


const offerAdapter = (offer: FullOfferServer): FullOffer => ({
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

export { offersAdapter, offerAdapter,favOfferAdapter };
