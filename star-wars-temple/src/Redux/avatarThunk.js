import { setAvatars } from "./avatarSlice";

export const avatarThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/ba16bb3d422fbc10bd65ff247ea2df11/raw/ec20d3dc6702be5a689861feb6fc0535d058abbd/HeroesIconsStarWars", 
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
        dispatch(setAvatars(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}