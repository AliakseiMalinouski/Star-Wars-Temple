import React from "react";
import {useParams} from 'react-router-dom';

export const HeroDetails = () => {

    let params = useParams();

    let heroName = params.heroname;

    return (
        <div>
            some info about {heroName}
        </div>
    )
}