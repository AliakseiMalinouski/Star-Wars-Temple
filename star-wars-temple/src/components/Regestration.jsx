import React from "react";
import { auth } from "../firebase-config";
import { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';

export const Regestration = () => {

    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser?.email);
        })
    }, []);

    const createUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, regEmail, regPass);
        }
        catch {
            alert("Error with regestration");
        }
    }

    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
        }
        catch {
            alert("Error with regestration");
        }
    }

    const signOutUser = () => {
        signOut(auth);
    }

    const regestrationEmailHandle = (EO) => {
        setRegEmail(EO.target.value);
    }

    const regestrationPasswordHandle = (EO) => {
        setRegPass(EO.target.value);
    }

    const loginEmailHandle = (EO) => {
        setLoginEmail(EO.target.value);
    }

    const loginPasswordHandle = (EO) => {
        setLoginPass(EO.target.value);
    }

    return (
        <div className="Authentication">
            <div className="RegPart">
                <input type='text' placeholder='email' value={regEmail} onChange={regestrationEmailHandle}/>
                <input type='text' placeholder='password' value={regPass} onChange={regestrationPasswordHandle}/>
                <button onClick={createUser}>Create user</button>
            </div>
            <div className="LogPart">
                <input type='text' placeholder='email' value={loginEmail} onChange={loginEmailHandle}/>
                <input type='text' placeholder='password' value={loginPass} onChange={loginPasswordHandle}/>
                <button onClick={loginUser}>Sign In</button>
            </div>
            <h3 style={{color: 'white'}}>user logged in as {currentUser}</h3>
            <button onClick={signOutUser}>Sign Out</button>
        </div>
    )
}