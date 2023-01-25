import {Route, Routes} from 'react-router-dom';
import React from 'react';
import { PageDataBank } from '../Pages/PageDataBank';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageDataBank/>}/>
        </Routes>
    )
}