import React from "react";
import Button from "../../../../components/Button";
import IBasicProps from "../../../../models/IBasicProps";
import GameHubMethods from "../../../../services/GameHubMethods";

interface IRevealVotesProps extends IBasicProps {
    gameHubMethod: GameHubMethods
}

const RevealVotes = ({game, me, socket, gameHubMethod}: IRevealVotesProps) => {
    const nextStep = () => {
        socket.invoke(gameHubMethod, game.id)
    }

    return(
        <>
            <h1>Waiting for result on screen :O</h1>
            {game.currentPlayer.id === me.id &&
                <Button
                    onClick={nextStep}    
                >
                    Continue
                </Button>
            }
        </>
    )
}

export default RevealVotes;