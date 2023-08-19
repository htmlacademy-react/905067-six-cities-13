import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';
import { FullOffer, Offers } from '../types/offers';
import { Comment, Comments } from '../types/comments';

export const changeCity = createAction<City>('app/changeCity');

export const showOffers = createAction('app/showOffers');

export const changeSort = createAction<string>('app/changeSort');

export const loadOffers = createAction<Offers>('app/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'app/setOffersDataLoadingStatus'
);

export const setAuthorizationStatus = createAction<boolean>(
  'app/setAuthorizationStatus'
);

export const setUserName = createAction<string>('app/setUserName');

export const getOffer = createAction<FullOffer>('app/getOffer');

export const getNearbyOffers = createAction<Offers>('app/getNearbyOffers');

export const getOfferComments = createAction<Comments>('app/getOfferComments');

export const postComment = createAction<Comment>('app/postComment');
