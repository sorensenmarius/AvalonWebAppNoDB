import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Role from "../../../models/enums/Roles";
import IBasicProps from "../../../models/IBasicProps";
import Player from "../../../models/Player";
import GameHubMethods from "../../../services/GameHubMethods";
import SelectPlayers from "../Helpers/SelectPlayers";

import './AssassinTurn.css'

const AssassinTurn = ({game, me, socket} : IBasicProps) => {
    const [selected, setSelected] = useState<Player[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [])

    const submitAssassination = () => {
        if(!loading)
            socket.invoke(GameHubMethods.Assassinate, game.id, selected[0].id)
        
        setLoading(true)
    }

    return (
        <div className='assassin-background'>
            {me.roleId === Role.Assassin ?
            <> 
                <h1>Assassinate Merlin</h1>
                <SelectPlayers 
                    num={1}
                    players={game.players}
                    selected={selected}
                    setSelected={setSelected}
                    assassin
                />
                <Button
                    disabled={selected.length === 0}
                    onClick={submitAssassination}
                    red
                >
                    Assassinate {selected.length > 0 ? selected[0].name : ''}
                </Button>
            </>
            :
            <h1>Waiting for Assassin</h1>
            }
        </div>
    )
}

export default AssassinTurn;