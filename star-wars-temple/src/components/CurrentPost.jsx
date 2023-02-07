import React from "react";

export const CurrentPost = React.memo(({currentPost}) => {

    console.log(currentPost)

    return (
        <div className="CurrentPost">
            {currentPost.name}
        </div>
    )
})