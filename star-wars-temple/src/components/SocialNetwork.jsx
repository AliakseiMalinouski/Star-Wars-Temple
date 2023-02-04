import React from "react";

export const SocialNetwork = React.memo(({network, icon, url}) => {
    return (
        <a href={url} className='SocialNetwork' target='_blank' rel="noreferrer">
            <img src={icon} alt={network}/>
        </a>
    )
})