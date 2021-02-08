import { HubConnection } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import Game from "../../models/Game";
import Player from "../../models/Player";
import GameHubMethods from "../../services/GameHubMethods";
import { setupSocket } from "../../services/GameHubUtils";
import GameService from "../../services/GameService";

const HostGame = () => {
    const [game, setGame] = useState<Game>();
    const [socket, setSocket] = useState<HubConnection>();

    useEffect(() => {
        createGame()
    }, [])

    const createGame = async () => {
        setupSocket(setGame).then(newSocket => {
            setSocket(newSocket)
            newSocket.invoke(GameHubMethods.HostGame, game.id)
        })

        let game: Game = await GameService.createGame();

        setGame(game)
    }   

    return (
        <React.Fragment>
            <h1>Velge roller, vise frem spillere osv</h1>
            <h2>{game?.joinCode}</h2>
            {game?.players.map((p: Player) => (
                <p>{p.name}</p>
            ))}
            <button>Start</button>
        </React.Fragment>
    )
}

export default HostGame;