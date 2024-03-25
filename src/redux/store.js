// store.js
import { configureStore } from '@reduxjs/toolkit';

import tableSlice from './tableSlice';
import staffSlice from './staffSlice';
import tokenSlice from './tokenSlice';

export default configureStore({
  reducer: {
    token: tokenSlice,
    tables: tableSlice,
    stafflist:staffSlice

  },
});
