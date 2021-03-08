import IGameProp from "../../../models/IGameProp";
import "./SelectingTeamHost.css"


const PreviousRounds = ({ game }: IGameProp) => {
    return (
        <div className="PreviousRounds">
            <img src="/images/PR.png" alt="" width="70%" />
            {game.rounds.map((round) => {
                if (round.id !== game.currentRound.id) {
                    return (
                        <div className={round.votesAgainstExpedition >= 1 ? "PreviousRoundCards Failure" : "PreviousRoundCards Success"}>
                            <div className="Leader">
                                Mission Leader: Simon
                                </div>

                                Voting Results: Yes: {round.votesForExpedition}, No: {round.votesAgainstExpedition}
                                Participants: {round.currentTeam.map((player) => (
                                <p>{player.name}</p>
                            ))}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default PreviousRounds;