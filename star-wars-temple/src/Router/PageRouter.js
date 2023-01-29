import {Route, Routes} from 'react-router-dom';
import React from 'react';
import { PageDataBank } from '../Pages/PageDataBank';
import { PageHeroDetails } from '../Pages/PageHeroDetails';
import {PageFilms} from '../Pages/PageFilms';
import {PageFilmsDetails} from '../Pages/PageFilmsDetails';
import { PageFavourite } from '../Pages/PageFavourite';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageDataBank/>}/>
            <Route path='herodetails/:heroname' element={<PageHeroDetails/>} />
            <Route path='/films' element={<PageFilms/>}/>
            <Route path='/detailsfilm/:filmname' element={<PageFilmsDetails/>}/>
            <Route path='/favouritecharacters' element={<PageFavourite/>}/>
        </Routes>
    )
}