import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }, 
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue}) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
export const logIn = createAsyncThunk(
  'auth/login', async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout', async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout', credentials);
      token.unset();
      return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return rejectWithValue();
    }

    try {
      token.set(persistToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  }
);