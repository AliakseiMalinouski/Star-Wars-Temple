import {configureStore} from '@reduxjs/toolkit';

import navlinksSlice from './navlinksSlice';
import titlesSlice from './titlesSlice';
import currentHeroSlice from './currentHeroSlice';
import universeSlice from './universeSlice';
import skywalkerSagaSlice from './skywalkerSagaSlice';
import FilterFilmSlice from './FilterFilmSlice';
import favouriteSlice from './favouriteSlice';
import seriesSlice from './seriesSlice';
import postersSlice from './postersSlice';
import socialNetworksSlice from './socialNetworksSlice';
import copyRightSlice from './copyRightSlice';
import avatarSlice from './avatarSlice';
import dataCurrentUserSlice from './dataCurrentUserSlice';
import interactiveNewSlice from './interactiveNewSlice';

export const store = configureStore({
    reducer: {
        navLinks: navlinksSlice,
        titles: titlesSlice,
        universe: universeSlice,
        currentHero: currentHeroSlice,
        skywalkerSaga: skywalkerSagaSlice,
        filterFilm: FilterFilmSlice,
        favourite: favouriteSlice,
        series: seriesSlice,
        posters: postersSlice,
        networks: socialNetworksSlice,
        copy: copyRightSlice,
        avatar: avatarSlice,
        userData: dataCurrentUserSlice,
        newgames: interactiveNewSlice
    }
});