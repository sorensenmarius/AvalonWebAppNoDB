import RoundStatus from "../../../models/enums/RoundStatus";
import IBasicProps from "../../../models/IBasicProps";
import SelectingTeam from "./RoundStateComponents/SelectingTeam";
import RevealVotes from "./RoundStateComponents/RevealVotes";
import Vote from "./RoundStateComponents/Vote";
import GameHubMethods from "../../../services/GameHubMethods";

const PlayRound = ({game, me, socket} : IBasicProps) => {

    const currentRoundStatus = game.currentRound.status;

    if (currentRoundStatus === RoundStatus.SelectingTeam)
        return <SelectingTeam game={game} me={me} socket={socket} />

    if (currentRoundStatus === RoundStatus.VotingForTeam)
        return <Vote game={game} me={me} socket={socket} expedition={false} />
    
    if (currentRoundStatus === RoundStatus.RevealTeamVote)
        return <RevealVotes game={game} me={me} socket={socket} gameHubMethod={GameHubMethods.SkipRevealTeamVotes}/>

    if (currentRoundStatus === RoundStatus.VotingForExpedition)
        return <Vote game={game} me={me} socket={socket} expedition={true} />
    
    if (currentRoundStatus === RoundStatus.RevealExpeditionVote)
        return <RevealVotes game={game} me={me} socket={socket} gameHubMethod={GameHubMethods.SkipExpeditionVotes}/>

    
    return(
        <h1>Not yet implemented - PlayRound - {currentRoundStatus}</h1>
    )
}

export default PlayRound;