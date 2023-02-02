import { setFilms } from "./skywalkerSagaSlice";
import { updateLoadStateSkywalkerFilms } from "./skywalkerSagaSlice";

export const skywalkerSagaThunk = async (dispatch) => {
    try {
        dispatch(updateLoadStateSkywalkerFilms(1));
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/c87236e0291af2e22c8fa91cf77b8921/raw/3bb5e6dd0e62d6f3bac9239308c5105e3e30076d/SkywalkerSagaArray");
        if(response.ok) {
            const data = await response.json();
            dispatch(updateLoadStateSkywalkerFilms(3));
            dispatch(setFilms(data));
        }
        else {
            alert("Error with download");
            dispatch(updateLoadStateSkywalkerFilms(3));
        }
    }
    catch(error) {  
        alert(`Error with download! Type Error is:  ${error}`);
        dispatch(updateLoadStateSkywalkerFilms(3));
    }
}