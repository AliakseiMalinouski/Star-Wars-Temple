import { setCategoriesNews } from "./categoriesNewsSlice";

export const categoriesNewsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d96471996187e1d577b2b02fe174865e/raw/726d194941c61c43f4364e169fe6c3be0e8ba709/NewsStarWars",
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