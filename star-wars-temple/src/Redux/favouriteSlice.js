import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteCharacters: []
}

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        setHero: (state, action) => {
            state.favouriteCharacters.push(action.payload);
        },
        configureState: (state, action) => {
            state.favouriteCharacters = action.payload;
        },
        removeHero: (state, action) => {
            state.favouriteCharacters.splice(0, state.favouriteCharacters.length);
        }
    }
})

export const {setHero, removeHero, configureState} = favouriteSlice.actions;
export default favouriteSlice.reducer;