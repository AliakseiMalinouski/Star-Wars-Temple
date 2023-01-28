import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: []
}

export const skywalkerSagaSlice = createSlice({
    name: "skywalkerSaga",
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload;
        }
    }
});

export const {setFilms} = skywalkerSagaSlice.actions;
export default skywalkerSagaSlice.reducer;