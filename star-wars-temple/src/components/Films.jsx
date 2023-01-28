import React from "react"
import { useEffect } from "react"
import { skywalkerSagaThunk } from "../Redux/skywalkerSagaThunk";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { FilmSkywalkerSaga } from "./FilmSkywalkerSaga";

export const Films = () => {

    let dispatch = useDispatch();

    const skywalkerSagaFilms = useSelector(state => state.skywalkerSaga.films);

    useEffect(() => {   
        dispatch(skywalkerSagaThunk);
    }, [dispatch]);

    let filmsMemoizeed = useMemo(() => skywalkerSagaFilms.map(e => <FilmSkywalkerSaga 
        key={e.movie_id}
        title={e.title}
        genre={e.category_name}
        year={e.release_year}
        time={e.running_time}
        rating={e.rating_name}
        disc={e.disc_format_name}
        numberDisc={e.number_discs}
        viewing={e.viewing_format_name}
        ratio={e.aspect_ratio_name}
        image={e.image}
    />), [skywalkerSagaFilms])

    return (
        <div className="Films">
            {filmsMemoizeed}
        </div>
    )
}