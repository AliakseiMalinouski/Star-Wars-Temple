import React from "react";

export const FilmSkywalkerSaga = React.memo(({title, rating, year, time, genre, disc, numberDisc, viewing, ratio, image}) => {
    return (
        <div className="Film">
            <img src={image} alt='Poster'/>
            <h4>{title}</h4>
            <div className="InformationFilms">
                <p>Genre: {genre}</p>
                <p>Duration: {time}</p>
                <p>Release year: {year}</p>
                <p>Rating: {rating}</p>
                <p>Viewing: {viewing}</p>
                <p>Disc: {disc}</p>
            </div>
        </div>
    )
})