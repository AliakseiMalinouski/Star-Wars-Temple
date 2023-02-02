import React from "react";
import { auth } from "../firebase-config";
import { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { NavLink } from "react-router-dom";

export const Regestration = () => {

    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");
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

    const signOutUser = () => {
        signOut(auth);
    }

    const regestrationEmailHandle = (EO) => {
        setRegEmail(EO.target.value);
    }

    const regestrationPasswordHandle = (EO) => {
        setRegPass(EO.target.value);
    }

    return (
        <div className="Authentication">
            <div className="RegPart">
                <input type='text' placeholder='email' value={regEmail} onChange={regestrationEmailHandle}/>
                <input type='text' placeholder='password' value={regPass} onChange={regestrationPasswordHandle}/>
                <button onClick={createUser}>Create user</button>
            </div>
            <h3 style={{color: 'white'}}>user logged in as {currentUser}</h3>
            <button onClick={signOutUser}>Sign Out</button>
            <NavLink style={{color: 'white'}} to='/login'>Sign In</NavLink>
        </div>
    )
}