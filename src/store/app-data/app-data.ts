import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import {
  getNearbyOffersAction,
  getOfferAction,
  getOfferCommentsAction,
  postCommentAction,
} from '../api-actions';

const initialState: AppData = {
  currentOffer: null,
  nearbyOffers: [],
  offerComments: [],
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(getNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(getOfferCommentsAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.offerComments.push(action.payload);
      });
  },
});

