import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from '../Redux/dataCurrentUserSlice';

export const Login = () => {

    let dispatch = useDispatch();

    const allDataUser = useSelector(state => state.userData.userData);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [active, setActive] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            dispatch(addUser(currentUser));
            setCurrentUser(currentUser?.email);
        })
    }, [allDataUser, dispatch]);

    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
            dispatch(addUser(user));
        }
        catch {
            alert("Error with login");
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
        dispatch(removeUser());
    }

    const validationLogin = (currentValue, previousValue) => currentValue === "" || previousValue === "" ? setActive(true) : setActive(false);


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
            <div className="LoggedUser">
                <h3 style={{color: 'white'}}>Detailed user information</h3>
                <ul className="AllInfoAboutUser">
                    <li><span>E-mail:</span> {currentUser}</li>
                    <li><span>Date of account creation</span>: {allDataUser?.metadata?.creationTime}</li>
                    <li><span>Date of last sign in</span>:  {allDataUser?.metadata?.lastSignInTime}</li>
                </ul>
                <button onClick={signOutUser}>Sign Out</button>
            </div>
        )
    }
}
