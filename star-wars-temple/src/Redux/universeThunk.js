import { getUniverse } from "./universeSlice";

export const universeThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/e0ffbb361d15adcd7382e9c1df796608/raw/03cc2aa17a57506c85544e2745836d121622abbb/UniverseStarWars",
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