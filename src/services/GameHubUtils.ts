import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import Game from "../models/Game";
import GameHubListeners from "./GameHubListeners";

export const setupSocket = async (setGame: (game: Game) => void) : Promise<HubConnection> => {
    const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_API_SOURCE}gamehub`)
        .withAutomaticReconnect()
        .build();

    connection.on(GameHubListeners.GameUpdated, (game: Game) => {
        setGame(game)
    });

    await connection.start()

    return connection;
}