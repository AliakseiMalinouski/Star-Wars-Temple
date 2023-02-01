import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const SerialDetails = () => {

    let params = useParams();

    let seriesName = params.seriesname;

    const series = useSelector(state => state.series.series);

    const [currentSeries, setCurrentSeries] = useState({});

    useEffect(() => {
        let neededSeries = series.find(el => {
            return el.name === seriesName;
        });
        setCurrentSeries(neededSeries);
    }, [series, seriesName]);

    console.log(currentSeries)

    return (
        <div style={{color: 'white'}}>
            some info about {seriesName}
        </div>
    )
}