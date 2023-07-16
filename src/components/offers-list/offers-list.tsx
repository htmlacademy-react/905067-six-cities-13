import { Offers } from '../../types/offers';
import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
type OffersListProps = {
  offers: Offers;
};

const OffersList = ({ offers }: OffersListProps) => {
  const [,setActiveId] = useState<number>();
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} offerIsHover={(id) => setActiveId(id)}/>
      ))}
    </div>
  );
};

export default OffersList;
