import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skywalkerSagaThunk } from "../Redux/skywalkerSagaThunk";

export const FilmDetails = () => {

    const skywalkerSagaFilms = useSelector(state => state.skywalkerSaga.films);

    let params = useParams();

    let dispatch = useDispatch();

    let filmName = params.filmname;

    useEffect(() => {
        if(!skywalkerSagaFilms.length) dispatch(skywalkerSagaThunk);
        let neededFilm = skywalkerSagaFilms.find(elem => elem.title === filmName);
        console.log(neededFilm)
    })

    return (
        <div style={{color: 'white'}}>
            some info about {filmName}
        </div>
    )
}