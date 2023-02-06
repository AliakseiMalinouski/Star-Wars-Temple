import { setNewGames } from "./interactiveNewSlice";

export const interactiveNewThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/cc372f33cb8285dd987daad861981648/raw/1ef42350fd85c561c74e00cccdaf247ea1f25deb/InteractiveStarWars",
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
    .then(data => dispatch(setNewGames(data)))
    .catch(error => alert("Error with download"));
}