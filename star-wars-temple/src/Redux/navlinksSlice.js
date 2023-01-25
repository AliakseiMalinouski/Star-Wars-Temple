import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    navLinks: []
}

export const navlinksSlice = createSlice({
    name: "navlinks",
    initialState,
    reducers: {
        getLinks: (state, action) => {
            state.navLinks = action.payload;
        }
    }
});

export const {getLinks} = navlinksSlice.actions;
export default navlinksSlice.reducer;