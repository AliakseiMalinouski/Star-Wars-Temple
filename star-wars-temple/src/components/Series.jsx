import React from "react";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {seriesThunk} from '../Redux/seriesThunk';
import { Serial } from "./Serial";

export const Series = () => {

    let dispatch = useDispatch();

    const series = useSelector(state => state.series.series);

    useEffect(() => {
        dispatch(seriesThunk)
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
        

    return (
        <div className='Series'>
            {seriesMemoizeed}
        </div>
    )
}