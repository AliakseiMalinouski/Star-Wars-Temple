import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { MoreSerial } from "./MoreSerial";

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

    let currentSeriesMemoizeed = useMemo(() => <MoreSerial 
    key={currentSeries.code}
    name={currentSeries.name}
    genre={currentSeries.genre}
    platform={currentSeries.platform}
    studio={currentSeries.studio}
    creater={currentSeries.creater}
    image={currentSeries.image}
    year={currentSeries.year}
    pg={currentSeries.pg}
    description={currentSeries.description}
    />, [currentSeries])

    return (
        <>
            {currentSeriesMemoizeed}
        </>
    )
}