import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';
import { Offers } from '../types/offers';

export const changeCity = createAction<City>('app/changeCity');

export const showOffers = createAction('app/showOffers');

export const changeSort = createAction<string>('app/changeSort');

export const loadOffers = createAction<Offers>('app/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('app/setOffersDataLoadingStatus');
export const setAuthorizationStatus = createAction<boolean>('app/setAuthorizationStatus');
