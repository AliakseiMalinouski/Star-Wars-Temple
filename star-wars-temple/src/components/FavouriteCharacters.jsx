import React from "react";
import { useMemo, useEffect, useState } from "react";
import { FavouriteCharacter } from "./FavouriteCharacter";
import {removeHero} from '../Redux/favouriteSlice';
import { useDispatch } from "react-redux";

export const FavouriteCharacters = () => {

    let dispatch = useDispatch();

    const [favouriteCharactersInLocalStorage, setFavouriteCharactersInLocalStorage] = useState([]);
    const [currentFlex, setCurrentFlex] = useState(false);
    const [finallyCategory, setFinallyCategory] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("favouriteChacarters") ? JSON.parse(localStorage.getItem("favouriteChacarters")) : [];
        setFavouriteCharactersInLocalStorage(data);
        data.length < 3 ? setCurrentFlex(true) : setCurrentFlex(false);
    }, [setCurrentFlex]);

    let favouriteCharactersMemoizeed = useMemo(() => favouriteCharactersInLocalStorage === [] || favouriteCharactersInLocalStorage === null || favouriteCharactersInLocalStorage === undefined 
    ?
    null
    :
    favouriteCharactersInLocalStorage.map(e => <FavouriteCharacter key={e.code} name={e.name} clan={e.clan} image={e.image} flexState={currentFlex}/>), [favouriteCharactersInLocalStorage, currentFlex]);

    const clearLocalStorageFavourite = () => {
        localStorage.removeItem("favouriteChacarters");
        setFavouriteCharactersInLocalStorage([]);
        dispatch(removeHero());
    }

    const generateFavouriteClan = () => {
        let lengthArray = [];
        let sith = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Sith');
        let bountyHunter = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Bounty Hunter');
        let droids = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Droids');
        let clansArray = [sith, bountyHunter, droids];
        lengthArray.push(sith.length, bountyHunter.length, droids.length);
        let maxLengthOfClan = Math.max.apply(null, lengthArray);
        let resultClan = clansArray.find(elem => {
            return elem.length === maxLengthOfClan;
        });
        let finallyCategory = "";
        resultClan.forEach(elem => {
            if(elem.clan === 'Sith') finallyCategory = 'Sith';
            else if(elem.clan === 'Droids') finallyCategory = 'Droids';
            else if(elem.clan === 'Bounty Hunter') finallyCategory = 'Bounty Hunter';
        });
        setFinallyCategory(finallyCategory);
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
            {
                !favouriteCharactersInLocalStorage.length 
                ?
                null
                :
                <div className="ToolsFavourite">
                    <button type="button" onClick={clearLocalStorageFavourite}>Clear Favourite</button>
                    <br/>
                    <br/>
                    <button type="button" onClick={generateFavouriteClan}>Generate clan</button>
                </div>
            }
            {
                finallyCategory !== ""
                ?
                <div style={{color: 'white'}}>Your best category is {finallyCategory}</div>
                : 
                null
            }
        </div>
    )
}