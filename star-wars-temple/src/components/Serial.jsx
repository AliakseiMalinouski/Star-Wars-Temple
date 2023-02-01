import React from "react";
import { useNavigate } from "react-router-dom";


export const Serial = React.memo(({name, image}) => {

    let navigate = useNavigate();

    const goToSeriesDetails = () => {
        const uri = "/seriesdetails/" + name;
        navigate(uri);
    }

    return (
        <div className="Serial" onClick={goToSeriesDetails}>
            <img src={image} alt='Hero'/>
            <div className="InfoAboutSeries">
                <h3>{name}</h3>
            </div>
        </div>
    )
})