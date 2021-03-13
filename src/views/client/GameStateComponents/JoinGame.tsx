import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { HubConnection } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Game from "../../../models/Game";
import Player from "../../../models/Player";
import GameHubMethods from "../../../services/GameHubMethods";
import { setupSocket } from "../../../services/GameHubUtils";
import GameService from "../../../services/GameService";

import './JoinGame.css'

interface IJoinGameProps {
    setGame: (game: Game) => void,
    setMe: (me: Player) => void,
    setSocket: (socket: HubConnection) => void
}

const JoinGame = ({ setGame, setMe, setSocket }: IJoinGameProps) => {
    const [joinCode, setJoinCode] = useState<number>(-1);
    const [playerName, setPlayerName] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    useEffect(() => {
        setLoading(false)
        setErrorMessage('')
        setShowErrorMessage(false)
    }, [])

    const joinGame = async () => {
        setShowErrorMessage(false)
        if(!loading) {
            try {
                setLoading(true)
                setErrorMessage('')
                const { game, me }: { game: Game, me: Player } = await GameService.joinGame(joinCode, playerName);
                setGame(game);
                setMe(me);
                
                setupSocket(setGame).then(newSocket => {
                    setSocket(newSocket)
                    newSocket.invoke(GameHubMethods.JoinGame, game.id);
                })
                setLoading(false)
            } catch (error) {
                setShowErrorMessage(true)
                setErrorMessage(error.response.data.detail)
                setLoading(false)
            }    
        }
    }

    return (
        <div className='home-page-background'>
            <img
                src="/images/Avalon.png"
                alt="Avalon"
                className='large-logo center'
            />
            <input
                type="number"
                placeholder="Join Code"
                className='center join-game-input-field'
                onChange={e => setJoinCode(+e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Name"
                className='center join-game-input-field'
                onChange={e => setPlayerName(e.target.value)}
            />
            <Button
                className='join-game-button-position'
                disabled={!joinCode || !playerName}
                onClick={joinGame}
            >Join</Button>
            <Snackbar 
                open={showErrorMessage} 
                autoHideDuration={4000} 
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                onClose={() => setShowErrorMessage(false)}
            >
                <Alert severity='error'>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default JoinGame;