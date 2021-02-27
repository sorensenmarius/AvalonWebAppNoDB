import { useEffect, useState } from "react";
import Role from "../../models/enums/Roles";
import IGameProp from "../../models/IGameProp";

const AssassinTurnHost = ({game}: IGameProp) => {
    const [assassinName, setAssassinName] = useState<string>('')

    useEffect(() => {
        const tmp = game.players.find(p => p.roleId === Role.Assassin)?.name
        setAssassinName(tmp ? tmp : '')
    }, [game.players])

    return(
        <h1>{assassinName} is going to try to assassinate Merlin!!</h1>
    )    
}

export default AssassinTurnHost;