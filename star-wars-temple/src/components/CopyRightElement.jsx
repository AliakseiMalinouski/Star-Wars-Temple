import React from "react";

export const CopyRightElement = React.memo(({url, title}) => {
    return (
        <a href={url} target='_blank' rel="noreferrer">{title}</a>
    )
})