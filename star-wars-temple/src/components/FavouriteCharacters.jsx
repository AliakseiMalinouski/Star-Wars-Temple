import React from "react";
import { useMemo, useEffect, useState } from "react";
import { FavouriteCharacter } from "./FavouriteCharacter";
import {removeHero} from '../Redux/favouriteSlice';
import { useDispatch } from "react-redux";

export const FavouriteCharacters = () => {

    let dispatch = useDispatch();

    const [favouriteCharactersInLocalStorage, setFavouriteCharactersInLocalStorage] = useState([]);
    const [currentFlex, setCurrentFlex] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("favouriteChacarters") ? JSON.parse(localStorage.getItem("favouriteChacarters")) : [];
        setFavouriteCharactersInLocalStorage(data);
        data.length < 3 ? setCurrentFlex(true) : setCurrentFlex(false);
    }, [setCurrentFlex]);

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
                <div className="HeroesCategory" style={{justifyContent: currentFlex ? 'flex-start' : 'space-evenly'}}>
                    {favouriteCharactersMemoizeed}
                </div>
            }
            <button type="button" onClick={clearLocalStorageFavourite}>Clear Favourite</button>
        </div>
    )
}