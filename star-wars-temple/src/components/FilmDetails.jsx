import React from "react";
import { useParams } from "react-router-dom";

export const FilmDetails = () => {

    let params = useParams();

    let filmName = params.filmname;

    return (
        <div style={{color: 'white'}}>
            some info about {filmName}
        </div>
    )
}