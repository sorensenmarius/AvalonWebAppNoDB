import { HubConnection } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import Game from "../../models/Game";
import JoinGame from "./GameStateComponents/JoinGame";
import GameStatus from "../../models/enums/GameStatus";
import WaitingForPlayers from "./GameStateComponents/WaitingForPlayers";
import AssassinTurn from "./GameStateComponents/AssassinTurn";
import PlayRound from "./GameStateComponents/PlayRound";
import GameEnded from "./GameStateComponents/GameEnded";
import Player from "../../models/Player";

import "./PlayGame.css";
import useGlobalSnackbar from "../../hooks/useGlobalSnackbar";

const PlayGame = () => {
  const [game, setGame] = useState<Game>();
  const [me, setMe] = useState<Player>();
  const [socket, setSocket] = useState<HubConnection>();
  const { showMessage } = useGlobalSnackbar();

  useEffect(() => {
    if (me) {
      const newMe = game?.players.find((p) => p.id === me.id);

      if (newMe) setMe(newMe);
    }
  }, [me, game?.players]);

  useEffect(() => {
    showMessage("Socket state changed to " + socket?.state, "info");
  }, [socket?.state, showMessage]);

  const resetGame = () => {
    setMe(undefined);
    setGame(undefined);
    setSocket(undefined);
  };

  if (!game || !me || !socket)
    return <JoinGame setGame={setGame} setMe={setMe} setSocket={setSocket} />;

  if (game.status === GameStatus.WaitingForPlayers)
    return <WaitingForPlayers game={game} me={me} socket={socket} />;

  if (game.status === GameStatus.Playing)
    return <PlayRound game={game} me={me} socket={socket} />;

  if (game.status === GameStatus.AssassinTurn)
    return <AssassinTurn game={game} me={me} socket={socket} />;

  if (game.status === GameStatus.Ended)
    return <GameEnded game={game} resetGame={resetGame} />;

  return <></>;
};

export default PlayGame;
