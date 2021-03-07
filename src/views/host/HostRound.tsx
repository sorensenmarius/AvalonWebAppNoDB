import React from "react";
import RoundStatus from "../../models/enums/RoundStatus";
import Game from "../../models/Game";
import RevealExpeditionVote from "./RoundStateComponents/RevealExpeditionVote";
import RevealTeamVotesHost from "./RoundStateComponents/RevealTeamVotesHost";
import SelectingTeamHost from "./RoundStateComponents/SelectingTeamHost";
import VotingForExpeditionHost from "./RoundStateComponents/VotingForExpeditionHost";
import VotingForTeamHost from "./RoundStateComponents/VotingForTeamHost";
import "./HostRoundCss.css"
import HeaderTile from "./RoundStateComponents/HeaderTile";
import PreviousRounds from "./RoundStateComponents/PreviousRounds";

interface IHostRound {
    game: Game
}

const HostRound = ({ game }: IHostRound) => {
    const currentRoundStatus = game.currentRound.status;
    let currentRoundComp = null
    if (currentRoundStatus === RoundStatus.SelectingTeam)
        currentRoundComp = <SelectingTeamHost game={game} />

    if (currentRoundStatus === RoundStatus.VotingForTeam)
        currentRoundComp = <VotingForTeamHost game={game} />

    if (currentRoundStatus === RoundStatus.RevealTeamVote)
        currentRoundComp = <RevealTeamVotesHost game={game} />

    if (currentRoundStatus === RoundStatus.VotingForExpedition)
        currentRoundComp = <VotingForExpeditionHost game={game} />

    if (currentRoundStatus === RoundStatus.RevealExpeditionVote)
        currentRoundComp = <RevealExpeditionVote game={game} />
    return (
        <>
            <div className="BackgroundHolder"></div>
            <div className="HostRoundContent">
                <PreviousRounds game={game} />
                <div className="ScoreAndMainComp">
                    <HeaderTile game={game} />
                    <div className="MainTile">
                        {currentRoundComp}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HostRound;