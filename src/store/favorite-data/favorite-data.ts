import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import {
  fetchFavOffersAction,
  toggleFavoriteAction,
} from '../api-actions';
import { FavData } from '../../types/state';

const initialState: FavData = {
  favOffers: [],
};

export const favData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavOffersAction.fulfilled, (state, action) => {
        state.favOffers = action.payload;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const newFavOffer = action.payload;
        if (newFavOffer.favorite) {
          state.favOffers.push(newFavOffer);
        } else {
          state.favOffers = state.favOffers.filter(
            (offer) => offer.id !== newFavOffer.id
          );
        }
      });
  },
});
