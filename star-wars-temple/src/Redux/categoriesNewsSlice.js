import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const categoriesNewsSlice = createSlice({
    name: "categoriesNews",
    initialState,
    reducers: {
        setCategoriesNews: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const {setCategoriesNews} = categoriesNewsSlice.actions;
export default categoriesNewsSlice.reducer;