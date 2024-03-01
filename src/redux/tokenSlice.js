/* eslint-disable no-undef */
// tokenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState:{
    token:null
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Store token in local storage
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('token'); // Remove token from local storage
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export const selectToken = (state) => state.token.token;

export default tokenSlice.reducer;
