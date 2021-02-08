import Game from "../models/Game";
import http from "./HttpService";

const createGame = async () => {
    return (await http.put<Game>('game')).data
}

export default {
    createGame
};