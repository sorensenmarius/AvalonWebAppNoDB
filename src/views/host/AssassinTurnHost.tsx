import AvatarComponent from "avataaars";
import { useEffect, useState } from "react";
import Role from "../../models/enums/Roles";
import IGameProp from "../../models/IGameProp";
import Player from "../../models/Player";
import { AvatarDefaultSettings } from "../client/Helpers/Avatars/IAvatar";

import './AssassinTurnHost.css'

const AssassinTurnHost = ({game}: IGameProp) => {
    const [assassin, setAssassin] = useState<Player | undefined>()

    useEffect(() => {
        const tmp = game.players.find(p => p.roleId === Role.Assassin)
        setAssassin(tmp)
    }, [game.players])

    return(
        <>
            <div className='assassin-host-background' />
            <div className='assassin-host-container'>
                <h1 className='assassin-host-text'>{assassin?.name} is going to try to assassinate Merlin!!</h1>
                <AvatarComponent
                    {...AvatarDefaultSettings}
                    {...assassin?.avatar}
                />
            </div>
        </>
    )    
}

export default AssassinTurnHost;