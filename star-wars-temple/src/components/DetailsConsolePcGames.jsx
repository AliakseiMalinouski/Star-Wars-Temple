import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consolePcGamesThunk } from "../Redux/consolePcGamesThunk";
import { CurrentConsoleOrPcGame } from "./CurrentConsoleOrPcGame";

export const DetailsConsolePcGames = React.memo(() => {

    let params = useParams();

    let dispatch = useDispatch();

    let consoleOrPcGameName = params.consoleorpcgamename;

    const consoleAndPcGames = useSelector(state => state.consolepcgames.games);

    const [currentGame, setCurrentGame] = useState({});

    useEffect(() => {
        if(!consoleAndPcGames.length) dispatch(consolePcGamesThunk);
        let neededGame = consoleAndPcGames.find(elem => elem.name === consoleOrPcGameName);
        setCurrentGame(neededGame);
    }, [consoleAndPcGames, dispatch, consoleOrPcGameName]);

    let currentGameMemoizeed = useMemo(() => currentGame === {} || currentGame === undefined || currentGame === null
    ?
    null
    :
    <CurrentConsoleOrPcGame
    key={currentGame.code}
    name={currentGame.name}
    desc={currentGame.desc}
    imagedetails={currentGame.imagedetails}
    buy={currentGame.buy}
    />
    , [currentGame])

    return (
        <>
            {currentGameMemoizeed}
        </>
    )
})