import { HubConnectionBuilder } from "@microsoft/signalr";
import Game from "../models/Game";
import GameHubListeners from "./GameHubListeners";

export const setupSocket = (setGame: (game: Game) => void) => {
    const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_API_SOURCE}gamehub`)
        .build();

    connection.on(GameHubListeners.GameUpdated, (game: Game) => {
        console.log(game)
    });

    connection.start().catch(err => console.log(err))

    return connection;
}