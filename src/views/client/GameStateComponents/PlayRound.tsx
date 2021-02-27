import RoundStatus from "../../../models/enums/RoundStatus";
import IBasicProps from "../../../models/IBasicProps";
import SelectingTeam from "./RoundStateComponents/SelectingTeam";
import RevealTeamVotes from "./RoundStateComponents/RevealTeamVotes";
import Vote from "./RoundStateComponents/Vote";

const PlayRound = ({game, me, socket} : IBasicProps) => {

    const currentRoundStatus = game.currentRound.status;

    if (currentRoundStatus === RoundStatus.SelectingTeam)
        return <SelectingTeam game={game} me={me} socket={socket} />

    if (currentRoundStatus === RoundStatus.VotingForTeam)
        return <Vote game={game} me={me} socket={socket} expedition={false} />
    
    if (currentRoundStatus === RoundStatus.RevealTeamVote)
        return <RevealTeamVotes game={game} me={me} socket={socket} />

    if (currentRoundStatus === RoundStatus.VotingForExpedition)
        return <Vote game={game} me={me} socket={socket} expedition={false} />
    

    
    return(
        <h1>Not yet implemented - PlayRound - {currentRoundStatus}</h1>
    )
}

export default PlayRound;