import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoriesNewsThunk } from "../Redux/categoriesNewsThunk";
import { useSelector, useDispatch } from "react-redux";
import { InformationAboutCurrentPost } from "./InformationAboutCurrentPost";

export const CurrentPost = React.memo(() => {

    let params = useParams();

    let dispatch = useDispatch();

    let currentPostName = params.postname;

    const categoriesNews = useSelector(state => state.categoriesNews.categories);

    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        if(!categoriesNews.length) dispatch(categoriesNewsThunk);
        let post = categoriesNews.find(elem => elem.name === currentPostName);
        setCurrentPost(post);
    }, [categoriesNews, dispatch, currentPostName, setCurrentPost]);

    let currentPostMemoizeed = useMemo(() => currentPost === undefined || currentPost === {} || currentPost === null
    ?
    null
    :
    <InformationAboutCurrentPost key={currentPost.code} item={currentPost}/>, [currentPost]
    )

    return (
        <div className="CurrentPost">
            {currentPostMemoizeed}
        </div>
    )
    
})