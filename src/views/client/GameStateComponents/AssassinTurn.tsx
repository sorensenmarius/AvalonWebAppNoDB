import { HubConnection } from "@microsoft/signalr";
import { useState } from "react";
import Role from "../../../models/enums/Roles";
import Game from "../../../models/Game";
import Player from "../../../models/Player";
import GameHubMethods from "../../../services/GameHubMethods";

interface IAssassinTurnProps {
    game: Game,
    me: Player,
    socket: HubConnection
}

const AssassinTurn = ({game, me, socket} : IAssassinTurnProps) => {
    const [assassinationTarget, setAssassinationTarget] = useState<Player>();

    const submitAssassination = () => {
        socket.invoke(GameHubMethods.Assassinate, game.id, assassinationTarget?.id)
    }

    if (me.roleId === Role.Assassin) {
        return (
            <>
                {game.players.map((p: Player) => (
                    <label>
                        <input 
                            type='radio' 
                            value={p.id}
                            checked={assassinationTarget?.id === p.id}
                            onChange={() => setAssassinationTarget(p)}
                        />
                    </label>
                ))}
                <button
                    disabled={!assassinationTarget}
                    onClick={submitAssassination}
                >
                    Assassinate {assassinationTarget?.name}
                </button>
            </>
        )
    }
    return (
        <h1>Waiting for assassin</h1>
    )
}

export default AssassinTurn;