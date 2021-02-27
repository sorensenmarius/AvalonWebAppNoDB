import IGameProp from "../../../models/IGameProp";

const VotingForExpeditionHost = ({game}: IGameProp) => {
    const team = game.currentRound.currentTeam
    
    return(
        <h1>{team.map(p => p.name).join(', ')} are on a mission!!!</h1>
    )
}

export default VotingForExpeditionHost;