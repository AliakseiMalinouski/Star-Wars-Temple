import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    networks: []
}

export const socialNetworksSlice = createSlice({
    name: "networks",
    initialState,
    reducers: {
        setNetworks: (state, action) => {
            state.networks = action.payload;
        }
    }
});

export const {setNetworks} = socialNetworksSlice.actions;
export default socialNetworksSlice.reducer;