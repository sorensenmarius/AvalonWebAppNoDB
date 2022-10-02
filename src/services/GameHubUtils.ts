import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import Game from "../models/Game";
import GameHubListeners from "./GameHubListeners";
import GameHubMethods from "./GameHubMethods";
import http from "./HttpService";

export const setupSocket = async (
  game: Game | undefined,
  setGame: (game: Game) => void
): Promise<HubConnection> => {
  const connection = new HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_API_SOURCE}gamehub`)
    .withAutomaticReconnect()
    .build();

  connection.on(GameHubListeners.GameUpdated, (game: Game) => {
    setGame(game);
  });

  connection.onreconnected(async () => {
    if (game?.id) {
      const response = await http.get<Game>("game/" + game.id);
      setGame(response.data);

      // Rejoin game in case of new connectionId
      connection.invoke(GameHubMethods.JoinGame, game.id);
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
