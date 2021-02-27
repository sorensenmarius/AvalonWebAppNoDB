import { useEffect, useState } from "react";
import IGameProp from "../../../models/IGameProp";

const RevealExpeditionVote = ({game}: IGameProp) => {
    const [votes, setVotes] = useState<boolean[]>([])

    useEffect(() => {
        const currentRound = game.currentRound
        let tempVotes = new Array(currentRound.votesForExpedition).fill(true)
        tempVotes.push(new Array(currentRound.votesAgainstExpedition).fill(false))
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
        <h1>The votes were {votes.join(', ')}</h1>

        // This is the old codo for flipping the images
        
        // <Row
        //     justify="center"
        //     className="verticallyCentered"
        // >
        //     {votes.map((v, index) => (
        //         <Col
        //             key={'flipVote'+index}
        //         >
        //             <div 
        //                 style={{
        //                     width: 'calc(80vw / ' + votes.length + ')',
        //                     height: 'calc(80vw / ' + votes.length + ')'
        //                 }}
        //                 className="flip-vote" 
        //                 id={'flipVote'+index} 
        //             >
        //                 <div className="flip-vote-inner">
        //                     <div className="flip-vote-front" />
        //                     <div className={(v ? 'goodVote' : 'evilVote') + ' flip-vote-back'} />
        //                 </div>
        //             </div>
        //         </Col>
        //     ))}
        // </Row>
    )
}

export default RevealExpeditionVote;