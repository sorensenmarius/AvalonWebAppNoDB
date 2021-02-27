import React from "react";
import RoundStatus from "../../models/enums/RoundStatus";
import Game from "../../models/Game";
import RevealTeamVotesHost from "./RoundStateComponents/RevealTeamVotesHost";
import SelectingTeamHost from "./RoundStateComponents/SelectingTeamHost";
import VotingForExpeditionHost from "./RoundStateComponents/VotingForExpeditionHost";
import VotingForTeamHost from "./RoundStateComponents/VotingForTeamHost";

interface IHostRound {
    game: Game
}

const HostRound = ({game}: IHostRound) => {

    const currentRoundStatus = game.currentRound.status;

    if (currentRoundStatus === RoundStatus.SelectingTeam)
        return <SelectingTeamHost game={game} />

    if (currentRoundStatus === RoundStatus.VotingForTeam)
        return <VotingForTeamHost game={game} />
    
    if (currentRoundStatus === RoundStatus.RevealTeamVote)
        return <RevealTeamVotesHost game={game} />
    
    if (currentRoundStatus === RoundStatus.VotingForExpedition)
        return <VotingForExpeditionHost game={game} />
    
    return(
        <h1>Not yet implemented - HostRound - {currentRoundStatus}</h1>
    )
}

export default HostRound;