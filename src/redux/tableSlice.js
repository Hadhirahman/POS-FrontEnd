// tableSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tables: [],
};

const tableSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    fetchTablesSuccess(state, action) {
      state.tables = action.payload;
    },
    deleteTable(state, action) {
      const tableId = action.payload;
      state.tables = state.tables.filter(table => table.tableId !== tableId);
    }
  },
});

export const { fetchTablesSuccess,deleteTable } = tableSlice.actions;
export default tableSlice.reducer;
