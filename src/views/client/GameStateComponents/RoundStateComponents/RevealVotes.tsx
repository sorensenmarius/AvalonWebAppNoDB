import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import IBasicProps from "../../../../models/IBasicProps";
import GameHubMethods from "../../../../services/GameHubMethods";

interface IRevealVotesProps extends IBasicProps {
    gameHubMethod: GameHubMethods
}

const RevealVotes = ({game, me, socket, gameHubMethod}: IRevealVotesProps) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [])

    const nextStep = () => {
        if (!loading)
            socket.invoke(gameHubMethod, game.id)
        
        setLoading(true)
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