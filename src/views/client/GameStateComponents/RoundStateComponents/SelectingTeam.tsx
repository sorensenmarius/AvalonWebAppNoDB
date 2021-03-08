import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import IBasicProps from "../../../../models/IBasicProps";
import Player from "../../../../models/Player";
import GameHubMethods from "../../../../services/GameHubMethods";
import SelectPlayers from "../../Helpers/SelectPlayers";

const SelectingTeam = ({game, me, socket}: IBasicProps) => {
    const [selected, setSelected] = useState<Player[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [])

    const submitTeam = () => {
        if(!loading)
            socket.invoke(GameHubMethods.SubmitSelectedTeam, game.id)
        
        setLoading(true)
    }

    const updateSelected = (newSelected: Player[]) => {
        const selectedIds = newSelected.map(p => p.id)

        socket.invoke(GameHubMethods.ChangeSelectedTeam, game.id, selectedIds)

        setSelected(newSelected)
    }

    if (game.currentPlayer.id === me.id) {
        return(
            <>
                <h1>Choose {game.currentRound.requiredPlayers} players</h1>
                <SelectPlayers
                    num={game.currentRound.requiredPlayers}
                    players={game.players}
                    selected={selected}
                    setSelected={updateSelected}
                />
                <Button
                    disabled={selected.length !== game.currentRound.requiredPlayers}
                    onClick={submitTeam}
                >
                    Choose players
                </Button>
            </>
        )
    }

    return(
        <h1 style={{marginTop: '20vh'}}>Waiting for {game.currentPlayer.name} to choose a team</h1>
    )
}

export default SelectingTeam;