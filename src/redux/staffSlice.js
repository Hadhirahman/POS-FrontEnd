import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
    name: "stafflist",
    initialState: [],
    reducers: {
        fetchstaffList(state, action) {
            return action.payload; // Set state directly to the payload
        }
    }
});

export const { fetchstaffList } = staffSlice.actions;
export default staffSlice.reducer;
