import { useEffect, useState } from "react";
import Game from "../../../../models/Game";
import Player from "../../../../models/Player";

interface IVoteProps {
    game: Game
    me: Player
    expedition: boolean
}

const Vote = ({game, me, expedition}: IVoteProps) => {
    const [iAmVoting, setIAmVoting] = useState<boolean>(false)

    useEffect(() => {
        if (!expedition) {
            setIAmVoting(true)
        } else {
            setIAmVoting(game.currentRound.currentTeam.map(p => p.id).includes(me.id))
        }
    }, [game, expedition, me])

    const registerVote = (successVote: boolean) => {
        // Register expedition or team votes :)))
    }

    if (iAmVoting) {
        return(
            <>
                <h1>Vote for {expedition ? 'expedition' : 'team'}</h1>
                <button
                    onClick={() => registerVote(true)}
                >
                    {expedition ? 'Accept' : 'Success'}
                </button>
                <button
                    onClick={() => registerVote(false)}
                >
                    {expedition ? 'Reject' : 'Fail'}
                </button>
            </>
        )
    }
}

export default Vote;