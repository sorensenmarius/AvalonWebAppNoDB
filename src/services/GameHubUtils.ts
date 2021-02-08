import { HubConnectionBuilder } from "@microsoft/signalr";
import Game from "../models/Game";
import GameHubListeners from "./GameHubListeners";

export const setupSocket = async (setGame: (game: Game) => void) => {
    const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_API_SOURCE}gamehub`)
        .build();

    connection.on(GameHubListeners.GameUpdated, (game: Game) => {
        setGame(game)
        console.log(game)
    });

    await connection.start()

    return connection;
}