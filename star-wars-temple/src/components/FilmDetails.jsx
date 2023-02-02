import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skywalkerSagaThunk } from "../Redux/skywalkerSagaThunk";
import { MoreFilm } from "./MoreFilm";

export const FilmDetails = React.memo(() => {

    const skywalkerSagaFilms = useSelector(state => state.skywalkerSaga.films);

    const [currentFilm, setCurrentFilm] = useState({})

    let params = useParams();

    let dispatch = useDispatch();

    let filmName = params.filmname;

    useEffect(() => {
        if(!skywalkerSagaFilms.length) dispatch(skywalkerSagaThunk);
        let neededFilm = skywalkerSagaFilms.find(elem => elem.title === filmName);
        setCurrentFilm(neededFilm);
    }, [skywalkerSagaFilms, setCurrentFilm, dispatch, filmName]);


    let currentFilmMemoizeed = useMemo(() => 
    currentFilm === undefined || currentFilm === {} || currentFilm === null
    ?
    null
    :
    <MoreFilm 
    key={currentFilm.movie_id}
    title={currentFilm.title}
    type={currentFilm.type}
    genre={currentFilm.category_name}
    year={currentFilm.release_year}
    duration={currentFilm.running_time}
    pg={currentFilm.rating_name}
    disc={currentFilm.disc_format_name}
    viewing={currentFilm.viewing_format_name}
    image={currentFilm.image}
    description={currentFilm.description}
    />, [currentFilm]
    )

    return (
        <div style={{color: 'white'}}>
            {currentFilmMemoizeed}
        </div>
    )
})