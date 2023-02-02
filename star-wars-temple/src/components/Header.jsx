import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navLinksThunk } from "../Redux/navLinksThunk";
import { NavLinks } from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { starWarsEvents } from "../events";

export const Header = () => {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();

    let currentPage = location.pathname;

    const [updatedCurrentPage, setUpdatedCurrentPage] = useState("");

    useEffect(() => {
        dispatch(navLinksThunk);
    }, [dispatch]);

    useEffect(() => {
        starWarsEvents.addListener("changeLocation", updateLink);
        return () => {
            starWarsEvents.removeListener("changeLocation", updateLink);
        }
    }, []);

    // useEffect(() => {
    //     currentPage[0] === '/' && currentPage.length > 2 ? setUpdatedCurrentPage(currentPage.substring(1)) : setUpdatedCurrentPage("DataBank")

    // }, [currentPage]);

    const navLinks = useSelector(state => state.navLinks.navLinks);

    const goToAuthentification = () => {
        const uri = "/authentication";
        navigate(uri);
    }

    const updateLink = (name) => {
        setUpdatedCurrentPage(name);
    }

    return (
        <div>
            <div className="Logo">
                <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Logo"/>
            </div>
            <div className="NavLinks">
                {
                    navLinks.map(e => <NavLinks key={e.code} name={e.name} url={e.url} namePage={updatedCurrentPage}/>)
                }
            </div>
            <div style={{color: 'white', display: 'flex', alignItems: 'center'}} className='AuthTools' onClick={goToAuthentification}>
                <img style={{width: '50px'}} src="https://img.icons8.com/plasticine/256/stormtrooper.png" alt="Person"/> <span>Sign In</span> 
            </div>
        </div>
    )
}