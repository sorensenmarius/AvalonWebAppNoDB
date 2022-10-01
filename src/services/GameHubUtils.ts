import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import Game from "../models/Game";
import GameHubListeners from "./GameHubListeners";
import http from "./HttpService";

export const setupSocket = async (
  game: Game | undefined,
  setGame: (game: Game) => void
): Promise<HubConnection> => {
  const connection = new HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_API_SOURCE}gamehub`)
    .withAutomaticReconnect([2000, 5000, 10000, 15000, 30000, 60000, 120000])
    .build();

  connection.on(GameHubListeners.GameUpdated, (game: Game) => {
    setGame(game);
  });

  connection.onreconnected(async () => {
    if (game?.id) {
      const response = await http.get<Game>("game/" + game.id);
      setGame(response.data);
    } else {
      // TODO: Review if this is cluttering the console
      console.error(
        "Reconnected to socket, but could not update game as the game id was missing."
      );
    }
  });

  await connection.start();

  return connection;
};
