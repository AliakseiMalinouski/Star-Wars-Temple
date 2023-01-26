import React from "react";
import { AppearancesHero } from "./AppearancesHero";

export const AboutHero = React.memo(({currentHero})=> {
    
    console.log(currentHero.appearances)

    return (
            <>
                    <div className="BrieflyAboutHero">
                    {
                        (currentHero.imagedetails !== undefined)
                        ?
                        <img src={currentHero.imagedetails} alt='Hero' className="HeroImageDetails"/>
                        : 
                        null
                    }
                    <div className="Description">
                        <h2>{currentHero.name}</h2>
                        <p>{currentHero.description}</p>
                    </div>
                </div>
                <div className="MoreAboutTheCharacter">
                    <ul>
                        {
                            (currentHero.appearances === undefined || currentHero.appearances === null || currentHero.appearances === [])
                            ?
                            <div>loading</div>
                            :
                            currentHero.appearances.map(e => <AppearancesHero key={e.code} appearance={e.appearance}/>)
                        }
                    </ul>
                </div>
            </>
        )
})