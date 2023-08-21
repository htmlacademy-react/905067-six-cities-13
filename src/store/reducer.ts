import { createReducer } from '@reduxjs/toolkit';
import { CITY, SortTypeName } from '../const';
import {
  changeCity,
  changeSort,
  loadOffers,
  setOffersDataLoadingStatus,
  sortOffers,
  setAuthorizationStatus,
  setUserName,
  setOffer,
  setNearbyOffers,
  setOfferComments,
  postComment,
} from './action';
import { FullOffer, Offers } from '../types/offers';
import { offersSort } from '../sort';
import { City } from '../types/types';
import { Comment } from '../types/comments';

type InitalState = {
  city: City;
  displayedOffers: Offers;
  currentSort: string;
  offers: Offers;
  isOffersDataLoading: boolean;
  authorizationStatus: boolean;
  userName: string;
  currentOffer: FullOffer | null;
  nearbyOffers: Offers;
  offerComments: Comment[];
};

const initialState: InitalState = {
  city: CITY.paris,
  displayedOffers: [],
  currentSort: SortTypeName.Popular,
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: false,
  userName: '',
  currentOffer: null,
  nearbyOffers: [],
  offerComments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      const city = action.payload;
      state.city = city;
    })
    .addCase(changeSort, (state, action) => {
      const sortType = action.payload;
      state.currentSort = sortType;
    })
    .addCase(sortOffers, (state) => {
      const { currentSort, city, offers } = state;
      state.displayedOffers = offersSort(offers, city.name, currentSort);
    })
    .addCase(setOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(setOfferComments, (state, action) => {
      state.offerComments = action.payload;
    })
    .addCase(postComment, (state, action) => {
      state.offerComments.push(action.payload);
    });
});

export { reducer };
