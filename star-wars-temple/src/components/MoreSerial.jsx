import React from "react";

export const MoreSerial = ({name, image, genre, platform, studio, creater, year, pg, description}) => {
    return (
        <div className="MoreSpecial">
            <h2>{name}</h2>
            <p>
                <span>USA</span><span>/</span><span>{year}</span><span>/</span><span>{pg}</span>
            </p>
            <div className="OtherInfoAboutSeries">
                <img src={image} alt='Poster'/>
                <p>
                    <span>{description}</span>
                    <span>PG: {pg}</span>
                    <span>Genre: {genre}</span>
                    <span>Creater: {creater}</span>
                    <span>Platfrom: {platform}</span>
                    <span>Studio: {studio}</span>
                </p>
            </div>
        </div>
    )
}