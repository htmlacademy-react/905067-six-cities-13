import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {appData} from './app-data/app-data';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';
import { favData } from './favorite-data/favorite-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorites]: favData.reducer,
});
