import { useEffect, useState } from "react";
import Game from "../../../models/Game";

interface IRevealTeamVotesHost {
    game: Game
}

const RevealTeamVotesHost = ({game}: IRevealTeamVotesHost) => {
    const [ms, setMs] = useState(20000);
    const [goodTeamVotes, setGoodTeamVotes] = useState(0);
    const [evilTeamVotes, setEvilTeamVotes] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setMs(ms => ms - 100)
        }, 100)

        setTimeout(() => {
            for(let i = 0 ; i < game.currentRound.votesForTeam; i++) {
                setTimeout(() => {
                    setGoodTeamVotes(i + 1)
                }, 500 * i)
            }

            for(let i = 0 ; i < game.currentRound.votesAgainstTeam; i++) {
                setTimeout(() => {
                    setEvilTeamVotes(i + 1)
                }, 500 * i)
            }
        }, ms * 0.15)

        return () => clearInterval(interval)
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            <h1>Votes for Good: {goodTeamVotes}</h1>
            <h1>Votes for Evil: {evilTeamVotes}</h1>
        </>
    )
}

export default RevealTeamVotesHost;