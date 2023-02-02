import React from 'react';
import {NavLink} from 'react-router-dom';
import { starWarsEvents } from '../events';

export const NavLinks = ({name, url, namePage}) => {

    const changeLocation = () => {
        starWarsEvents.emit("changeLocation", name);
    }

    if(name === namePage) {
        return (
            <>
                <NavLink style={{color: 'red'}} onClick={changeLocation} to={url}>{name}</NavLink>
            </>
        )
    }
    else {
        return (
            <>
                <NavLink onClick={changeLocation} to={url}>{name}</NavLink>
            </>
        )
    }
}