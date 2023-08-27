import { Link } from 'react-router-dom';
import { AppRoute, STAR_RATING_PROPORTION } from '../../const';
import { Offer } from '../../types/offers';
import { memo, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import browserHistory from '../../services/browser-history';
import { toggleFavoriteAction } from '../../store/api-actions';

type OfferCardProps = {
  offer: Offer;
  handleHover?: (id: string) => void | null;
  isMainPage: boolean;
};

const OfferCard = ({ offer, handleHover, isMainPage }: OfferCardProps) => {

  const isAuth = useAppSelector(getAuthorizationStatus);
  const { id, premium, src, title, offerType, price, rating, favorite } = offer;

  const starRating = `${Math.round(rating) / STAR_RATING_PROPORTION}%`;

  const dispatch = useAppDispatch();

  const [isFavorite, setFavorite] = useState(favorite);

  const onBookmarButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!isAuth) {
      browserHistory.push(AppRoute.Login);
    }
    const value = !isFavorite;
    setFavorite(!isFavorite);
    dispatch(toggleFavoriteAction({value,id}));
  };

  return (
    <article
      className={cn(
        { 'near-places__card': !isMainPage },
        { 'cities__card': isMainPage },
        'place-card'
      )}

      onMouseMove={handleHover ? () => handleHover(id) : undefined}
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
          <button
            onClick={onBookmarButtonClick}
            className={`place-card__bookmark-button ${isFavorite && isAuth ? 'place-card__bookmark-button--active' : ''} button`} type="button"
          >
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


const OfferCardMemo = memo(OfferCard);
export default OfferCardMemo;
