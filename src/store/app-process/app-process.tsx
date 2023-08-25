import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITY, NameSpace, SortTypeName } from '../../const';
import { offersSort } from '../../sort';
import { fetchOffersAction } from '../api-actions';
import { AppProcess } from '../../types/state';
import { City } from '../../types/types';
import { Offer, Offers } from '../../types/offers';

const initialState: AppProcess = {
  currentSort: SortTypeName.Popular,
  city: CITY.paris,
  displayedOffers: [],
  offers: [],
  isOffersDataLoading: false,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeSort: (state, { payload }: PayloadAction<string>) => {
      state.currentSort = payload;
    },

    changeCity: (state, { payload }: PayloadAction<City>) => {
      state.city = payload;
    },
    setDispalyedOffers: (state, { payload }: PayloadAction<Offers>) => {
      const { currentSort, city } = state;
      const offers = payload;
      state.displayedOffers = offersSort(offers, city.name, currentSort);
    },
    updateDisplayedOffers: (state) => {
      const { currentSort, city, offers } = state;
      state.displayedOffers = offersSort(offers, city.name, currentSort);
    },
    updateDisplayOffer: (state, { payload }: PayloadAction<Offer>) => {
      const loadOffer = payload;
      const { offers, city, currentSort } = state;
      const id = loadOffer.id;
      const oldOffer = offers.find((offer) => offer.id === id);
      if (oldOffer) {
        oldOffer.favorite = loadOffer.favorite;
      }
      state.displayedOffers = offersSort(offers, city.name, currentSort);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  },
});

export const {
  changeSort,
  changeCity,
  setDispalyedOffers,
  updateDisplayOffer,
  updateDisplayedOffers,
} = appProcess.actions;
