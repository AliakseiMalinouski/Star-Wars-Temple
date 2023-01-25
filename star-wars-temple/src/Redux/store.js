import {configureStore} from '@reduxjs/toolkit';

import navlinksSlice from './navlinksSlice';
import titlesSlice from './titlesSlice';
import universeSlice from './universeSlice';

export const store = configureStore({
    reducer: {
        navLinks: navlinksSlice,
        titles: titlesSlice,
        universe: universeSlice
    }
});