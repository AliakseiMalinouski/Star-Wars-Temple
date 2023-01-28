import { setFilms } from "./skywalkerSagaSlice";

export const skywalkerSagaThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/c87236e0291af2e22c8fa91cf77b8921/raw/a2cc3050932cd8d2496e43a1a62e7de8f293b379/SkywalkerSagaArray");
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