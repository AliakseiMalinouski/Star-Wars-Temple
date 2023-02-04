import React from "react"
import { useEffect, useState } from "react"
import { skywalkerSagaThunk } from "../Redux/skywalkerSagaThunk";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { FilmSkywalkerSaga } from "./FilmSkywalkerSaga";
import { FilterFilms } from "./FilterFilms";
import { categoriesFilmThunk } from "../Redux/categoriesFilmsThunk";
import { starWarsEvents } from "../events";
import { Error } from "./Error";


export const Films = () => {

    let dispatch = useDispatch();

    const skywalkerSagaFilms = useSelector(state => state.skywalkerSaga.films);
    const skywalkerSagaFilmsLoadState = useSelector(state => state.skywalkerSaga.loadState);
    const categoriesFilms = useSelector(state => state.filterFilm.categories);

    const [currentTitle, setCurrentTitle] = useState("All");

    useEffect(() => {   
        if(!skywalkerSagaFilms.length) dispatch(skywalkerSagaThunk);
    }, [dispatch, skywalkerSagaFilms]);

    useEffect(() => {
        if(!categoriesFilms.length) dispatch(categoriesFilmThunk);
    }, [dispatch, categoriesFilms]);

    useEffect(() => {
        starWarsEvents.addListener("SelectCategory", changeCategory);
        return () => {
            starWarsEvents.removeListener("SelectCategory", changeCategory);
        }
    }, []);

    let filmsMemoizeed = useMemo(() => (currentTitle === 'All')
    ?
    skywalkerSagaFilms.map(e => <FilmSkywalkerSaga 
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
    />)
    :
    skywalkerSagaFilms.filter(elem => {
        return elem.type === currentTitle.toLowerCase();
    }).map(e => <FilmSkywalkerSaga 
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
    />), [skywalkerSagaFilms, currentTitle])
    
    let categoriesMemoizeed = useMemo(() => categoriesFilms.map(e => <FilterFilms key={e.code} title={e.category} selectedCategory={currentTitle}/>) , [categoriesFilms, currentTitle])

    const changeCategory = (title) => {
        setCurrentTitle(title);
    }

    return (
        <>
            <h3 className="FilteringByFilm">Filtering by film</h3>
            <ul className="FilterFilms">{categoriesMemoizeed}</ul>
            <div className="Films" style={{justifyContent: filmsMemoizeed.length <= 2 ? "space-around" : "space-evenly"}}>
                {(skywalkerSagaFilmsLoadState === 1 && <div>Wait a moment</div>)}
                {(skywalkerSagaFilmsLoadState === 2 && filmsMemoizeed)}
                {(skywalkerSagaFilmsLoadState === 3 && <Error/>)}
            </div>
        </>
    )
}