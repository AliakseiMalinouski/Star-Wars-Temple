import { getUniverse } from "./universeSlice";

export const universeThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/e0ffbb361d15adcd7382e9c1df796608/raw/b9f1635a02b1e8d27cc0dcd3f218bb4298ceaf97/UniverseStarWars",
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
        dispatch(getUniverse(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}