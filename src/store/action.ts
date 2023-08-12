import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';

export const changeCity = createAction<City>('app/changeCity');

export const showOffers = createAction('app/loadOffers');

export const changeSort = createAction<string>('app/changeSort');
