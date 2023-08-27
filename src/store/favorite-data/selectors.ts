import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';
import { State } from '../../types/state';

export const getFavOffers = (state: State): Offers => state[NameSpace.Favorites].favOffers;
