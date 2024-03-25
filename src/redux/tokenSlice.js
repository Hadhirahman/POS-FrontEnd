
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
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('token'); 
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export const selectToken = (state) => state.token.token;

export default tokenSlice.reducer;
