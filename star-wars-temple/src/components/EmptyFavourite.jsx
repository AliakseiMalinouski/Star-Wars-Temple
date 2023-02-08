import React from "react";
import { useState } from "react";

export const EmptyFavourite = React.memo(() => {

    const [hintState, setHintState] = useState(false);

    return (
        <div className="EmptyFavourite">
            <h4>The favourite characters section is empty!</h4>
            {
                hintState
                ?
                <>
                    <img src="https://i.ibb.co/5GWVZ9M/hint-Star-Wars.png" alt="Hint Favourite"/>
                    <p>
                    To add a character to the 'Favourite Characters' section and calculate your favourite character type, add the character to the section by clicking on the 'Star' in the character description
                    </p>
                </>
                :
                <p style={{paddingTop: "50px"}}>To find out how to add a character, open the tooltip below</p>
            }
            <button className={hintState ? "OpenedStateButton" : "DefaultStateButton"} type="button" onClick={(EO) => setHintState(prev => !prev)}>
                {
                    (hintState) ? <>Close the tooltip</> : <>Open the tooltip</>
                }
            </button>
        </div>
    )
})