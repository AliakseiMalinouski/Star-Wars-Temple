import React from "react";
import {useNavigate} from 'react-router-dom';

export const Hero = React.memo(({name, image}) => {

    let navigate = useNavigate();

    const goToHeroDetails = () => {
        const uri = "/herodetails/" + name;
        navigate(uri);
    }

    return (
        <div className="Hero" onClick={goToHeroDetails}>
            <img src={image} alt='Hero'/>
            <div className="CardBorder"></div>
            <span>{name}</span>
        </div>
    )
})