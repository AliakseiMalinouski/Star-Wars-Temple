import React, { useMemo } from "react";
import { MoreAboutPostNews } from "./MoreAboutPostNews";

export const InformationAboutCurrentPost = React.memo(({item}) => {

    let moreAboutPostMemoizeed = useMemo(() => item.post === undefined || item.post  === null || item.post === []
    ?
    null
    :
    item.post.map(e => <MoreAboutPostNews key={e.id} title={e.title} image={e.image} links={e.links} description={e.description}/>), [item]
    )

    return (
        <div className="AboutPost">
            <h2>{item.name}</h2>
            <img src={item.main} alt='Poster'/>
            {moreAboutPostMemoizeed}
        </div>
    )
})