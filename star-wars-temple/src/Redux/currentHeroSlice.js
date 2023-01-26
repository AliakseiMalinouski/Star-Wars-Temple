import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentHero: {}
}

export const currentHeroSlice = createSlice({
    name: "currentHero",
    initialState,
    reducers: {
        updateHero: (state, action) => {
            state.currentHero = action.payload;
        }
    }
}); 

export const {updateHero} = currentHeroSlice.actions;
export default currentHeroSlice.reducer;