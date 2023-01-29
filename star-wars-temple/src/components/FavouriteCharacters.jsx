import React from "react";
import { useMemo, useEffect, useState } from "react";
import { FavouriteCharacter } from "./FavouriteCharacter";

export const FavouriteCharacters = () => {


    const [favouriteCharactersInLocalStorage, setFavouriteCharactersInLocalStorage] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favouriteChacarters"));
        setFavouriteCharactersInLocalStorage(data);
    }, []);

    let favouriteCharactersMemoizeed = useMemo(() => favouriteCharactersInLocalStorage === [] || favouriteCharactersInLocalStorage === null || favouriteCharactersInLocalStorage === undefined 
    ?
    null
    :
    favouriteCharactersInLocalStorage.map(e => <FavouriteCharacter key={e.code} name={e.name}/>), [favouriteCharactersInLocalStorage]);

    const clearLocalStorageFavourite = () => {
        localStorage.removeItem("favouriteChacarters");
        setFavouriteCharactersInLocalStorage([]);
    }

    return (
        <div className="FavouriteCharacters"> 
            {favouriteCharactersInLocalStorage === [] || favouriteCharactersInLocalStorage === null || favouriteCharactersInLocalStorage === undefined 
                ?
                <div>favourite is empty</div>
                :
                favouriteCharactersMemoizeed
            }
            <button type="button" onClick={clearLocalStorageFavourite}>Clear Favourite</button>
        </div>
    )
}