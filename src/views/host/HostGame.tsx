import { HubConnection } from "@microsoft/signalr";
import React, { useState } from "react";
import GameStatus from "../../models/enums/GameStatus";
import Game from "../../models/Game";
import AssassinTurnHost from "./AssassinTurnHost";
import CreateGame from "./CreateGame";
import GameEnded from "./GameEnded";
import HostRound from "./HostRound";

const HostGame = () => {
    const [game, setGame] = useState<Game>();
    const [socket, setSocket] = useState<HubConnection>();

    if (!game || game.status === GameStatus.WaitingForPlayers)
        return <CreateGame game={game} setGame={setGame} socket={socket} setSocket={setSocket} />

    if (game.status === GameStatus.Playing)
        return <HostRound game={game} />

    if (game.status === GameStatus.AssassinTurn)
        return <AssassinTurnHost game={game} />

    if (game.status === GameStatus.Ended)
        return <GameEnded game={game} />

    return (
        <h1>Not yet implemented</h1>
    )
}

export default HostGame;