import Game from "../Game";
import Player from "../Player";

export default interface JoinGameResponseDto {
    game: Game,
    me: Player
}