import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavLinks = ({name, url, namePage}) => {

    console.log(name.toLowerCase(), namePage.toLowerCase())

    if(name.toLowerCase() === namePage) {
        return (
            <>
                <NavLink style={{color: 'red'}} to={url}>{name}</NavLink>
            </>
        )
    }
    else {
        return (
            <>
                <NavLink to={url}>{name}</NavLink>
            </>
        )
    }
}