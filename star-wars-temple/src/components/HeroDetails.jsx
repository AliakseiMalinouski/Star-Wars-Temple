import React from "react";
import { useEffect, useCallback } from "react";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { updateHero } from "../Redux/currentHeroSlice";
import { universeThunk } from "../Redux/universeThunk";
import { AboutHero } from "./AboutHero";
import { Loading } from "./Loading";
import { starWarsEvents } from "../events";
import { setHero } from "../Redux/favouriteSlice";
import { configureState } from "../Redux/favouriteSlice";

export const HeroDetails = React.memo(() => {

    let params = useParams();
    let dispatch = useDispatch();

    let heroName = params.heroname;

    const universe = useSelector(state => state.universe.universe);
    const currentHero = useSelector(state => state.currentHero.currentHero);
    const favouriteCharaters = useSelector(state => state.favourite.favouriteCharacters);

    useEffect(() => {
        const data = localStorage.getItem("favouriteChacarters") ? JSON.parse(localStorage.getItem("favouriteChacarters")) : []
        if(favouriteCharaters.length === 0 && data.length) {
            dispatch(configureState(data));
        }
        localStorage.setItem("favouriteChacarters", JSON.stringify(favouriteCharaters));
    }, [favouriteCharaters, dispatch]);

    const addToFavouriteCharacters = useCallback((hero) => {
        let isIn = false;
        favouriteCharaters.forEach(elem => {
            if(hero.code === elem.code || hero.type === 'locations') isIn = true;
        });
        if(!isIn) dispatch(setHero(hero));
    }, [favouriteCharaters, dispatch]);

    useEffect(() => {
        starWarsEvents.addListener("AddToFavourite", addToFavouriteCharacters);
        return () => {
            starWarsEvents.removeListener("AddToFavourite", addToFavouriteCharacters);
        }
    }, [addToFavouriteCharacters])

    useEffect(() => {
        if(!universe.length) dispatch(universeThunk);
        let findedHero = universe.find(elem => {
            return elem.name === heroName;
        });
        dispatch(updateHero(findedHero));
    }, [universe, heroName, dispatch, currentHero]);



    return (
        <div className="HeroDetails">
            {(currentHero === undefined || currentHero === null || currentHero === {}) && <Loading/>}
            {(currentHero) && <AboutHero 
                key={currentHero.code}
                currentHero={currentHero}
            />}
        </div>
    )
})