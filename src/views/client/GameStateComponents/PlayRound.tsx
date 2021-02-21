import RoundStatus from "../../../models/enums/RoundStatus";
import IBasicProps from "../../../models/IBasicProps";
import SelectingTeam from "./RoundStateComponents/SelectingTeam";

const PlayRound = ({game, me, socket} : IBasicProps) => {

    const currentRoundStatus = game.currentRound.status;

    if (currentRoundStatus === RoundStatus.SelectingTeam)
        return <SelectingTeam game={game} me={me} socket={socket} />
    
    return(<></>)
}

export default PlayRound;