import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { interactiveNewThunk } from "../Redux/interactiveNewThunk";
import { NewGame } from "./NewGame";
import { consolePcGamesThunk } from "../Redux/consolePcGamesThunk";
import { ConsoleAndPcGames } from "./ConsoleAndPcGames";

export const Interactive = React.memo(() => {

    let dispatch = useDispatch();

    const newGames = useSelector(state => state.newgames.games);
    const consoleAndPcGames = useSelector(state => state.consolepcgames.games);

    useEffect(() => {
        if(!newGames.length) dispatch(interactiveNewThunk);
    }, [dispatch, newGames]);

    useEffect(() => {
        if(!consoleAndPcGames.length) dispatch(consolePcGamesThunk);
    }, [dispatch, consoleAndPcGames])

    let newGamesMemoizeed = useMemo(() => newGames === undefined || newGames === null || newGames === []
    ?
    null
    :
    newGames.map(e => <NewGame key={e.code} name={e.name} desc={e.desc} image={e.image}/>)
    , [newGames]);

    let consoleAndPcGamesMemoizeed = useMemo(() => consoleAndPcGames === undefined || consoleAndPcGames === null || consoleAndPcGames === []
    ?
    null
    :
    consoleAndPcGames.map(e => <ConsoleAndPcGames
    key={e.code}
    name={e.name}
    image={e.image}
    />), [consoleAndPcGames]
    )

    return (
       <>
        <h4 className="NewGamesAndAppsTitle">The Latest | Star Wars Games + Apps</h4>
        <div className="NewGames">
            {newGamesMemoizeed}
        </div>
        <h4 className="NewGamesAndAppsTitle">Console + PC Games</h4>
        <div className="ConsoleAndPcGames">
            {consoleAndPcGamesMemoizeed}
        </div>
       </>
    )
})