import { AxiosInstance } from 'axios';
import { FullOffer, Offers } from '../types/offers';
import {
  getNearbyOffers,
  getOffer,
  getOfferComments,
  loadOffers,
  postComment,
  setAuthorizationStatus,
  setUserName,
  showOffers,
} from './action';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, TokenData, UserData } from '../types/types';
import { APIRoute } from '../const';
import { setOffersDataLoadingStatus } from './action';
import { offerAdapter, offersAdapter } from '../adapter';
import { saveToken } from '../services/services';
import { Comment, Comments, PostComment } from '../types/comments';

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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<TokenData>(APIRoute.Login);
    dispatch(setUserName(data.email));
    dispatch(setAuthorizationStatus(true));
  } catch {
    dispatch(setAuthorizationStatus(false));
  }
});
export const getOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffer', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
  const offer = offerAdapter(data);
  dispatch(getOffer(offer));
});

export const getNearbyOffersAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getNearbyOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
  const offers = offersAdapter(data);

  dispatch(getNearbyOffers(offers));
});

export const getOfferCommentsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOfferComents', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
  dispatch(getOfferComments(data));
});

export const postCommentAction = createAsyncThunk<
  void,
  PostComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async (
    { comment, offerId, clearComment, unblockForm },
    { dispatch, extra: api }
  ) => {
    await api
      .post<Comment>(`${APIRoute.Comments}/${offerId}`, comment)
      .then((result) => {
        const { data } = result;
        dispatch(postComment(data));
        clearComment();
      })
      .finally(unblockForm);
  }
);

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setAuthorizationStatus(true));
    dispatch(setUserName(email));
  }
);
