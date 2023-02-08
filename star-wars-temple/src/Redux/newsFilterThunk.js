import { setFilterNews } from "./newsFilterSlice";

export const newsFilterThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/3a24ebafc8a7ef46bcb59877cc4373aa/raw/a6f69cd9aa67d02fe755383a1ce34e1d6d5b6e5e/NewsFilterStarWars",
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
    .then(data => dispatch(setFilterNews(data)))
    .catch(error => alert('Eror with download'));
}