import { setSeries } from "./seriesSlice";

export const seriesThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/b54e4eb9ca133a966e2deff2b5f082d1/raw/973cd9b1e600e1de44f0cec873874f31d8f2b6be/SeriesStarWars")
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