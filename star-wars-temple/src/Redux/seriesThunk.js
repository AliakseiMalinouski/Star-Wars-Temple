import { setSeries } from "./seriesSlice";

export const seriesThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/b54e4eb9ca133a966e2deff2b5f082d1/raw/609b1efd1a4d011109240ab8062e54c9fd222d6c/SeriesStarWars")
        if(response.ok) {
            const data = await response.json();
            dispatch(setSeries(data))
        }
        else {
            alert('Error with download');
        }
    }
    catch {
        alert('Error with download');
    }
}