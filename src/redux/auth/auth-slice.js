import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {logIn, logOut, register, fetchCurrentUser} from './auth-operations'

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
        // [register.fulfilled](state, {payload}) {
        //     state.user = payload.user;
        //     state.token = payload.token;
        //     state.isLoggedIn = true;
        // }, 
        .addCase(logIn.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            })
        // [logIn.fulfilled](state, { payload }) {
        //     state.user = payload.user;
        //     state.token = payload.token;
        //     state.isLoggedIn = true;
        // }, 
        .addCase(logOut.fulfilled, (state, { payload }) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            })
        // [logOut.fulfilled](state) {
        //     state.user = { name: null, email: null };
        //     state.token = null;
        //     state.isLoggedIn = false;
        // }, 
        .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
            })
        // [fetchCurrentUser.fulfilled](state, {payload}) {
        //     state.user = payload;
        //     state.isLoggedIn = true;
        // } 
    }
})

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlice.reducer;
export const authPersistedReducer = persistReducer(persistConfig, authReducer);
