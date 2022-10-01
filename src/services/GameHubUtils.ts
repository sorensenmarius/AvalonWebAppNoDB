import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import Game from "../models/Game";
import GameHubListeners from "./GameHubListeners";
import http from "./HttpService";

/**
 * Returns a list of milliseconds for every second for a specified time in minutes
 *
 * @param minutes Number of minutes
 */
const getTimings = (minutes: number) => {
  const timings = [];

  // 60 times per minute / every second
  for (let i = 0; i < minutes * 60 + 1; i++) {
    // 1000ms -> 1 second
    timings.push(i * 1000);
  }

  return timings;
};

export const setupSocket = async (
  game: Game | undefined,
  setGame: (game: Game) => void
): Promise<HubConnection> => {
  const connection = new HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_API_SOURCE}gamehub`)
    // Try to reconnect for 20 minutes after losing connection.
    .withAutomaticReconnect(getTimings(20))
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
