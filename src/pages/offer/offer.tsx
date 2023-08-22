import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Map from '../../components/map/map';
import { StarRatingProportion } from '../../const';
import OffersList from '../../components/offers-list/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getNearbyOffersAction,
  getOfferAction,
  getOfferCommentsAction,
} from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/header/header';

const Offer = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOfferAction(id));
      dispatch(getNearbyOffersAction(id));
      dispatch(getOfferCommentsAction(id));
    }
  }, [id, dispatch]);

  const offer = useAppSelector((state) => state.currentOffer);

  const isAuth = useAppSelector((state) => state.authorizationStatus);

  const offerComments = useAppSelector((state) => state.offerComments);

  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  const shufledOffers = [...nearbyOffers]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const mapOffers = [...shufledOffers];

  if (!offer) {
    return <Spinner />;
  }
  const {
    images,
    description,
    title,
    rating,
    offerType,
    price,
    city,
    premium,
    goods,
    bedrooms,
    maxAdults,
    host,
  } = offer;
  const starRating = `${Math.round(rating) / StarRatingProportion}%`;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Helmet>
            <title>6 cities. Offer</title>
          </Helmet>
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {premium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: starRating }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item: string, i: number) => {
                    const index = i;
                    return (
                      <li
                        className="offer__inside-item"
                        key={item.length * index}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">
                    {offerComments.length}
                  </span>
                </h2>
                <ReviewsList comments={offerComments} />
                <CommentForm isAuth={isAuth} offerId={id} />
              </section>
            </div>
          </div>
          <Map
            offers={mapOffers}
            city={city}
            isMainPage={false}
            activeId={offer.id}
            fullOffer={offer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList offers={shufledOffers} isMainPage={false} />
          </section>
        </div>
      </main>
    </div>
  );
};
export default Offer;
