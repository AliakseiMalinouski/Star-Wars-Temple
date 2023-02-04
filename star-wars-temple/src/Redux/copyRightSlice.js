import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const copyRightSlice = createSlice({
    name: "copy",
    initialState,
    reducers: {
        setCopy: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {setCopy} = copyRightSlice.actions;
export default copyRightSlice.reducer;