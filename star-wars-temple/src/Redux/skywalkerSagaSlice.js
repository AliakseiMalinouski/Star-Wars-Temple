import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    loadState: 0
}

export const skywalkerSagaSlice = createSlice({
    name: "skywalkerSaga",
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload;
        },
        updateLoadStateSkywalkerFilms: (state, action) => {
            state.loadState = action.payload;
        }
    }
});

export const {setFilms, updateLoadStateSkywalkerFilms} = skywalkerSagaSlice.actions;
export default skywalkerSagaSlice.reducer;