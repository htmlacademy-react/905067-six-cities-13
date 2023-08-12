import { createReducer } from '@reduxjs/toolkit';
import { CITY, SortTypeName } from '../const';
import { changeCity, changeSort, showOffers } from './action';
import { Offers } from '../types/offers';
import { offersSort } from '../sort';
import { offers } from '../mocks/offers';

const initialState = {
  city: CITY.paris,
  offers,
  displayedOffers: <Offers>[],
  currentSort: <string>SortTypeName.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
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
