import { createReducer } from '@reduxjs/toolkit';
import { CITY } from '../const';
import { changeCity, showOffers } from './action';
import { Offers } from '../types/offers';
import { cityNameSort } from '../sort';
import { offers } from '../mocks/offers';


const initialState = {
  city: CITY.paris,
  offers,
  displayedOffers:<Offers>[]
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const city = action.payload;
    state.city = city;
  })
    .addCase(showOffers, (state, action) => {
      const city = action.payload;
      state.offers = offers;
      state.displayedOffers = cityNameSort(offers,city.name);
    });
});

export { reducer };
