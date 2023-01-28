import React from "react";

export const FilmSkywalkerSaga = React.memo(({title, rating, year, time, genre, disc, numberDisc, viewing, ratio}) => {
    return (
        <div className="Film">
            {title}
        </div>
    )
})