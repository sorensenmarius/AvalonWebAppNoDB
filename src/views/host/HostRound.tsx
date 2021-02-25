import React from "react";
import RoundStatus from "../../models/enums/RoundStatus";
import Game from "../../models/Game";
import SelectingTeamHost from "./RoundStateComponents/SelectingTeamHost";
import VotingForTeamHost from "./RoundStateComponents/VotingForTeamHost";

interface IHostRound {
    game: Game
}

const HostRound = ({game}: IHostRound) => {
    if (game.currentRound.status === RoundStatus.SelectingTeam)
        return <SelectingTeamHost game={game} />

    if (game.currentRound.status === RoundStatus.VotingForTeam)
        return <VotingForTeamHost game={game}/>
    
    return(
        <h1>Not yet implemented - HostRound</h1>
    )
}

export default HostRound;