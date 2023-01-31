import React from "react";

export const FavouriteCharacter = ({name, clan, image}) => {



    return (
            <div className="FavouriteHero">
                <h3>{name}</h3>
                <p>{clan}</p>
            </div>
    )
}