import { store } from '../store';
import { Comments } from './comments';
import { FullOffer, Offers } from './offers';
import { City } from './types';

export type AppProcess = {
  currentSort: string;
  city: City;
  displayedOffers: Offers;
  offers: Offers;
  isOffersDataLoading: boolean;
};

export type UserProcess = {
  authorizationStatus: boolean;
  userName: string;
};
export type FavData = {
  favOffers: Offers;
};

export type AppData = {
  currentOffer: FullOffer | null;
  nearbyOffers: Offers;
  offerComments: Comments;
  commentPostError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
