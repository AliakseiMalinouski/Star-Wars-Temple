import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    universe: []
}

export const universeSlice = createSlice({
    name: "universe",
    initialState,
    reducers: {
        getUniverse: (state, action) => {
            state.universe = action.payload;
        }
    }
})

export const {getUniverse} = universeSlice.actions;
export default universeSlice.reducer;