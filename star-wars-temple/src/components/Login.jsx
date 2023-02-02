import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';

export const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [currentUser, setCurrentUser] = useState("");

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
    }

    const loginPasswordHandle = (EO) => {
        setLoginPass(EO.target.value);
    }

    const signOutUser = () => {
        signOut(auth);
    }

    console.log(currentUser)

    if(currentUser === "" || currentUser === undefined || currentUser === null) {
        return (
            <div className="Login">
                <input type='text' placeholder='email' value={loginEmail} onChange={loginEmailHandle}/>
                <input type='text' placeholder='password' value={loginPass} onChange={loginPasswordHandle}/>
                <button onClick={loginUser}>Sign In</button>
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
