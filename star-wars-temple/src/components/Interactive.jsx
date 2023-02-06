import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { interactiveNewThunk } from "../Redux/interactiveNewThunk";
import { NewGame } from "./NewGame";

export const Interactive = React.memo(() => {

    let dispatch = useDispatch();

    const newGames = useSelector(state => state.newgames.games);

    useEffect(() => {
        if(!newGames.length) dispatch(interactiveNewThunk);
    }, [dispatch, newGames]);

    let newGamesMemoizeed = useMemo(() => newGames === undefined || newGames === null || newGames === []
    ?
    null
    :
    newGames.map(e => <NewGame key={e.code} name={e.name} desc={e.desc} image={e.image}/>)
    , [newGames])

    return (
       <>
        <h4 className="NewGamesAndAppsTitle">The Latest | Star Wars Games + Apps</h4>
        <div className="NewGames">
            {newGamesMemoizeed}
        </div>
       </>
    )
})