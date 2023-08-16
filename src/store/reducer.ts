import { createReducer } from '@reduxjs/toolkit';
import { CITY, SortTypeName } from '../const';
import { changeCity, changeSort, loadOffers, setOffersDataLoadingStatus, showOffers } from './action';
import { Offers } from '../types/offers';
import { offersSort } from '../sort';

const initialState = {
  city: CITY.paris,
  displayedOffers: <Offers>[],
  currentSort: <string>SortTypeName.Popular,
  offers: <Offers>[],
  isOffersDataLoading: false,
  authorizationStatus: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      const city = action.payload;
      state.city = city;
    })
    .addCase(changeSort, (state, action) => {
      const sortType = action.payload;
      state.currentSort = sortType;
    })
    .addCase(showOffers, (state) => {
      const { currentSort, city, offers } = state;
      state.displayedOffers = offersSort(offers, city.name, currentSort);
    });
});

export { reducer };
