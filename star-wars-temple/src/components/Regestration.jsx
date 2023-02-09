import React from "react";
import { auth } from "../firebase-config";
import { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from '../Redux/dataCurrentUserSlice';

export const Regestration = () => {

    let dispatch = useDispatch();

    const allDataUser = useSelector(state => state.userData.userData);

    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [validState, setValidState] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            dispatch(addUser(currentUser));
            setCurrentUser(currentUser?.email);
        })
    }, [dispatch]);

    const createUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, regEmail, regPass);
            dispatch(addUser(user));
            if(validState) setValidState(false);
        }
        catch {
            alert("The e-mail address you entered is incorrect. Please try again");
            setValidState(true);
        }
    }

    const signOutUser = () => {
        signOut(auth);
        dispatch(removeUser());
    }

    const regestrationEmailHandle = (EO) => {
        setRegEmail(EO.target.value);
    }

    const regestrationPasswordHandle = (EO) => {
        setRegPass(EO.target.value);
    }

    

    if(currentUser === "" || currentUser === undefined || currentUser === null) {
        return (
           <div className="WrapperRegestration">
                <div className="Authentication">
                <div className="RegPart">
                    <h2 style={{color: 'white'}}>Regestration</h2>
                    <input type='text' placeholder='email' value={regEmail} onChange={regestrationEmailHandle}/>
                    {
                        validState
                        ?
                        <span>Example: <q>namesurname@gmail.com</q></span>
                        :
                        null
                    }
                    <input type='text' placeholder='password' value={regPass} onChange={regestrationPasswordHandle}/>
                    <button onClick={createUser}>Create user</button>
                    <NavLink className='GoToSignInButton' to='/login'>Sign In</NavLink>
                </div>
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