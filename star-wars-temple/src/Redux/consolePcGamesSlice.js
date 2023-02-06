import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    games: []
}

export const consolePcGamesSlice = createSlice({
    name: "consolepcgames",
    initialState,
    reducers: {
        setConsoleAndPcGames: (state, action) => {
            state.games = action.payload;
        }
    }
})

export const {setConsoleAndPcGames} = consolePcGamesSlice.actions;
export default consolePcGamesSlice.reducer;