import Logo from '../../components/logo/logo';
import OffersList from '../../components/offers-list/offers-list';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import CitiesList from '../../components/citiesList/citiesList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { City } from '../../types/types';
import { changeCity, showOffers, changeSort } from '../../store/action';
import SortComponents from '../../components/sort/sort';

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
    dispatch(showOffers(city));
  };

  const onSortClick = (sortType: string) => {
    dispatch(changeSort(sortType));
    dispatch(showOffers(currentCity));
  };

  useEffect(() => {
    dispatch(showOffers(currentCity));
  }, [currentCity, dispatch]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.Favorites}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
