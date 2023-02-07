import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterNewsTitles: []
}

export const newsFilterSlice = createSlice({
    name: "filterNews",
    initialState,
    reducers: {
        setFilterNews: (state, action) => {
            state.filterNewsTitles = action.payload;
        }
    }
})

export const {setFilterNews} = newsFilterSlice.actions;
export default newsFilterSlice.reducer;