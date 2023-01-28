import { setCategories } from "./FilterFilmSlice";

export const categoriesFilmThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/2ccee4e01fb0372ac546485de9e90bde/raw/e80e33893f0362d98ad678b8da15e6cdcab12869/FilterFilmsStarWars");
        if(response.ok) {
            const data = await response.json();
            dispatch(setCategories(data));
        }
        else {
            alert("Error with download");
        }
    }
    catch (error) {
        alert("Error with download");
    }
}
