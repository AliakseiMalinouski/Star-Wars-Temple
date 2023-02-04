import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navLinksThunk } from "../Redux/navLinksThunk";
import { NavLinks } from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { starWarsEvents } from "../events";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export const Header = () => {

    let dispatch = useDispatch();

    let navigate = useNavigate();


    const [updatedCurrentPage, setUpdatedCurrentPage] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, currentInfoUser => {
            setCurrentUser(currentInfoUser?.email);
        })
    }, []);

    useEffect(() => {
        dispatch(navLinksThunk);
    }, [dispatch]);

    useEffect(() => {
        starWarsEvents.addListener("changeLocation", updateLink);
        return () => {
            starWarsEvents.removeListener("changeLocation", updateLink);
        }
    }, []);

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
                {
                    currentUser === "" || currentUser === undefined || currentUser === null || currentUser === {}
                    ?
                    <><img style={{width: '50px'}} src="https://img.icons8.com/plasticine/256/stormtrooper.png" alt="Person"/><span>Sign In</span> </>
                    :
                    <><img style={{width: '50px'}} src="https://img.icons8.com/plasticine/256/stormtrooper.png" alt="Person"/> <span>{currentUser}</span></>
                }
            </div>
        </div>
    )
}