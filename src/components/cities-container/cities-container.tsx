import OffersList from '../offers-list/offers-list';
import SortComponents from '../../components/sort/sort';
import Map from '../map/map';
import { useState, useCallback } from 'react';
import { useAppDispatch } from '../../hooks';

import { changeSort, updateDisplayedOffers } from '../../store/app-process/app-process';
import { Offers } from '../../types/offers';
import { City } from '../../types/types';
import NoOffers from '../no-offers/no-offers';


type CitiesContainerProps = {
  offers: Offers;
  currentSort: string;
  currentCity: City;
}

const CitiesContainer = ({offers,currentSort,currentCity}:CitiesContainerProps) => {
  const [activeId, setActiveId] = useState('');

  const dispatch = useAppDispatch();


  const handleOffersListAtiveId = useCallback(
    (id: string) => setActiveId(id),
    []
  );

  if (offers.length < 1) {
    return <NoOffers city={currentCity}/>;
  }

  const onSortClick = (sortType: string) => {
    dispatch(changeSort(sortType));
    dispatch(updateDisplayedOffers());
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {currentCity.name}
          </b>

          <SortComponents currentSort={currentSort} onSort={onSortClick} />
          <OffersList
            offers={offers}
            onListStateChange={handleOffersListAtiveId}
            isMainPage
          />
        </section>
        <div className="cities__right-section">
          <Map
            city={currentCity}
            offers={offers}
            activeId={activeId}
            isMainPage
          />
        </div>
      </div>
    </div>
  );
};

export default CitiesContainer;
