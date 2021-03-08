import IGameProp from "../../../models/IGameProp";
import "./SelectingTeamHost.css"


const PreviousRounds = ({ game }: IGameProp) => {


    return (
        <div className="PreviousRounds">
            <img src="/images/PR.png" alt="" width="70%" />
            {game.rounds.map((round) => {
                let tempVotes = new Array(round.votesForExpedition).fill(true)
                tempVotes.push(new Array(round.votesAgainstExpedition).fill(false))
                if (round.id !== game.currentRound.id) {
                    return (
                        <div className={round.votesAgainstExpedition >= 1 ? "PreviousRoundCards Failure" : "PreviousRoundCards Success"}>
                            <div className="Leader">
                                <h1 className="VotesFor"> {round.votesForExpedition}&nbsp;</h1>
                                <h1>-</h1>
                                <h1 className="VotesAgainst">&nbsp;{round.votesAgainstExpedition}</h1>
                                <div className="SiluettHolder">

                                </div>
                                {tempVotes.map((vote) => {
                                    if (vote == true)
                                        return <img src="/images/playersilChosen.png" alt="" height="170%" width="20%" />
                                    else
                                        return <img src="/images/playersilEvil.png" alt="" height="168%" width="13%" />
                                })}
                            </div>
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default PreviousRounds;