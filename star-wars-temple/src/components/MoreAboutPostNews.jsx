import React from "react";

export const MoreAboutPostNews = React.memo(({title, image, links, description}) => {
    return (
        <div className="MoreAboutPostNews">
            <h3>{title}</h3>
            <img src={image} alt='Poster Series'/>
            <p>{description}</p>
            <h4>Useful links:</h4>
            {
                links.map(link => <a key={Math.random()} href={link} rel="noreferrer" target='_blank'>{link}</a>)
            }
        </div>
    )
})