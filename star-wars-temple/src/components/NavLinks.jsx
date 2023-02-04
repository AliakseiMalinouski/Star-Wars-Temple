import React from 'react';
import {NavLink} from 'react-router-dom';
import { starWarsEvents } from '../events';
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const NavLinks = ({name, url, namePage}) => {

    let location = useLocation();

    let currentPage = location.pathname;

    const changeLocation = useCallback(() => {
        starWarsEvents.emit("changeLocation", name);
    }, [name])

    useEffect(() => {
        if(currentPage === 'DataBank') changeLocation();
    }, [changeLocation, currentPage])

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