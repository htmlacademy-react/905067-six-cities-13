import {NameSpace} from '../../const';
import { Comments } from '../../types/comments';
import { FullOffer, Offers } from '../../types/offers';
import {State} from '../../types/state';


export const getCurrentOffer = (state: State): FullOffer| null => state[NameSpace.Data].currentOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Data].nearbyOffers;
export const getOfferComments = (state: State): Comments => state[NameSpace.Data].offerComments;
export const getCommentPostError = (state: State): boolean => state[NameSpace.Data].commentPostError;
export const getCurrentOfferLoadingStatus = (state: State): boolean => state[NameSpace.Data].currentOfferIsLoading;
