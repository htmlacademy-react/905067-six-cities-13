import { Offers } from '../../types/offers';
import { memo } from 'react';
import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onListStateChange?: (id: string) => void | null;
  isMainPage: boolean;
};

const OffersList = ({
  offers,
  onListStateChange,
  isMainPage,
}: OffersListProps) => (
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
        handleHover={ onListStateChange ? (id) => onListStateChange(id) : undefined}
        isMainPage={isMainPage}
      />
    ))}
  </div>
);


const OffersListMemo = memo(OffersList);
export default OffersListMemo;
