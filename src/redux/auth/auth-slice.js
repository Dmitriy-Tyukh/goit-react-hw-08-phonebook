import {logIn, logOut, register, fetchCurrentUser} from './auth-operations'
import persistReducer from "redux-persist/es/persistReducer";
import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const authInitState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    extraReducers: builder => {
        builder
          .addCase(register.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
          })
          .addCase(logIn.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
          })
          .addCase(logOut.pending, state => {
            state.isLoggedIn = true;
          })
          .addCase(logOut.fulfilled, (state, { payload }) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
          })
          .addCase(fetchCurrentUser.pending, state => {
            state.isLoggedIn = true;
          })
          .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
          })
          .addCase(fetchCurrentUser.rejected, state => {
            state.isLoggedIn = false;
            state.token = null;
          })
    }
})

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlice.reducer;
export const authPersistedReducer = persistReducer(persistConfig, authReducer);
