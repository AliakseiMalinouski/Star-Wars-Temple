import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navLinksThunk } from "../Redux/navLinksThunk";
import { NavLinks } from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { starWarsEvents } from "../events";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { avatarThunk } from "../Redux/avatarThunk";

export const Header = React.memo(() => {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const navLinks = useSelector(state => state.navLinks.navLinks);
    const avatars = useSelector(state => state.avatar.avatars);


    const [updatedCurrentPage, setUpdatedCurrentPage] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [currentAvatar, setCurrentAvatar] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, currentInfoUser => {
            setCurrentUser(currentInfoUser?.email);
        })
    }, []);

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * avatars.length);
        let randomAvatar = avatars[randomIndex];
        setCurrentAvatar(randomAvatar?.image);
    }, [currentUser, avatars]);

    useEffect(() => {
        if(!navLinks.length) dispatch(navLinksThunk);
    }, [dispatch, navLinks]);

    useEffect(() => {
        if(!avatars.length) dispatch(avatarThunk);
    }, [dispatch, avatars]);

    useEffect(() => {
        starWarsEvents.addListener("changeLocation", updateLink);
        return () => {
            starWarsEvents.removeListener("changeLocation", updateLink);
        }
    }, []);



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
                    <><img style={{width: '40px'}} src="https://img.icons8.com/plasticine/256/stormtrooper.png" alt="Person"/><span>Sign In</span> </>
                    :
                    <><img style={{width: '40px'}} src={currentAvatar} alt="Person"/> <span>{currentUser}</span></>
                }
            </div>
        </div>
    )
})