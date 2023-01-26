import React from "react";

export const HistoryOfHero = ({title, image, text}) => {
    return (
        <div className="Part">
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} alt="History"/>
        </div>
    )
}