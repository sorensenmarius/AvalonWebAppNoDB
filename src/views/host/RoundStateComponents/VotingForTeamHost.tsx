import { useEffect, useState } from "react";
import Game from "../../../models/Game";

interface IVotingForTeamHostProps {
    game: Game
}

const VotingForTeamHost = ({game}: IVotingForTeamHostProps) => {
    const [currentTeam, setCurrentTeam] = useState<string>('')
    const [numberOfVotes, setNumberOfVotes] = useState<number>(0)
    
    useEffect(() => {
        const teamNames = game.currentRound.currentTeam.map(p => p.name);
        setCurrentTeam(teamNames.join(', '))

        setNumberOfVotes(game.currentRound.votesForTeam + game.currentRound.votesAgainstTeam)
    }, [game])
    
    return(
        <>
            <h2>Voting for {currentTeam} to go on a mission</h2>
            <h1>{numberOfVotes} / {game.players.length}</h1>
        </>
    )
}

export default VotingForTeamHost;