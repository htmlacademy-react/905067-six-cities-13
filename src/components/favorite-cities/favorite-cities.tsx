import { AppRoute } from '../../const';
import { Offers } from '../../types/offers';
import OfferCardFavorites from '../offer-card-favorites/offer-card-favorites';
import { Link } from 'react-router-dom';

type FavoriteCitiesProps = {
  offers: Offers;
  cityName: string;
};

function FavoriteCities({
  offers,
  cityName,
}: FavoriteCitiesProps): JSX.Element | null {
  if (!offers.some((offer) => offer.city === cityName)) {
    return null;
  }
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers
          .filter((offer) => offer.city === cityName)
          .map((offer) => (
            <OfferCardFavorites offer={offer} key={offer.id}/>
          ))}
      </div>
    </li>
  );
}
export default FavoriteCities;
