import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "requests",
    initialState: [],
    reducers: {
        addRequests: (state, action) => action.payload,
        removeRequests: () => null,
    }
})

export default requestSlice.reducer;

export const {addRequests, removeRequests} = requestSlice.actions;