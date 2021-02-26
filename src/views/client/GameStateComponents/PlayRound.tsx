import RoundStatus from "../../../models/enums/RoundStatus";
import IBasicProps from "../../../models/IBasicProps";
import SelectingTeam from "./RoundStateComponents/SelectingTeam";
import Vote from "./RoundStateComponents/Vote";

const PlayRound = ({game, me, socket} : IBasicProps) => {

    const currentRoundStatus = game.currentRound.status;

    if (currentRoundStatus === RoundStatus.SelectingTeam)
        return <SelectingTeam game={game} me={me} socket={socket} />

    if (currentRoundStatus === RoundStatus.VotingForTeam)
        return <Vote game={game} me={me} socket={socket} expedition={false} />
    
    return(<></>)
}

export default PlayRound;