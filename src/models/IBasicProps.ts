import { HubConnection } from "@microsoft/signalr";
import Game from "./Game";
import Player from "./Player";

interface IBasicProps {
    game: Game,
    me: Player,
    socket: HubConnection
}

export default IBasicProps;