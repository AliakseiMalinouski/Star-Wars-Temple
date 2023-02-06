import { setConsoleAndPcGames } from "./consolePcGamesSlice";

export const consolePcGamesThunk = async (dispatch) => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/8d2faecee7bce333055e064718d26e9e/raw/3a09629c0c372366fa21370303b9e505baa3c775/ConsoleAndPCGameStarWars");
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