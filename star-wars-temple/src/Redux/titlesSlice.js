import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    titles: []
}

export const titlesSlice = createSlice({
    name: "titles",
    initialState,
    reducers: {
        getTitles: (state, action) => {
            state.titles = action.payload;
        }
    }
}); 

export const {getTitles} = titlesSlice.actions;
export default titlesSlice.reducer;