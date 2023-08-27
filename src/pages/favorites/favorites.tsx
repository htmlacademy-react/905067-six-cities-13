import Header from '../../components/header/header';
import FavoritesMain from '../../components/favorites-main/favorites-main';
import { useAppSelector } from '../../hooks';


import { getFavOffers } from '../../store/favorite-data/selectors';

const Favorites = () => {
  const offers = useAppSelector(getFavOffers);
  return (
    <div className="page">
      <Header />

      <FavoritesMain offers={offers} />

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
};
export default Favorites;
