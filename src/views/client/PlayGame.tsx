import { HubConnection } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import Game from "../../models/Game";
import JoinGame from "./GameStateComponents/JoinGame"
import { setupSocket } from '../../sockets/GameHubUtils';
import GameStatus from '../../models/enums/GameStatus';
import WaitingForPlayers from "./GameStateComponents/WaitingForPlayers";
import AssassinTurn from "./GameStateComponents/AssassinTurn";
import PlayRound from "./GameStateComponents/PlayRound";
import Round from "../../models/Round";

const PlayGame = () => {
    const [game, setGame] = useState<Game>();
    const [socket, setSocket] = useState<HubConnection>();

    useEffect(() => {
        setSocket(setupSocket());
    }, [])

    if (!game)
        return <JoinGame setGame={setGame} socket={socket}/>

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