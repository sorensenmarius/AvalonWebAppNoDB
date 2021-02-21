import { useState } from "react";
import IBasicProps from "../../../../models/IBasicProps";
import Player from "../../../../models/Player";
import GameHubMethods from "../../../../services/GameHubMethods";
import SelectPlayers from "../../Helpers/SelectPlayers";

const SelectingTeam = ({game, me, socket}: IBasicProps) => {
    const [selected, setSelected] = useState<Player[]>([])

    const submitTeam = () => {
        socket.invoke(GameHubMethods.SubmitSelectedTeam, game.id)
    }

    const updateSelected = (newSelected: Player[]) => {
        const selectedIds = newSelected.map(p => p.id)

        socket.invoke(GameHubMethods.ChangeSelectedTeam, game.id, selectedIds)

        setSelected(newSelected)
    }

    if (game.currentPlayer.id === me.id) {
        return(
            <>
                <h1>You are choosing people for a mission</h1>
                <SelectPlayers
                    num={game.currentRound.requiredPlayers}
                    players={game.players}
                    selected={selected}
                    setSelected={updateSelected}
                />
                <button
                    disabled={selected.length !== game.currentRound.requiredPlayers}
                    onClick={submitTeam}
                >
                    Choose players
                </button>
            </>
        )
    }

    return(
        <h1>Waiting for {game.currentPlayer.name} to choose a team</h1>
    )
}

export default SelectingTeam;