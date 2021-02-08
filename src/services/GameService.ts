import JoinGameResponseDto from "../models/dto/JoinGameResponseDto";
import Game from "../models/Game";
import http from "./HttpService";

const createGame = async () => {
    return (await http.put<Game>('game')).data
}

const joinGame = async (joinCode: number, playerName: string) => {
    const res = await http.post<JoinGameResponseDto>('game/join', {
        joinCode,
        playerName
    })

    return res.data
}

const GameService = {
    createGame,
    joinGame
};

export default GameService;