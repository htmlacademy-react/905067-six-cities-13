import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { City } from '../../types/types';
import Header from '../../components/header/header';
import CitiesContainer from '../../components/cities-container/cities-container';
import { getCity, getCurrentSort, getDisplayOffers } from '../../store/app-process/selectors';
import { changeCity, updateDisplayedOffers } from '../../store/app-process/app-process';


const Main = () => {

  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCity);
  const currentSort = useAppSelector(getCurrentSort);

  const offers = useAppSelector(getDisplayOffers);

  const onCityClick = (city: City) => {
    dispatch(changeCity(city));
    dispatch(updateDisplayedOffers());
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
        <CitiesContainer offers={offers} currentCity={currentCity} currentSort={currentSort}/>
      </main>
    </div>
  );
};

export default Main;
