import React from "react";
import { useParams } from "react-router-dom";

export const DetailsConsolePcGames = () => {

    let params = useParams();

    let consoleOrPcGameName = params.consoleorpcgamename;

    return (
        <div style={{color: "white"}}>
            some info about {consoleOrPcGameName}
        </div>
    )
}