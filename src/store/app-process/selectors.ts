import {NameSpace} from '../../const';
import { Offers } from '../../types/offers';
import {State} from '../../types/state';
import { City } from '../../types/types';

export const getCity = (state: State): City => state[NameSpace.App].city;
export const getCurrentSort = (state: State): string => state[NameSpace.App].currentSort;
export const getDisplayOffers = (state: State): Offers => state[NameSpace.App].displayedOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.App].isOffersDataLoading;
