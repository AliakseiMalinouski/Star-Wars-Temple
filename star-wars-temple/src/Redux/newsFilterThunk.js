import { setFilterNews } from "./newsFilterSlice";

export const newsFilterThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/3a24ebafc8a7ef46bcb59877cc4373aa/raw/4cac116f0463e40d316ef4359b1c557a20460a75/NewsFilterStarWars",
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