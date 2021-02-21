import { HubConnection } from "@microsoft/signalr";
import { useState } from "react";
import Role from "../../../models/enums/Roles";
import Game from "../../../models/Game";
import Player from "../../../models/Player";
import GameHubMethods from "../../../services/GameHubMethods";
import SelectPlayers from "../HelperComponents/SelectPlayers";

interface IAssassinTurnProps {
    game: Game,
    me: Player,
    socket: HubConnection
}

const AssassinTurn = ({game, me, socket} : IAssassinTurnProps) => {
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
                <button
                    disabled={selected.length === 0}
                    onClick={submitAssassination}
                >
                    Assassinate {selected.length > 0 ? selected[0].name : ''}
                </button>
            </>
        )
    }
    return (
        <h1>Waiting for assassin</h1>
    )
}

export default AssassinTurn;