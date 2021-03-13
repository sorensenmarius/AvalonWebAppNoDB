import { HubConnection } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Game from "../../models/Game";
import Player from "../../models/Player";
import GameHubMethods from "../../services/GameHubMethods";
import { setupSocket } from "../../services/GameHubUtils";
import GameService from "../../services/GameService";
import RoleSelector from "./RoleSelector";
import "./CreateGame.css"
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
interface ICreateGame {
    game?: Game
    socket?: HubConnection
    setGame: (game: Game) => void
    setSocket: (socket: HubConnection) => void
}

const CreateGame = ({ game, socket, setGame, setSocket }: ICreateGame) => {
    const [roles, setRoles] = useState<number[]>([])
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

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
        if (!game)
            return

        socket?.invoke(GameHubMethods.StartGame, game?.id, roles).then(message => {
            setErrorMessage(message)
            setShowError(message !== '')
        })
    }

    return (
        <>
            <Snackbar 
                open={showError} 
                autoHideDuration={4000} 
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                onClose={() => setShowError(false)}
            >
                <Alert severity='error'>
                    {errorMessage}
                </Alert>
            </Snackbar>
            <div className="GreyScaleBackground"></div>
            <div className="BlurCard">
                <div className="BlurCardBackground"></div>
                <div className="ContentHolder">
                    <div className="LeftSide">
                        <RoleSelector roles={roles} setRoles={setRoles} />
                    </div>
                    <div className="RightSide">
                        {game?.joinCode ?
                            <div className="JoinCode">
                                <h1 className='join-code-text'>{game?.joinCode}</h1>
                            </div>
                            :
                            <h1>Could not create game</h1>
                        }
                        <div className={`player-holder ${game?.players && game.players.length > 10 ? 'big' : 'small'}`}>
                            {game?.players.map((p: Player) => (
                                <div className="PlayerCard" key={p.id + '-joined'}>
                                    {game.players.length < 10 && (
                                        <img src="https://i.pravatar.cc/50" alt="" className="PlayerImage" />
                                    )}
                                    <p>{p.name}</p>
                                </div>
                            ))}
                        </div>
                        <Button
                            onClick={startGame}
                            disabled={!game?.players || game.players.length < 5}
                        >
                            Start
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateGame;