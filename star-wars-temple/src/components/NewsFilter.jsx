import React from "react";
import {starWarsEvents} from '../events';

export const NewsFilter = ({title, currentTitle}) => {

    const chooseCategory = () => {
        starWarsEvents.emit("selectedNewsCategory", title);
    }

    if(currentTitle === title) {
        return (
            <div className="NewsTitle" style={{color: 'white', fontWeight: '500', transition: '0.5s'}} onClick={chooseCategory}>
                {title}
            </div>
        )
    }
    else {
        return (
            <div className="NewsTitle" onClick={chooseCategory}>
                {title}
            </div>
        )
    }
}