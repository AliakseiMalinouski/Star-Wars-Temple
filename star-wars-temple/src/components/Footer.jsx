import React from "react";
import { useEffect, useMemo } from "react";
import { socialNetworksThunk } from "../Redux/socialNetworksThunk";
import { useDispatch, useSelector } from "react-redux";
import { SocialNetwork } from "./SocialNetwork";
import { copyRightThunk } from "../Redux/copyRightThunk";
import { CopyRightElement } from "./CopyRightElement";


export const Footer = () => {

    let dispatch = useDispatch();

    const socialNetworksStarWars = useSelector(state => state.networks.networks);
    const copyRight = useSelector(state => state.copy.data);

    useEffect(() => {
        if(!socialNetworksStarWars.length) dispatch(socialNetworksThunk);
    }, [dispatch, socialNetworksStarWars]);


    useEffect(() => {
        if(!copyRight.length) dispatch(copyRightThunk);
    }, [dispatch, copyRight]);

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

    let copyRightMemoizeed = useMemo(() => copyRight === undefined || copyRight === null || copyRight === []
    ?
    null
    :
    copyRight.map(e => <CopyRightElement
    key={e.code}
    title={e.title}
    url={e.url}
    />), [copyRight]
    )

    return (
        <>
        <h3>More about Star Wars</h3>
        <div className="SocialNetworks">
            {socialNetworksStarWarsMemoizeed}
        </div>
        <div className="CopyRight">
            {copyRightMemoizeed}
        </div>
        </>
    )
}