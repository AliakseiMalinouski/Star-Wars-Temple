import React from "react";

export const Hero = React.memo(({name}) => {
    return (
        <div style={{color: 'white'}}>
            {name}
        </div>
    )
})