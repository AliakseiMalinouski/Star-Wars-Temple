import { setPosters } from "./postersSlice";

export const postersThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/728542ba7f2cdeb7520627e4ada4e904/raw/dcc510d49115ff4bdd1c1344fede2215d87ca687/BigPostersStarWars", 
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
        dispatch(setPosters(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}