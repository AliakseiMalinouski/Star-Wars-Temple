import { setFilms } from "./skywalkerSagaSlice";

export const skywalkerSagaThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/c87236e0291af2e22c8fa91cf77b8921/raw/02dbc9b43eedf48ec8755414686f143f63a8ba31/SkywalkerSagaArray");
        if(response.ok) {
            const data = await response.json();
            dispatch(setFilms(data));
        }
        else {
            alert("Error with download");
        }
    }
    catch(error) {  
        alert(`Error with download! Type Error is:  ${error}`);
    }
}