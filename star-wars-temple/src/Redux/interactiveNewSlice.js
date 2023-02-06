import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    games: []
}

export const interactiveNewSlice = createSlice({
    name: "newgames",
    initialState,
    reducers: {
        setNewGames: (state, action) => {
            state.games = action.payload;
        }
    }
})

export const {setNewGames} = interactiveNewSlice.actions;
export default interactiveNewSlice.reducer;