import React from "react";

export const CurrentConsoleOrPcGame = ({name, imagedetails, buy, desc}) => {
    return (
        <div className="CurrentConsoleOrPcGame">
            <img src={imagedetails} alt='Game Poster'/>
            <div className="MoreAboutCurrentConsoleOrPcGame">
                <h4>{name}</h4>
                <p>{desc}</p>
                <a href={buy} target='_blank' rel="noreferrer">Buy now</a>
            </div>
        </div>
    )
}