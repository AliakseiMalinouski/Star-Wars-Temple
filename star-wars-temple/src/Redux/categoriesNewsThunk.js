import { setCategoriesNews } from "./categoriesNewsSlice";

export const categoriesNewsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d96471996187e1d577b2b02fe174865e/raw/148a476d7db0887637f61628e6709bbd3c2b4f83/NewsStarWars",
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