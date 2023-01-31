import React from "react";

export const FavouriteCharacter = ({name, clan, image}) => {
    return (
        <div className="FavouriteHero">
            {name}
            {clan}
        </div>
    )
}