import { setNewGames } from "./interactiveNewSlice";

export const interactiveNewThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/cc372f33cb8285dd987daad861981648/raw/a6306de1fdf23eb73600c549352d9b7586a5498a/InteractiveStarWars",
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