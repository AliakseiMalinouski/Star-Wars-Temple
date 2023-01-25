import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { titlesThunk } from "../Redux/titlesThunks";
import { Titles } from "./Titles";
import {starWarsEvents} from '../events';
import { universeThunk } from "../Redux/universeThunk";
import { Hero } from "./Hero";

export const DataBank = React.memo(() => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(titlesThunk);
    }, [dispatch]);

    useEffect(() => {
        dispatch(universeThunk)
    }, [dispatch]);

    useEffect(() => {
        starWarsEvents.addListener('Select', filteredCategories);
        return () => {
            starWarsEvents.removeListener('Select', filteredCategories);
        }
    }, []);

    const [currentTitle, setCurrentTitle] = useState("All");

    const titlesFilter = useSelector(state => state.titles.titles);
    const universe = useSelector(state => state.universe.universe);

    const filteredCategories = (name) => {
        setCurrentTitle(name);
    }


    return (
        <div className="DataBank">
            <div className="FilterDataBank">
                <ul>
                    {
                        titlesFilter.map(e => <Titles
                        key={e.code}
                        code={e.code}
                        name={e.name}
                        />)
                    }
                </ul>
            </div>
            <div className="Characters">
                    {
                        (currentTitle === 'All')
                        ?
                        universe.map(e => <Hero
                            key={e.code}
                            code={e.code}
                            name={e.name}
                            type={e.type}
                            about={e.about}
                            affiliations={e.affiliations}
                            appearances={e.appearances}
                            description={e.description}
                            gender={e.gender}
                            image={e.image}
                            species={e.species}
                            vehicles={e.vehicles}
                            weapon={e.weapon}
                            />)
                        :
                        universe.filter(element => {
                            return element.type.toLowerCase() === currentTitle.toLowerCase();
                        }).map(e => <Hero
                            key={e.code}
                            code={e.code}
                            name={e.name}
                            type={e.type}
                            about={e.about}
                            affiliations={e.affiliations}
                            appearances={e.appearances}
                            description={e.description}
                            gender={e.gender}
                            image={e.image}
                            species={e.species}
                            vehicles={e.vehicles}
                            weapon={e.weapon}
                            />)
                    }
            </div>
        </div>
    )
})