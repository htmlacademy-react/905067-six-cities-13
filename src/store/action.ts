import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';
import { FullOffer, Offers } from '../types/offers';
import { Comment, Comments } from '../types/comments';

export const changeCity = createAction<City>('app/changeCity');

export const sortOffers = createAction('app/sortOffers');

export const changeSort = createAction<string>('app/changeSort');

// export const loadOffers = createAction<Offers>('app/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'app/setOffersDataLoadingStatus'
);

export const setUserName = createAction<string>('app/setUserName');

export const setOffer = createAction<FullOffer>('app/setOffer');

export const setNearbyOffers = createAction<Offers>('app/setNearbyOffers');

export const setOfferComments = createAction<Comments>('app/setOfferComments');

export const postComment = createAction<Comment>('app/postComment');
