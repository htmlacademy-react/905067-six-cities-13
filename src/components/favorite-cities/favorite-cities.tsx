import { AppRoute, CITY } from '../../const';
import { Offers } from '../../types/offers';
import OfferCardFavorites from '../offer-card-favorites/offer-card-favorites';
import { Link } from 'react-router-dom';
import browserHistory from '../../services/browser-history';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';

type FavoriteCitiesProps = {
  offers: Offers;
  cityName: string;
};
type ObjectKey = keyof typeof CITY;
const FavoriteCities = ({ offers, cityName }: FavoriteCitiesProps) => {
  const dispatch = useAppDispatch();
  const handleRandomCityClick = () => {
    browserHistory.push(AppRoute.Root);
    const cityKey = cityName.toLowerCase();
    dispatch(changeCity(CITY[cityKey as ObjectKey]));
  };
  if (!offers.some((offer) => offer.city === cityName)) {
    return null;
  }
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            onClick={handleRandomCityClick}
            className="locations__item-link"
            to={AppRoute.Root}
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers
          .filter((offer) => offer.city === cityName)
          .map((offer) => (
            <OfferCardFavorites offer={offer} key={offer.id} />
          ))}
      </div>
    </li>
  );
};
export default FavoriteCities;
