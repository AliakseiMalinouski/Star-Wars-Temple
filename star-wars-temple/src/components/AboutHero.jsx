import React from "react";
import { AppearancesHero } from "./AppearancesHero";
import { AffiliationsHero } from "./AffiliationsHero";
import { HistoryOfHero } from "./HistoryOfHero";

export const AboutHero = React.memo(({currentHero})=> {
    
    console.log(currentHero)

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
                    <div className="WrapperAppearances">
                        <h3>Appearances</h3>
                        <ul className="Appearances">
                            {
                                (currentHero.appearances === undefined || currentHero.appearances === null || currentHero.appearances === [])
                                ?
                                <div>loading</div>
                                :
                                currentHero.appearances.map(e => <AppearancesHero key={e.code} appearance={e.appearance}/>)
                            }
                        </ul>
                    </div>
                    <div className="WrapperAffiliations">
                        <h3>Affiliations</h3>
                        <ul className="Affiliations">
                            {
                                (currentHero.affiliations === undefined || currentHero.affiliations === null || currentHero.affiliations === []) 
                                ?
                                <div>loading</div>
                                :
                                currentHero.affiliations.map(e => <AffiliationsHero key={e.code} affiliation={e.place}/>)
                            }
                        </ul>
                    </div>
                    <div className="Gender">
                        <h3>Gender</h3>
                        <p>{currentHero.gender}</p>
                    </div>
                    <div className="Species">
                        <h3>Species</h3>
                        <p>{currentHero.species}</p>
                    </div>
                    <div className="Vehicles">
                        <h3>Vehicles</h3>
                        <p>{currentHero.vehicles}</p>
                    </div>
                    <div className="Weapon">
                        <h3>Weapon</h3>
                        <p>{currentHero.weapon}</p>
                    </div>
                </div>
                <div className="HistoryOfHero">
                    <h2>History</h2>
                        <div className="BordersHistoryTitle">
                            <div className="SmallBorderHistory"></div>
                            <div className="BigBorderHistory"></div>
                        </div>
                    {
                        (currentHero.about === undefined || currentHero.about === null || currentHero.about === [])
                        ?
                        <div>loading</div>
                        :
                        currentHero.about.map(e => <HistoryOfHero key={e.code} text={e.text} image={e.image} title={e.title}/>)
                    }
                </div>
            </>
        )
})