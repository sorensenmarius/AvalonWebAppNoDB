import { HubConnection } from "@microsoft/signalr";
import Game from "../../../models/Game";

interface IJoinGameProps {
    setGame: (game: Game) => void,
    socket?: HubConnection
}

const JoinGame = (props: IJoinGameProps) => {
    const {setGame, socket} = props;

    return(
        <>
            <h1>Join game</h1>
            <input type="text" placeholder="Join Code" />
            <button>Join</button>
        </>
    )
}

export default JoinGame;