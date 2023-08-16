const offersAdapter = (offers) => {
  return offers.map((offer) => ({
    id: offer.id,
    src: offer.previewImage,
    title: offer.title,
    rating: offer.rating,
    offerType: offer.type,
    price: offer.price,
    city: offer.city.name,
    cordinates: offer.location,
    isFavorite: offer.isFavorite,
    premium: offer.isPremium,
  }));
};

export default offersAdapter;
