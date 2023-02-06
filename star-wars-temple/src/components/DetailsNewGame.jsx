import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoreAboutNewGame } from "./MoreAboutNewGame";
import { interactiveNewThunk } from "../Redux/interactiveNewThunk";

export const DetailsNewGame = () => {

    let params = useParams();

    let dispatch = useDispatch();

    let newGameName = params.newgamename;

    const newGames = useSelector(state => state.newgames.games);

    const [currentGame, setCurrentGame] = useState({});

    useEffect(() => {
        if(!newGames.length) dispatch(interactiveNewThunk);
        let neededGame = newGames.find(elem => elem.name === newGameName);
        setCurrentGame(neededGame);
    }, [newGameName, newGames, dispatch]);

    let newGamesMemoizeed = useMemo(() => currentGame === undefined || currentGame === null || currentGame === {}
    ?
    null
    :
    <MoreAboutNewGame 
    key={currentGame.code}
    desc={currentGame.desc}
    name={currentGame.name}
    image={currentGame.imagedetails ? currentGame.imagedetails : currentGame.image}
    fulldesc={currentGame.fulldesc}
    about={currentGame.about}
    date={currentGame.date}
    />, [currentGame])

    return (
        <>{newGamesMemoizeed}</>
    )
}