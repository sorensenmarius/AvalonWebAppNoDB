import { HubConnection } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Game from "../../models/Game";
import Player from "../../models/Player";
import GameHubMethods from "../../services/GameHubMethods";
import { setupSocket } from "../../services/GameHubUtils";
import GameService from "../../services/GameService";
import RoleSelector from "./RoleSelector";

interface ICreateGame {
    game?: Game
    socket?: HubConnection
    setGame: (game: Game) => void
    setSocket: (socket: HubConnection) => void
}

const CreateGame = ({game, socket, setGame, setSocket}: ICreateGame) => {
    const [roles, setRoles] = useState<number[]>([])
    useEffect(() => {
        if (!game || !socket)
            createGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createGame = async () => {
        let newGame: Game = await GameService.createGame();
        
        setupSocket(setGame).then(newSocket => {
            setSocket(newSocket)
            newSocket.invoke(GameHubMethods.HostGame, newGame.id)
        })

        setGame(newGame)
    }

    const startGame = () => {
        socket?.invoke(GameHubMethods.StartGame, game?.id, roles)
    }

    return (
        <>
            <h1>Velge roller, vise frem spillere osv</h1>
            <h2>{game?.joinCode}</h2>
            {game?.players.map((p: Player) => (
                <p>{p.name}</p>
            ))}
            <RoleSelector game={game} roles={roles} setRoles={setRoles} />
            <Button
                onClick={startGame}
            >
                Start
            </Button>
        </>
    )
}

export default CreateGame;