import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FavouriteCharacter } from "./FavouriteCharacter";

export const FavouriteCharacters = () => {

    const favouriteCharaters = useSelector(state => state.favourite.favouriteCharacters);

    let favouriteCharactersMemoizeed = useMemo(() => favouriteCharaters.map(e => <FavouriteCharacter key={e.code} name={e.name}/>), [favouriteCharaters]);

    return (
        <div className="FavouriteCharacters"> 
            {favouriteCharactersMemoizeed}
        </div>
    )
}