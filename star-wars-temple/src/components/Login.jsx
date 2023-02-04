import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';

export const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [active, setActive] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser?.email);
        })
    }, []);

    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
        }
        catch {
            alert("Error with regestration");
        }
    }

    const loginEmailHandle = (EO) => {
        setLoginEmail(EO.target.value);
        validationLogin(EO.target.value, loginPass);
    }

    const loginPasswordHandle = (EO) => {
        setLoginPass(EO.target.value);
        validationLogin(EO.target.value, loginEmail);
    }

    const signOutUser = () => {
        signOut(auth);
    }

    const validationLogin = (currentValue, previousValue) => currentValue === "" || previousValue === "" || currentValue.length < 12 || previousValue.length < 12 ? setActive(true) : setActive(false);

    if(currentUser === "" || currentUser === undefined || currentUser === null) {
        return (
            <div className="Login">
                <div className="LoginImages">
                    <img src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_disney_icon_158933.png" alt="Disney"/>
                    <img src="https://img.icons8.com/color/256/star-wars.png" alt="Star Wars"/>
                </div>
                <div className="LoginTools">
                    <input type='text' placeholder='email' value={loginEmail} onChange={loginEmailHandle}/>
                    <input type='text' placeholder='password' value={loginPass} onChange={loginPasswordHandle}/>
                    <button onClick={loginUser} style={{opacity: active ? '0.5' : '1'}} disabled={active}>Sign In</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3 style={{color: 'white'}}>user logged in as {currentUser}</h3>
                <button onClick={signOutUser}>Sign Out</button>
            </div>
        )
    }
}
