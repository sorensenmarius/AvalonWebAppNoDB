import IGameProp from "../../../models/IGameProp";
import "./SelectingTeamHost.css"

import './PreviousRounds.css'

const PreviousRounds = ({ game }: IGameProp) => {


    return (
        <div className="previous-rounds">
            <img src="/images/PR.png" alt="" width="70%" />
            {game.rounds.reverse().map((round) => {
                let tempVotes = (new Array(round.votesForExpedition).fill(true)).concat(new Array(round.votesAgainstExpedition).fill(false))
                if (round.id !== game.currentRound.id) {
                    return (
                        <div className={round.votesAgainstExpedition >= 1 ? "previous-round-cards failure" : "previous-round-cards success"}>
                            <div className="header">
                                <h1 className='previous-round-score'><span className='votes-for'>{round.votesForExpedition}</span> - <span className='votes-against'>{round.votesAgainstExpedition}</span></h1>
                                <div className="silhouette-holder">
                                    {tempVotes.map((vote, i) => {
                                        if (vote === true)
                                            return <img src="/images/gooduser.png" alt='Good User' key={i}/>
                                        else
                                            return <img src="/images/eviluser.png" alt='Evil User' key={i}/>
                                    })}
                                </div>
                            </div>
                            <div className='previous-round-names-holder'>
                                {round.currentTeam.map(p => (
                                    <div className='previous-round-names'>{p.name}</div>
                                ))}
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