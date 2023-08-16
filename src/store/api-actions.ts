import { AxiosInstance } from 'axios';
import { Offers } from '../types/offers';
import { loadOffers, showOffers } from './action';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const';
import { setOffersDataLoadingStatus } from './action';
import offersAdapter from '../adapter';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  const adaptedOffers = offersAdapter(data);
  dispatch(loadOffers(adaptedOffers));
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(showOffers());
});
