import { HubConnection } from "@microsoft/signalr";
import React, { useState } from "react";
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

    const joinGame = async () => {
        const { game, me }: { game: Game, me: Player } = await GameService.joinGame(joinCode, playerName);

        setGame(game);
        setMe(me);

        setupSocket(setGame).then(newSocket => {
            setSocket(newSocket)
            newSocket.invoke(GameHubMethods.JoinGame, game.id);
        })
    }

    return (
        <>
            <div className='join-game-background' />
            <img
                src="/images/Avalon.png"
                alt="Avalon"
                className='join-game-title center'
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
        </>
    )
}

export default JoinGame;