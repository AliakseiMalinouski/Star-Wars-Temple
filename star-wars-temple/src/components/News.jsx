import React from "react";
import { NewsFilter } from "./NewsFilter";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsFilterThunk } from "../Redux/newsFilterThunk";
import { starWarsEvents } from "../events";
import { categoriesNewsThunk } from "../Redux/categoriesNewsThunk";
import {useNavigate} from 'react-router-dom';

export const News = React.memo(() => {

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const newsTitles = useSelector(state => state.filterNews.filterNewsTitles);
    const categoriesNews = useSelector(state => state.categoriesNews.categories)

    const [filterState, setFilterState] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("");

    useEffect(() => {
        if(!newsTitles.length) dispatch(newsFilterThunk);
    }, [dispatch, newsTitles]);

    useEffect(() => {
        starWarsEvents.addListener("selectedNewsCategory", changeCategoryNews);
        return () => {
            starWarsEvents.removeListener("selectedNewsCategory", changeCategoryNews);
        }
    })

    useEffect(() => {
        if(!categoriesNews.length) dispatch(categoriesNewsThunk);
    }, [dispatch, categoriesNews]);

    let newsTitlesMemoizeed = useMemo(() => newsTitles === undefined || newsTitles === [] || newsTitles === null
    ?
    null
    :
    newsTitles.map(e => <NewsFilter
    key={e.code}
    title={e.title}
    filterState={filterState}
    currentTitle={currentCategory}
    />), [newsTitles, filterState, currentCategory]
    )

    const openCategoriesNews = () => {
        setFilterState(true);
    }

    const changeCategoryNews = (title) => {
        setCurrentCategory(title);
        const uri = "/detailsnewspost/" + title;
        navigate(uri);
    }

    return (
        <div className="News">
            <h3>Filtering by category</h3>
            <div className="NewsFilter">
                {
                    filterState 
                    ?
                    newsTitlesMemoizeed
                    :
                    <div className="ContentNewsPoster">
                        <div className="ClosedFilterNews" onClick={openCategoriesNews}>
                            Choose
                        </div>
                    </div>
                }
            </div>
            <img className="VaderLargeImage" src="https://lumiere-a.akamaihd.net/v1/images/vr-hero-desktop_25626109.jpeg?region=0,0,2048,870" alt="Poster"/>
        </div>
    )
})