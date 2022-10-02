import { ReplayOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { FC } from "react";
import Game from "../../../models/Game";
import http from "../../../services/HttpService";

const ReloadButton: FC<{ game: Game; setGame: (game: Game) => void }> = ({
  game,
  setGame,
}) => {
  const updateGame = async () => {
    const response = await http.get<Game>("game/" + game.id);
    setGame(response.data);
  };

  return (
    <Fab
      color="primary"
      onClick={updateGame}
      sx={{ position: "absolute", bottom: 10, left: 10 }}
    >
      <ReplayOutlined />
    </Fab>
  );
};

export default ReloadButton;
