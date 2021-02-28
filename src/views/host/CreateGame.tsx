import { HubConnection } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import Game from "../../models/Game";
import Player from "../../models/Player";
import GameHubMethods from "../../services/GameHubMethods";
import { setupSocket } from "../../services/GameHubUtils";
import GameService from "../../services/GameService";
import RoleSelector from "./RoleSelector";
import "./CreateGameStyling.css"
interface ICreateGame {
    game?: Game
    socket?: HubConnection
    setGame: (game: Game) => void
    setSocket: (socket: HubConnection) => void
}

const CreateGame = ({ game, socket, setGame, setSocket }: ICreateGame) => {
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
            <div className="CreateGameHolder">

            </div>
            <div className="GreyScaleBackground">
            </div>
            <div className="BlurCard">
                <div className="BlurCardBackground"></div>
                <div className="ContentHolder">
                    <div className="LeftSide">
                        <RoleSelector game={game} roles={roles} setRoles={setRoles} />
                    </div>
                    <div className="RightSide">
                        <h2>Join Code and players that have joined</h2>
                        <div className="JoinCode">
                            <h1>{game?.joinCode ? "1203021" : "120301"}</h1>
                        </div>
                        <div className="PlayerHolder">
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>
                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>
                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            <div className="PlayerCard">
                                <h4>SimonGame</h4>

                            </div>
                            {/* {game?.players.map((p: Player) => (
                                <div className="PlayerCard">
                                    <p>{p.name}</p>
                                </div>
                            ))} */}
                        </div>

                        <button onClick={startGame}>
                            Start
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateGame;