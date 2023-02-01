import React from "react";

export const Poster = React.memo(({image, logo, name, disney, youtube, text}) => {

    const posterStyles = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const posterAndorStyles = {
        right: name === 'Andor' ? '50px' : '',
        position: 'absolute',
        top: '100px',
        width: '443px',
        height: '138px'
    }

    return (
        <div className="Poster" style={posterStyles}>
            <img src={logo} alt='Logo' className={name === 'Andor' ? '' : 'LogoPoster'} style={posterAndorStyles}/>
            <div className="PosterText">
                <p>{text}</p>
                <div className="ButtonsPoster">
                    <a href={disney} rel="noreferrer" target="_blank">STREAM NOW</a>
                    <a href={youtube} rel="noreferrer" target="_blank">WATCH TRAILER</a>
                </div>
            </div>
        </div>
    )
})