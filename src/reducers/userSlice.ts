/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './IUser.ts';

export interface IUserState {
  isAuth: boolean,
  user: IUser,
}

const initialState: IUserState = {
  isAuth: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    positionShort: '',
    company: '',
    requirements: '',
  },
};

export type updateEmail = {
  isAuth: boolean,
  email: string,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizingUser: (state: IUserState, action: PayloadAction<updateEmail>) => {
      state.isAuth = action.payload.isAuth;
      state.user = {...state.user, email: action.payload.email}
    },
    updateUserData: (state: IUserState, action: PayloadAction<IUser>) => {
      state.user = {...state.user, ...action.payload}
    },
  }
})

export const {
  authorizingUser,
  updateUserData,
} = userSlice.actions;

export default userSlice.reducer;
