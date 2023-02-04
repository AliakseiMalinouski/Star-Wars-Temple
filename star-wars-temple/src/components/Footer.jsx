import React from "react";
import { useEffect, useMemo } from "react";
import { socialNetworksThunk } from "../Redux/socialNetworksThunk";
import { useDispatch, useSelector } from "react-redux";
import { SocialNetwork } from "./SocialNetwork";


export const Footer = () => {

    let dispatch = useDispatch();

    const socialNetworksStarWars = useSelector(state => state.networks.networks);

    useEffect(() => {
        dispatch(socialNetworksThunk);
    }, [dispatch]);


    let socialNetworksStarWarsMemoizeed = useMemo(() => 
    socialNetworksStarWars === undefined || socialNetworksStarWars === null || socialNetworksStarWars === []
    ?
    null
    :
    socialNetworksStarWars.map(e => <SocialNetwork 
    key={e.code}
    icon={e.icon}
    url={e.url}
    />
    ), [socialNetworksStarWars])

    return (
        <>
        <h3>More about Star Wars</h3>
        <div className="SocialNetworks">
            {socialNetworksStarWarsMemoizeed}
        </div>
        </>
    )
}