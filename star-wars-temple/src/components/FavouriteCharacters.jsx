import React from "react";
import { useMemo, useEffect, useState } from "react";
import { FavouriteCharacter } from "./FavouriteCharacter";
import {removeHero} from '../Redux/favouriteSlice';
import { useDispatch } from "react-redux";

export const FavouriteCharacters = () => {

    let dispatch = useDispatch();

    const [favouriteCharactersInLocalStorage, setFavouriteCharactersInLocalStorage] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favouriteChacarters"));
        setFavouriteCharactersInLocalStorage(data);
    }, []);

    let favouriteCharactersMemoizeed = useMemo(() => favouriteCharactersInLocalStorage === [] || favouriteCharactersInLocalStorage === null || favouriteCharactersInLocalStorage === undefined 
    ?
    null
    :
    favouriteCharactersInLocalStorage.map(e => <FavouriteCharacter key={e.code} name={e.name} clan={e.clan} image={e.image}/>), [favouriteCharactersInLocalStorage]);

    const clearLocalStorageFavourite = () => {
        localStorage.removeItem("favouriteChacarters");
        setFavouriteCharactersInLocalStorage([]);
        dispatch(removeHero());
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