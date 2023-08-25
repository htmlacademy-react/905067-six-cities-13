import { CITY } from '../../const';
import { Offers } from '../../types/offers';
import FavoriteCities from '../favorite-cities/favorite-cities';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

type FavoritesMainProps = {
  offers: Offers;
};

const FavoritesMain = ({ offers }: FavoritesMainProps) => {
  if (offers.length < 1) {
    return <FavoritesEmpty />;
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoriteCities offers={offers} cityName={CITY.paris.name} />
            <FavoriteCities offers={offers} cityName={CITY.cologne.name} />
            <FavoriteCities offers={offers} cityName={CITY.brussels.name} />
            <FavoriteCities offers={offers} cityName={CITY.amsterdam.name} />
            <FavoriteCities offers={offers} cityName={CITY.hamburg.name} />
            <FavoriteCities offers={offers} cityName={CITY.dusseldorf.name} />
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoritesMain;
