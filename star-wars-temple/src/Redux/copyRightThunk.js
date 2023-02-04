import { setCopy } from "./copyRightSlice";

export const copyRightThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/de0dc92bea66d1e64f0f33c16062eeca/raw/8ce8ed9897fb8649e91dedb389ad8e5343a842a0/CopyRightStarWars",
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
        dispatch(setCopy(data));
    })
    .catch(error => {
        alert("Error with download");
    })
}