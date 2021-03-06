import GameStatus from "./enums/GameStatus";
import Player from "./Player";
import Round from "./Round";

interface Game {
    id: string,
    joinCode: number,
    playerIndex: number,
    pointsInnocent: number,
    pointsEvil: number,
    currentPlayer: Player,
    players: Player[],
    status: GameStatus,
    rounds: Round[],
    currentRound: Round
}

export default Game;