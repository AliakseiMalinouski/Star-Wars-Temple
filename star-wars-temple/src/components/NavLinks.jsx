import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavLinks = ({name, url}) => {
    return (
        <>
            <NavLink to={url}>{name}</NavLink>
        </>
    )
}