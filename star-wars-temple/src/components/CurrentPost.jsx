import React, { useMemo } from "react";
import { MoreAboutPostNews } from "./MoreAboutPostNews";

export const CurrentPost = React.memo(({currentPost}) => {

    let morePostMemoizeed = useMemo(() => currentPost.post === undefined || currentPost.post === [] || currentPost.post === null
    ?
    null
    :
    currentPost.post.map(e => <MoreAboutPostNews key={e.id} title={e.title} description={e.description} links={e.links} image={e.image}/>), [currentPost]
    )

    return (
        <div className="CurrentPost">
            <h2>{currentPost.name}</h2>
            <div className="AboutPost">
                <img className="MainImagePost" src={currentPost.main} alt='Poster'/>
                {morePostMemoizeed}
            </div>
        </div>
    )
})