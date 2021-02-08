import GameStatus from "./enums/GameStatus";
import Player from "./Player";
import Round from "./Round";

interface Game {
    id: string,
    joinCode: number,
    counter: number,
    pointsInnocent: number,
    pointsEvil: number,
    currentPlayer: Player,
    players: Player[],
    status: GameStatus,
    rounds: Round[]
}

export default Game;