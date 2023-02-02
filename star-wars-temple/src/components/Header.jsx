import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navLinksThunk } from "../Redux/navLinksThunk";
import { NavLinks } from "./NavLinks";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        dispatch(navLinksThunk);
    }, [dispatch]);

    const navLinks = useSelector(state => state.navLinks.navLinks);

    const goToAuthentification = () => {
        const uri = "/authentication";
        navigate(uri);
    }

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
            <div style={{color: 'white', display: 'flex', alignItems: 'center'}} className='AuthTools' onClick={goToAuthentification}>
                <img style={{width: '50px'}} src="https://img.icons8.com/plasticine/256/stormtrooper.png" alt="Person"/> <span>Sign In</span> 
            </div>
        </div>
    )
}