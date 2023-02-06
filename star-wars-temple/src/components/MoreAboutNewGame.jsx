import React from "react";

export const MoreAboutNewGame = ({about, name, image, desc, fulldesc, date}) => {
    return (
        <div className="MoreAboutNewGame">
            <h2>{name}</h2>
            <div className="OtherInformationAboutTheNewGame">
                <img src={image} alt='Game Poster'/>
                <p>{fulldesc}</p>
            </div>
            <div className="DateOfTheNewGame">{date}</div>
            <h3>More about the game</h3>
            <ul>
                {
                    about === undefined || about === null || about === []
                    ?
                    null
                    :
                    about.map(e => <li key={e.code}>{e.text}</li>)
                }
            </ul>
        </div>
    )
}