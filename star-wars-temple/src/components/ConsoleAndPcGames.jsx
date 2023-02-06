import React from "react";
import { useNavigate } from "react-router-dom";

export const ConsoleAndPcGames = ({name, image}) => {

    let navigate = useNavigate();

    const goToConsoleOrPcGameDetails = () => {
        const uri = "/detailsconsoleorpcgame/" + name;
        navigate(uri);
    }

    return (
        <div className="ConsoleAndPcGame" onClick={goToConsoleOrPcGameDetails}>
            <img src={image} alt='Game Poster'/>
            <h3>{name}</h3>
        </div>
    )
}