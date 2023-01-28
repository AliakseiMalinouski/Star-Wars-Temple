import {configureStore} from '@reduxjs/toolkit';

import navlinksSlice from './navlinksSlice';
import titlesSlice from './titlesSlice';
import currentHeroSlice from './currentHeroSlice';
import universeSlice from './universeSlice';
import skywalkerSagaSlice from './skywalkerSagaSlice';
import FilterFilmSlice from './FilterFilmSlice';

export const store = configureStore({
    reducer: {
        navLinks: navlinksSlice,
        titles: titlesSlice,
        universe: universeSlice,
        currentHero: currentHeroSlice,
        skywalkerSaga: skywalkerSagaSlice,
        filterFilm: FilterFilmSlice
    }
});