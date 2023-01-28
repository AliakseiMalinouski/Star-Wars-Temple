import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

export const filterFilmSlice = createSlice({
    name: "filterFilm",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const {setCategories} = filterFilmSlice.actions;
export default filterFilmSlice.reducer;