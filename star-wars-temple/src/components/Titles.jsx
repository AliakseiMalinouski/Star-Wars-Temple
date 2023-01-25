import React from "react";
import {starWarsEvents} from '../events';

export const Titles = React.memo(({name, code}) => {

    const selectedCategory = () => {
        starWarsEvents.emit("Select", name);
    }

    return (
        <li onClick={selectedCategory}>{name}</li>
    )
})