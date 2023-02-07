import React from "react";
import {starWarsEvents} from '../events';

export const NewsFilter = ({title}) => {

    const chooseCategory = () => {
        starWarsEvents.emit("selectedNewsCategory", title);
    }

    return (
        <div className="NewsTitle" onClick={chooseCategory}>
            {title}
        </div>
    )
}