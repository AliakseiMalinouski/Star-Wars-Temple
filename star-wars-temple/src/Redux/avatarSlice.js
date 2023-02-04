import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avatars: []
}

export const avatarSlice = createSlice({
    name: "avatar",
    initialState,
    reducers: {
        setAvatars: (state, action) => {
            state.avatars = action.payload;
        }
    }
})

export const {setAvatars} = avatarSlice.actions;
export default avatarSlice.reducer; 