import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {}
}

export const dataCurrentUserSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
        removeUser: (state, action) => {
            state.userData = {};
        }
    }
})

export const {addUser, removeUser} = dataCurrentUserSlice.actions;
export default dataCurrentUserSlice.reducer;