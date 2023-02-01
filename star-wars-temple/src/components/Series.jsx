import React from "react";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {seriesThunk} from '../Redux/seriesThunk';
import { Serial } from "./Serial";
import { postersThunk } from "../Redux/postersThunk";

export const Series = React.memo(() => {

    let dispatch = useDispatch();

    const series = useSelector(state => state.series.series);
    const posters = useSelector(state => state.posters.posters);

    useEffect(() => {
        dispatch(seriesThunk)
    }, [dispatch]);

    useEffect(() => {
        dispatch(postersThunk)
    }, [dispatch]);

    let seriesMemoizeed = useMemo(() => series.map(e => <Serial 
    key={e.code}
    code={e.code}
    name={e.name} 
    image={e.image} 
    genre={e.genre}
    year={e.year}
    studio={e.studio}
    platform={e.platform}
    creater={e.creater}
    pg={e.pg}
    description={e.description}

    />), [series]);
        
    console.log(posters)

    return (
        <>
            <div className='Series'>
                {seriesMemoizeed}
            </div>

        </>
    )
})