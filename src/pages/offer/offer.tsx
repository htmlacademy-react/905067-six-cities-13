import Logo from '../../components/logo/logo';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { comments } from '../../mocks/comments';
import Map from '../../components/map/map';
import { CITY } from '../../const';
import OffersList from '../../components/offers-list/offers-list';

type OfferProp = {
  offers: Offers;
};

const Offer = ({ offers }: OfferProp) => {
  const { id } = useParams();
  const offer = offers.find((o: { id: string }) => o.id === id);
  if (offer === undefined) {
    return <Navigate to="*" />;
  }
  const {
    src,
    title,
    premium,
    rating,
    offerType,
    bedroomsCount,
    gusetCount,
    price,
    additional,
  } = offer;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <Helmet>
            <title>6 cities. Offer</title>
          </Helmet>
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
              </div>
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
                  <span style={{ width: rating }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedroomsCount} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {gusetCount} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {additional.map((item: string, i: number) => {
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
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList comments={comments} />
                <CommentForm />
              </section>
            </div>
          </div>
          <Map
            offers={[offers[0], offers[1], offers[2]]}
            city={CITY.amsterdam}
            isMainPage={false}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList offers={[offers[0], offers[1], offers[2]]} isMainPage={false}/>
          </section>
        </div>
      </main>
    </div>
  );
};
export default Offer;
