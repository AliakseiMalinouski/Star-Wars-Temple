import React from "react";

export const MoreAboutPostNews = React.memo(({title, image, links, description}) => {
    return (
        <div className="MoreAboutPostNews">
            <h4>{title}</h4>
            <img src={image} alt='Poster'/>
            <p>{description}</p>
            {
                links.map(e => <a href={e} target='_blank' rel="noreferrer" key={Math.random()}>{e}</a>)
            }
        </div>
    )
})