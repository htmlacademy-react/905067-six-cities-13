import { AxiosInstance } from 'axios';
import {
  FullOffer,
  FullOfferServer,
  Offer,
  OfferServer,
  Offers,
  OffersServer,
} from '../types/offers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, OfferData, TokenData, UserData } from '../types/types';
import { APIRoute } from '../const';
import { favOfferAdapter, offerAdapter, offersAdapter } from '../adapter';
import { dropToken, saveToken } from '../services/services';
import { Comment, Comments, PostComment } from '../types/comments';

import { setName } from './user-process/user-process';
import {
  setDispalyedOffers,
  updateDisplayOffer,
} from './app-process/app-process';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OffersServer>(APIRoute.Offers);
  const adaptedOffers = offersAdapter(data);
  dispatch(setDispalyedOffers(adaptedOffers));
  return adaptedOffers;
});

export const fetchFavOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getFavorites', async (_arg, { extra: api }) => {
  const { data } = await api.get<OffersServer>(APIRoute.Favorites);
  const offers = offersAdapter(data);
  return offers;
});

export const checkAuthAction = createAsyncThunk<
  TokenData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/checkAuth', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TokenData>(APIRoute.Login);
  dispatch(setName(data.email));
  dispatch(fetchFavOffersAction());
  return data;
});

export const getOfferAction = createAsyncThunk<
  FullOffer,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOffer', async (id, { extra: api }) => {
  const { data } = await api.get<FullOfferServer>(`${APIRoute.Offers}/${id}`);
  const offer = offerAdapter(data);
  return offer;
});

export const getNearbyOffersAction = createAsyncThunk<
  Offers,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getNearbyOffers', async (id, { extra: api }) => {
  const { data } = await api.get<OffersServer>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const offers = offersAdapter(data);
  return offers;
});

export const getOfferCommentsAction = createAsyncThunk<
  Comments,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/getOfferComents', async (id, { extra: api }) => {
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  Comment,
  PostComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postComment',
  async ({ comment, offerId, clearComment, unblockForm }, { extra: api }) => {
    try {
      const { data } = await api.post<Comment>(
        `${APIRoute.Comments}/${offerId}`,
        comment
      );
      clearComment();
      unblockForm();
      return data;
    } catch (error) {
      unblockForm();
      throw error;
    }
  }
);

export const loginAction = createAsyncThunk<
  string,
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
    dispatch(setName(email));
    dispatch(fetchFavOffersAction());
    return email;
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const toggleFavoriteAction = createAsyncThunk<
  Offer,
  OfferData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/toggleFavorites', async ({ value, id }, { dispatch, extra: api }) => {
  let numVal = 0;
  if (value) {
    numVal = 1;
  } else {
    numVal = 0;
  }
  const { data } = await api.post<OfferServer>(
    `${APIRoute.Favorites}/${id}/${numVal}`
  );
  const adaptedOffer = favOfferAdapter(data);
  dispatch(updateDisplayOffer(adaptedOffer));
  return adaptedOffer;
});
