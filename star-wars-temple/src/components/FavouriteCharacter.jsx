import React from "react";

export const FavouriteCharacter = ({name, clan, image, flexState}) => {

    return (
            <div className="FavouriteHero" style={{marginRight: flexState ? '55px' : ''}}>
                <img src={image} alt='Hero'/>
                <div className="RestOfInfoFavHero">
                    <h3>{name}</h3>
                    <p>Category: {clan}</p>
                </div>
            </div>
    )
}