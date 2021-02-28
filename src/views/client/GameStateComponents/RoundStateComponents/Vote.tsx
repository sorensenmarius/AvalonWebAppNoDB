import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import IBasicProps from "../../../../models/IBasicProps";
import GameHubMethods from "../../../../services/GameHubMethods";

interface IVoteProps extends IBasicProps {
    expedition: boolean
}

const Vote = ({game, me, expedition, socket}: IVoteProps) => {
    const [iAmVoting, setIAmVoting] = useState<boolean>(false)
    const [haveVoted, setHaveVoted] = useState<boolean>(false)

    useEffect(() => {
        if (!expedition) {
            setIAmVoting(true)
        } else {
            setIAmVoting(game.currentRound.currentTeam.map(p => p.id).includes(me.id))
        }
    }, [game, expedition, me])

    const registerVote = (successVote: boolean) => {
        const socketFunction = expedition ? GameHubMethods.SubmitExpeditionVote : GameHubMethods.SubmitTeamVote
        setHaveVoted(true)
        socket.invoke(socketFunction, game.id, successVote)
    }

    if (iAmVoting && !haveVoted) {
        return(
            <>
                <h1>Vote for {expedition ? 'expedition' : 'team'}</h1>
                <Button
                    onClick={() => registerVote(true)}
                >
                    {expedition ? 'Accept' : 'Success'}
                </Button>
                <Button
                    onClick={() => registerVote(false)}
                >
                    {expedition ? 'Reject' : 'Fail'}
                </Button>
            </>
        )
    }

    return(
        <h1>Waiting for votes</h1>
    )
}

export default Vote;