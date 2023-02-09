import React from "react";
import { useMemo, useEffect, useState } from "react";
import { FavouriteCharacter } from "./FavouriteCharacter";
import {removeHero} from '../Redux/favouriteSlice';
import { useDispatch } from "react-redux";
import { EmptyFavourite } from "./EmptyFavourite";

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
        setFinallyCategory("");
    }

    const generateFavouriteClan = () => {
        let lengthArray = [];
        let sith = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Sith');
        let bountyHunter = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Bounty Hunter');
        let droids = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Confederation of Separatists');
        let empire = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'Galactic Empire');
        let firstOrder = favouriteCharactersInLocalStorage.filter(hero => hero.clan === 'First Order');
        let clansArray = [sith, bountyHunter, droids, empire, firstOrder];
        lengthArray.push(sith.length, bountyHunter.length, droids.length, empire.length, firstOrder.length);
        let maxLengthOfClan = Math.max.apply(null, lengthArray);
        let resultClan = clansArray.find(elem => {
            return elem.length === maxLengthOfClan;
        });
        let finallyCategory = "";
        resultClan.forEach(elem => {
            finallyCategory = elem.clan;
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
                <EmptyFavourite/>
                :
                <div className="ToolsFavourite">
                    <button className="ClearFavouriteButton" type="button" onClick={clearLocalStorageFavourite}>Clear Favourite</button>
                    <br/>
                    <br/>
                    <button className="GenerateClanButton" style={{opacity: finallyCategory === "" ? "" : '0.3'}} disabled={finallyCategory === "" ? false : true} type="button" onClick={generateFavouriteClan}>Generate clan</button>
                </div>
            }
            {
                finallyCategory !== ""
                ?
                <div className="WrapFinallyClan">
                    <div className="FinallyClan">A calculation of the character types chosen shows that your favourite character type is <span>{finallyCategory}</span></div>
                </div>
                : 
                null
            }
        </div>
    )
}