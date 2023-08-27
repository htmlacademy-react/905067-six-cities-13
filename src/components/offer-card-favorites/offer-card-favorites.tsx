import { Offer } from '../../types/offers';
import { useAppDispatch } from '../../hooks';
import { toggleFavoriteAction } from '../../store/api-actions';
import { AppRoute, STAR_RATING_PROPORTION } from '../../const';
import { Link } from 'react-router-dom';

type OfferCardFavoritesProps = {
  offer: Offer;
};

const OfferCardFavorites = ({ offer }: OfferCardFavoritesProps) => {

  const dispatch = useAppDispatch();

  const { premium, src, price, rating, title, offerType,favorite,id } = offer;
  const starRating = `${Math.round(rating) / STAR_RATING_PROPORTION}%`;

  const onBookmarButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const value = !favorite;
    dispatch(toggleFavoriteAction({value,id}));
  };


  return (
    <article className="favorites__card place-card">
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer + id}>
          <img
            className="place-card__image"
            src={src}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            onClick={onBookmarButtonClick}
            className={`place-card__bookmark-button ${favorite ? 'place-card__bookmark-button--active' : ''} button`} type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starRating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};

export default OfferCardFavorites;
