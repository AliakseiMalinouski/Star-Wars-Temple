import { getLinks } from "./navlinksSlice";

export const navLinksThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/9b35108ab7f40fb59650bb9c4c3c313c/raw/fd4985e8744d8fd771592666d5e155b8cf4b3225/NavLinksStarWars",
        {
            method: 'get',
        }
    )
    .then(response => {
        if(!response.ok) {
            alert('Error with download data');
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        dispatch(getLinks(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}