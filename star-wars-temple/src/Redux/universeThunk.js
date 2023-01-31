import { getUniverse } from "./universeSlice";

export const universeThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/e0ffbb361d15adcd7382e9c1df796608/raw/9c243f537ac66bf2e1771a517205bd84b570a486/UniverseStarWars",
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