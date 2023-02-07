import { setCategoriesNews } from "./categoriesNewsSlice";

export const categoriesNewsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d96471996187e1d577b2b02fe174865e/raw/55378a5de0305d8044e3b21e5219d69a7cc4b862/NewsStarWars",
        {
            method: 'get'
        }
    )
    .then(response => {
        if(!response.ok) {
            alert("Error with download");
        }
        else {
            return response.json();
        }
    })
    .then(data => dispatch(setCategoriesNews(data)))
    .catch(error => alert("Error with download"))
}