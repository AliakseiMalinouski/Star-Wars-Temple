import React from "react";

export const FavouriteCharacter = ({name, clan, image, flexState}) => {



    return (
            <div className="FavouriteHero" style={{marginRight: flexState ? '55px' : ''}}>
                <h3>{name}</h3>
                <p>{clan}</p>
            </div>
    )
}