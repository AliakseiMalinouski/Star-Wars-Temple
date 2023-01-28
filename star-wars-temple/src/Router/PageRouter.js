import {Route, Routes} from 'react-router-dom';
import React from 'react';
import { PageDataBank } from '../Pages/PageDataBank';
import { PageHeroDetails } from '../Pages/PageHeroDetails';
import {PageFilms} from '../Pages/PageFilms';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageDataBank/>}/>
            <Route path='herodetails/:heroname' element={<PageHeroDetails/>} />
            <Route path='/films' element={<PageFilms/>}/>
        </Routes>
    )
}