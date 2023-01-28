import React from "react";
import { useEffect, useState } from "react";
import { starWarsEvents } from "../events";
import { useSelector } from "react-redux";

export const FilterFilms = React.memo(({selectedCategory, title}) => {

    const skywalkerSagaFilms = useSelector(state => state.skywalkerSaga.films);

    const [currentLength, setCurrentLength] = useState([]);

    useEffect(() => {
        let neededHash = skywalkerSagaFilms.filter(elem => {
            return elem.type === title.toLowerCase();
        });
        setCurrentLength(neededHash);
    }, [skywalkerSagaFilms, setCurrentLength, title]);

    const SelectCategory = () => {
        starWarsEvents.emit("SelectCategory", title);
    }

    if(selectedCategory === title) {
        return (
            <li onClick={SelectCategory} className="SelectedCategory">{title} ({
                (title === 'All') ? skywalkerSagaFilms.length : currentLength.length
            })</li>
        )
    }
    else {
        return (
            <li onClick={SelectCategory}>{title} ({
                (title === 'All') ? skywalkerSagaFilms.length : currentLength.length
            })</li>
        )
    }
})