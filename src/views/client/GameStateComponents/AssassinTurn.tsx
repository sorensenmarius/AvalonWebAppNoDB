import React, { useState } from "react";
import Button from "../../../components/Button";
import Role from "../../../models/enums/Roles";
import IBasicProps from "../../../models/IBasicProps";
import Player from "../../../models/Player";
import GameHubMethods from "../../../services/GameHubMethods";
import SelectPlayers from "../Helpers/SelectPlayers";


const AssassinTurn = ({game, me, socket} : IBasicProps) => {
    const [selected, setSelected] = useState<Player[]>([]);

    const submitAssassination = () => {
        socket.invoke(GameHubMethods.Assassinate, game.id, selected[0].id)
    }

    if (me.roleId === Role.Assassin) {
        return (
            <>
                <SelectPlayers 
                    num={1}
                    players={game.players}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Button
                    disabled={selected.length === 0}
                    onClick={submitAssassination}
                >
                    Assassinate {selected.length > 0 ? selected[0].name : ''}
                </Button>
            </>
        )
    }
    return (
        <h1>Waiting for assassin</h1>
    )
}

export default AssassinTurn;