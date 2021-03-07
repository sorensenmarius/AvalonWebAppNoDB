import React from "react";
import Button from "../../../../components/Button/Button";
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
            <h1 style={{marginTop: '20vh'}}>Revealing votes</h1>
            <div style={{marginTop: '40vh'}}>
                {game.currentPlayer.id === me.id &&
                    <Button
                        onClick={nextStep}    
                    >
                        Continue
                    </Button>
                }
            </div>
        </>
    )
}

export default RevealVotes;