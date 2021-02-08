import { HubConnection } from "@microsoft/signalr";
import { useState } from "react";
import Game from "../../models/Game";
import JoinGame from "./GameStateComponents/JoinGame"
import GameStatus from '../../models/enums/GameStatus';
import WaitingForPlayers from "./GameStateComponents/WaitingForPlayers";
import AssassinTurn from "./GameStateComponents/AssassinTurn";
import PlayRound from "./GameStateComponents/PlayRound";
import Player from "../../models/Player";

const PlayGame = () => {
    const [game, setGame] = useState<Game>();
    const [me, setMe] = useState<Player>();
    const [socket, setSocket] = useState<HubConnection>();

    if (!game)
        return <JoinGame 
            setGame={setGame} 
            setMe={setMe}
            setSocket={setSocket}
        />

    if (game.status === GameStatus.WaitingForPlayers)
        return <WaitingForPlayers />
    
    if (game.status === GameStatus.Playing)
        return <PlayRound />
    
    if (game.status === GameStatus.AssassinTurn)
        return <AssassinTurn />
    
    if (game.status === GameStatus.Ended)
        setGame(undefined)
    
    return <></>
}

export default PlayGame;