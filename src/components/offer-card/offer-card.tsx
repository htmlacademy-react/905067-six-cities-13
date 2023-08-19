import { Link } from 'react-router-dom';
import { AppRoute, StarRatingProportion } from '../../const';
import { Offer } from '../../types/offers';
import cn from 'classnames';

type OfferCardProps = {
  offer: Offer;
  handleHover: (id: string) => void;
  isMainPage: boolean;
};

const OfferCard = ({ offer, handleHover, isMainPage }: OfferCardProps) => {
  const { id, premium, src, title, offerType, price, rating } = offer;

  const starRating = `${Math.round(rating) / StarRatingProportion}%`;

  return (
    <article
      className={cn(
        { 'near-places__card': !isMainPage },
        { 'cities__card': isMainPage },
        'place-card'
      )}
      onMouseMove={() => handleHover(id)}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={cn(
          { 'near-places__image-wrapper': !isMainPage },
          { 'cities__image-wrapper': isMainPage },
          'place-card__image-wrapper'
        )}
      >
        <Link
          to={AppRoute.Offer + id}
          className="header__logo-link header__logo-link--active"
        >
          <img
            className="place-card__image"
            src={src}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starRating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};

export default OfferCard;
