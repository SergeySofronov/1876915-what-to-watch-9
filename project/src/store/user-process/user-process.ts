import { createSlice } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

const { setAuthorizationStatus } = userProcess.actions;

export { userProcess, setAuthorizationStatus };
