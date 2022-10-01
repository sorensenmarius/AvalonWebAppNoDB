import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import useGlobalSnackbar from "../../../../hooks/useGlobalSnackbar";
import IBasicProps from "../../../../models/IBasicProps";
import GameHubMethods from "../../../../services/GameHubMethods";

interface IVoteProps extends IBasicProps {
  expedition: boolean;
}

const Vote = ({ game, me, expedition, socket }: IVoteProps) => {
  const [iAmVoting, setIAmVoting] = useState<boolean>(false);
  const [haveVoted, setHaveVoted] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const { showErrorMessage } = useGlobalSnackbar();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!expedition) {
      setIAmVoting(true);
    } else {
      setIAmVoting(
        game.currentRound.currentTeam.map((p) => p.id).includes(me.id)
      );
    }

    setLoading(false);
  }, [game, expedition, me]);

  const registerVote = (successVote: boolean) => {
    if (!loading) {
      setLoading(true);
      if (expedition) {
        socket
          .invoke(
            GameHubMethods.SubmitExpeditionVote,
            game.id,
            me.id,
            successVote
          )
          // TODO: This should be a catch with a message if there is an error
          .then((message: string) => {
            if (message) {
              showErrorMessage(message);
            } else {
              setHaveVoted(true);
            }
            setLoading(false);
          });
      } else {
        socket.invoke(GameHubMethods.SubmitTeamVote, game.id, successVote);
        setHaveVoted(true);
      }
    }
  };

  if (iAmVoting && !haveVoted) {
    return (
      <>
        <h1 style={{ marginTop: "20vh" }}>
          Vote for {expedition ? "expedition" : "team"}
        </h1>
        <div style={{ marginTop: "40vh" }}>
          <Button onClick={() => registerVote(true)}>
            {expedition ? "Success" : "Accept"}
          </Button>
          <Button onClick={() => registerVote(false)} red={expedition}>
            {expedition ? "Fail" : "Reject"}
          </Button>
        </div>
      </>
    );
  }

  return <h1 style={{ marginTop: "20vh" }}>Waiting for votes</h1>;
};

export default Vote;
