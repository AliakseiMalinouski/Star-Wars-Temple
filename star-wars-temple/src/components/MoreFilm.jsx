import React from "react";

export const MoreFilm = React.memo(({title, year, duration, genre, image, type, disc, viewing, pg, description}) => {
    return (
        <div className="MoreFilm">
            <img src={image} alt='Poster'/>
            <div className="OtherInfoMoreFilm">
                <h3>{title}</h3>
                <h5>Genre: {genre}</h5>
                <p>{description}</p>
                <div>
                    <h6>{pg}</h6>
                    <p>{year}</p>
                    <p>Duration: {duration} min.</p>
                </div>
            </div>
        </div>
    )
})