import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posters: []
}

export const postersSlice = createSlice({
    name: "posters",
    initialState,
    reducers: {
        setPosters: (state, action) => {
            state.posters = action.payload;
    }
}
})

export const {setPosters} = postersSlice.actions;
export default postersSlice.reducer;