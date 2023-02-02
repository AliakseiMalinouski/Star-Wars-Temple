import React from 'react';
import {NavLink} from 'react-router-dom';
import { starWarsEvents } from '../events';
import { useEffect, useCallback } from 'react';

export const NavLinks = ({name, url, namePage}) => {

    const changeLocation = useCallback(() => {
        starWarsEvents.emit("changeLocation", name);
    }, [name])

    useEffect(() => {
        if(name === 'DataBank') changeLocation();
    }, [changeLocation, name])

    if(name === namePage) {
        return (
            <>
                <NavLink className='BorderBottomNavLink' onClick={changeLocation} to={url}>{name}</NavLink>
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