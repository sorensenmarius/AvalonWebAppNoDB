import RoundStatus from "../../models/enums/RoundStatus";
import Game from "../../models/Game";
import SelectingTeamHost from "./RoundStateComponents/SelectingTeamHost";

interface IHostRound {
    game: Game
}

const HostRound = ({game}: IHostRound) => {
    if (game.currentRound.status === RoundStatus.SelectingTeam)
        return <SelectingTeamHost game={game} />
    
    return(
        <h1>Not yet implemented - HostRound</h1>
    )
}

export default HostRound;