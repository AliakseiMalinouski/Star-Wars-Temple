import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    series: []
}

export const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {
        setSeries: (state, action) => {
            state.series = action.payload;
        }
    }
})

export const {setSeries} = seriesSlice.actions;
export default seriesSlice.reducer;