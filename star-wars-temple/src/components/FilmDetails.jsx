import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skywalkerSagaThunk } from "../Redux/skywalkerSagaThunk";

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
    }, [skywalkerSagaFilms, setCurrentFilm, dispatch, filmName])

    console.log(currentFilm)

    return (
        <div style={{color: 'white'}}>
            some info about {filmName}
        </div>
    )
})