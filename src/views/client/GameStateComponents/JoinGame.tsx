import { HubConnection } from "@microsoft/signalr";
import { useState } from "react";
import Game from "../../../models/Game";

interface IJoinGameProps {
    setGame: (game: Game) => void,
    socket?: HubConnection
}

const JoinGame = (props: IJoinGameProps) => {
    const {setGame, socket} = props;
    const [joinCode, setJoinCode] = useState<number>()

    const joinGame = () => {
    }

    return(
        <>
            <h1>Join game</h1>
            <input type="number" placeholder="Join Code" />
            <button 
                onClick={joinGame}
            >Join</button>
        </>
    )
}

export default JoinGame;