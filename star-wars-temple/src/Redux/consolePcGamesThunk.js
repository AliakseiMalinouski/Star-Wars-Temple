import { setConsoleAndPcGames } from "./consolePcGamesSlice";

export const consolePcGamesThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/8d2faecee7bce333055e064718d26e9e/raw/ab1f149e1e4d17f514ac066c739f39ac24315009/ConsoleAndPCGameStarWars");
        if(response.ok) {
            const data = await response.json();
            dispatch(setConsoleAndPcGames(data));
        }
        else {
            alert("Error with download");
        }
    }
    catch {
        alert("Error with download");
    }
}