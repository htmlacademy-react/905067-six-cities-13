import { Offers } from '../../types/offers';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onListStateChange?: (id: string) => void;
  isMainPage: boolean;
};

const OffersList = ({
  offers,
  onListStateChange,
  isMainPage,
}: OffersListProps) => {
  const [activeId, setActiveId] = useState<string>();
  useEffect(() => {
    if (activeId && onListStateChange) {
      onListStateChange(activeId);
    }
  }, [activeId, onListStateChange]);
  return (
    <div
      className={cn(
        { 'cities__places-list places__list tabs__content': isMainPage },
        { 'near-places__list places__list': !isMainPage }
      )}
    >
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          handleHover={(id) => setActiveId(id)}
          isMainPage={isMainPage}
        />
      ))}
    </div>
  );
};

export default OffersList;
