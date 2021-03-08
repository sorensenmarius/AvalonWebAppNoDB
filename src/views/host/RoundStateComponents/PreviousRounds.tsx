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
                                <h1><span className='VotesFor'>{round.votesForExpedition}</span> - <span className='VotesAgainst'>{round.votesAgainstExpedition}</span></h1>
                                <div className="SiluettHolder">
                                    {tempVotes.map((vote) => {
                                        if (vote === true)
                                            return <img src="/images/gooduser.png" alt='Good User'/>
                                        else
                                            return <img src="/images/eviluser.png" alt='Evil User'/>
                                    })}
                                </div>
                            </div>
                            <div>
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