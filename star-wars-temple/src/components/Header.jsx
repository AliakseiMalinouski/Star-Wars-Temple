import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navLinksThunk } from "../Redux/navLinksThunk";
import { NavLinks } from "./NavLinks";

export const Header = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(navLinksThunk);
    }, [dispatch]);

    const navLinks = useSelector(state => state.navLinks.navLinks);

    return (
        <div>
            <div className="Logo">
                <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Logo"/>
            </div>
            <div className="NavLinks">
                {
                    navLinks.map(e => <NavLinks key={e.code} name={e.name} url={e.url}/>)
                }
            </div>
        </div>
    )
}