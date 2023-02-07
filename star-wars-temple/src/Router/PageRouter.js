import {Route, Routes} from 'react-router-dom';
import React from 'react';
import { PageDataBank } from '../Pages/PageDataBank';
import { PageHeroDetails } from '../Pages/PageHeroDetails';
import {PageFilms} from '../Pages/PageFilms';
import {PageFilmsDetails} from '../Pages/PageFilmsDetails';
import { PageFavourite } from '../Pages/PageFavourite';
import { PageSeries } from '../Pages/PageSeries';
import { PageDetailsSerial } from '../Pages/PageDetailsSerial';
import { PageAuthentication } from '../Pages/PageAuthentication';
import { PageLogin } from '../Pages/PageLogin';
import {PageInteractive} from '../Pages/PageInteractive';
import {PageDetailsNewGame} from '../Pages/PageDetailsNewGame';
import { PageDetailsConsolePcGames } from '../Pages/PageDetailsConsolePcGames';
import {PageNews} from '../Pages/PageNews';
import { PageCurrentPost } from '../Pages/PageCurrentPost';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageDataBank/>}/>
            <Route path='herodetails/:heroname' element={<PageHeroDetails/>} />
            <Route path='/films' element={<PageFilms/>}/>
            <Route path='/detailsfilm/:filmname' element={<PageFilmsDetails/>}/>
            <Route path='/favouritecharacters' element={<PageFavourite/>}/>
            <Route path='/series' element={<PageSeries/>}/>
            <Route path='/seriesdetails/:seriesname' element={<PageDetailsSerial/>}/>
            <Route path='/authentication' element={<PageAuthentication/>}/>
            <Route path='/login' element={<PageLogin/>}/>
            <Route path='/interactive' element={<PageInteractive/>}/>
            <Route path='/detailsnewgame/:newgamename' element={<PageDetailsNewGame/>}/>
            <Route path='/detailsconsoleorpcgame/:consoleorpcgamename' element={<PageDetailsConsolePcGames/>}/>
            <Route path='/news' element={<PageNews/>}/>
            <Route path='/detailsnewspost/:postname' element={<PageCurrentPost/>}/>
        </Routes>
    )
}