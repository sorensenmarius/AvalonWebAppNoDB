import RoundStatus from "../../../models/enums/RoundStatus";
import IBasicProps from "../../../models/IBasicProps";
import SelectingTeam from "./RoundStateComponents/SelectingTeam";
import RevealVotes from "./RoundStateComponents/RevealVotes";
import Vote from "./RoundStateComponents/Vote";
import GameHubMethods from "../../../services/GameHubMethods";
import React from "react";
import RoleModal from "../Helpers/RoleModal";

const PlayRound = ({game, me, socket} : IBasicProps) => {
    const currentRoundStatus = game.currentRound.status;

    let currentRoundComponent = null;

    if (currentRoundStatus === RoundStatus.SelectingTeam)
        currentRoundComponent = <SelectingTeam game={game} me={me} socket={socket} />

    if (currentRoundStatus === RoundStatus.VotingForTeam)
        currentRoundComponent = <Vote game={game} me={me} socket={socket} expedition={false} />
    
    if (currentRoundStatus === RoundStatus.RevealTeamVote)
        currentRoundComponent =  <RevealVotes game={game} me={me} socket={socket} gameHubMethod={GameHubMethods.SkipRevealTeamVotes}/>

    if (currentRoundStatus === RoundStatus.VotingForExpedition)
        currentRoundComponent =  <Vote game={game} me={me} socket={socket} expedition={true} />
    
    if (currentRoundStatus === RoundStatus.RevealExpeditionVote)
        currentRoundComponent =  <RevealVotes game={game} me={me} socket={socket} gameHubMethod={GameHubMethods.SkipExpeditionVotes}/>

    
    return(
        <div className='client-background'>
            {currentRoundComponent}
            <RoleModal me={me} />
        </div>
    )
}

export default PlayRound;