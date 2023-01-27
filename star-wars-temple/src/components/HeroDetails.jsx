import React from "react";
import { useEffect } from "react";
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { updateHero } from "../Redux/currentHeroSlice";
import { universeThunk } from "../Redux/universeThunk";
import { AboutHero } from "./AboutHero";
import { Loading } from "./Loading";

export const HeroDetails = React.memo(() => {

    let params = useParams();
    let dispatch = useDispatch();

    let heroName = params.heroname;

    const universe = useSelector(state => state.universe.universe);
    const currentHero = useSelector(state => state.currentHero.currentHero);

    useEffect(() => {
        if(!universe.length) dispatch(universeThunk);
        let findedHero = universe.find(elem => {
            return elem.name === heroName;
        });
        dispatch(updateHero(findedHero));
    }, [universe, heroName, dispatch, currentHero]);

    console.log(currentHero)

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