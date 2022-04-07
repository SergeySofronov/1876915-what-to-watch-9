import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmProcessData } from './films-process-data/films-process-data';
import { filmProcess } from './films-process/films-process';
import { userProcess } from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.Data]: filmProcessData.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

export { rootReducer };
