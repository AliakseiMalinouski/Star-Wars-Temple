import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {starWarsEvents} from '../events';


export const Titles = React.memo(({name, code, currentTitle}) => {

    const universe = useSelector(state => state.universe.universe);


    const [currentLength, setCurrentLength] = useState(null)

    useEffect(() => {
        let neededArray = universe.filter(element => {
            return element.type === name.toLowerCase();
        });
        setCurrentLength(neededArray.length);
    }, [universe, name, setCurrentLength]);

    const selectedCategory = () => {
        starWarsEvents.emit("Select", name);
    }

    console.log(currentTitle)

    if(name === currentTitle) {
        return (
            <li onClick={selectedCategory} className='SelectTitle'>
                {name}
                {
                    name === 'All'
                    ?
                    <span className="CategoryLength">{universe.length}</span>
                    :
                    <span className="CategoryLength">{currentLength}</span>
                }
            </li>
        )
    }
    else {
        return (
            <li onClick={selectedCategory}>
                {name}
                {
                    name === 'All'
                    ?
                    <span className="CategoryLength">{universe.length}</span>
                    :
                    <span className="CategoryLength">{currentLength}</span>
                }
            </li>
        )
    }
})