import { getLinks } from "./navlinksSlice";

export const navLinksThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/9b35108ab7f40fb59650bb9c4c3c313c/raw/24651f1aa607a5490656c95115c918877206bd42/NavLinksStarWars",
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