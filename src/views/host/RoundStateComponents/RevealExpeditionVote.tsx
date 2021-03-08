import { useEffect, useState } from "react";
import IGameProp from "../../../models/IGameProp";
import './RevealExpeditionVote.css'

const RevealExpeditionVote = ({game}: IGameProp) => {
    const [votes, setVotes] = useState<boolean[]>([])

    useEffect(() => {
        const currentRound = game.currentRound
        let tempVotes = new Array(currentRound.votesForExpedition).fill(true)
        tempVotes = tempVotes.concat(new Array(currentRound.votesAgainstExpedition).fill(false))
        setVotes(tempVotes)

        setTimeout(reveal, 3000, tempVotes)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const reveal = (tmpVotes: boolean[]) => {
        for(let i = 0; i < tmpVotes.length; i++) {
            setTimeout(() => {
                let currentVote = document.getElementById('flipVote'+i)
                currentVote?.classList.add('flip-vote-reveal')
            }, 1000 * i + 1)
        }
    }

    return(
        <div
            className="expedition-vote-holder"
        >
            {votes.map((v, index) => (
                <div 
                    key={'flipVote'+index}
                    style={{
                        width: 'calc(80% / ' + votes.length + ')',
                        height: 'calc(80% / ' + votes.length + ')'
                    }}
                    className="flip-vote" 
                    id={'flipVote'+index} 
                >
                    <div className="flip-vote-inner">
                        <div className="flip-vote-front" />
                        <div className={`${v ? 'goodVote' : 'evilVote'} flip-vote-back`} />
                        {v}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RevealExpeditionVote;