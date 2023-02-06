import React from "react";
import { useNavigate } from "react-router-dom";

export const NewGame = React.memo(({image, name, desc}) => {

    let navigate = useNavigate();

    const goToDetailtNewGame = () => {
        const uri = "/detailsnewgame/" + name;
        navigate(uri);
    }

    return (
        <div className="NewGame" onClick={goToDetailtNewGame}>
            <img src={image} alt='Game Poster'/>
            <div className="AboutNewGame">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
})