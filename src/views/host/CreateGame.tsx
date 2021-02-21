import { HubConnection } from "@microsoft/signalr";
import { useEffect } from "react";
import Game from "../../models/Game";
import Player from "../../models/Player";
import GameHubMethods from "../../services/GameHubMethods";
import { setupSocket } from "../../services/GameHubUtils";
import GameService from "../../services/GameService";

interface ICreateGame {
    game?: Game
    socket?: HubConnection
    setGame: (game: Game) => void
    setSocket: (socket: HubConnection) => void
}

const CreateGame = ({game, socket, setGame, setSocket}: ICreateGame) => {
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
        socket?.invoke(GameHubMethods.StartGame, game?.id)
    }

    return (
        <>
            <h1>Velge roller, vise frem spillere osv</h1>
            <h2>{game?.joinCode}</h2>
            {game?.players.map((p: Player) => (
                <p>{p.name}</p>
            ))}
            <button
                onClick={startGame}
            >
                Start
            </button>
        </>
    )
}

export default CreateGame;