import { setAvatars } from "./avatarSlice";

export const avatarThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/ba16bb3d422fbc10bd65ff247ea2df11/raw/32abc0fe3468f82fd4420af98e4eb7bca6e2d2fd/HeroesIconsStarWars", 
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