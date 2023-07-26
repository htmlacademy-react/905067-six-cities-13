import { Offers } from '../../types/offers';
import { useState, useEffect } from 'react';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onListStateChange: (id: string) => void;
};

const OffersList = ({ offers, onListStateChange }: OffersListProps) => {
  const [activeId, setActiveId] = useState<string>();
  useEffect(() => {
    if (activeId) {
      onListStateChange(activeId);
    }
  }, [activeId, onListStateChange]);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          handleHover={(id) => setActiveId(id)}
        />
      ))}
    </div>
  );
};

export default OffersList;
