import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus;
export const getUserName = (state: State): string => state[NameSpace.User].userName;

