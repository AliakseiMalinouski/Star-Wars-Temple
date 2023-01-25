
import { getTitles } from "./titlesSlice";

export const titlesThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/55825eb6f42a9c00fa4ad8d00c0b510e/raw/fc35a3e17b4836c68977d1ba5cdbe280df801b78/FilterStarWars",
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
    .then(data => {
        dispatch(getTitles(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}