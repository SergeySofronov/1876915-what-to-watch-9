import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmProcessData } from './films-process-data/films-process-data';
import { filmProcess } from './films-process/films-process';
import { userProcess } from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.data]: filmProcessData.reducer,
  [NameSpace.film]: filmProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});

export { rootReducer };
