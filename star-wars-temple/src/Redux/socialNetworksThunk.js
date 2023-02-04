
import { setNetworks } from "./socialNetworksSlice";

export const socialNetworksThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/a4958322d30f39a424aac48fa3ee8773/raw/12c4c967a0a23854b0c0babe94532a3a732dd255/FooterStarWars", 
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
        dispatch(setNetworks(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}