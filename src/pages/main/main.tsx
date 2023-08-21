import OffersList from '../../components/offers-list/offers-list';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { City } from '../../types/types';
import { changeCity, changeSort, sortOffers } from '../../store/action';
import SortComponents from '../../components/sort/sort';
import Header from '../../components/header/header';

const Main = () => {
  const [offersListactiveId, setOffersListActiveId] = useState<string>('0');

  const handleOffersListAtiveId = (activeId: string) => {
    setOffersListActiveId(activeId);
  };

  const offers = useAppSelector((state) => state.displayedOffers);

  const currentCity = useAppSelector((state) => state.city);

  const currentSort = useAppSelector((state) => state.currentSort);

  const dispatch = useAppDispatch();

  const onCityClick = (city: City) => {
    dispatch(changeCity(city));
    dispatch(sortOffers());
  };

  const onSortClick = (sortType: string) => {
    dispatch(changeSort(sortType));
    dispatch(sortOffers());
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Helmet>
          <title>6 cities</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} onClickCity={onCityClick} />
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
                activeId={offersListactiveId}
                isMainPage
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
