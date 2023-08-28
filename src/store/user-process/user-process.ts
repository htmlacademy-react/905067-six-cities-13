import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: false,
  userName: '',
  authorizationStatusLoading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.userName = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = true;
        state.authorizationStatusLoading = false;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationStatusLoading = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = false;
        state.authorizationStatusLoading = false;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = true;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = false;
      });
  },
});

export const { setName } = userProcess.actions;
