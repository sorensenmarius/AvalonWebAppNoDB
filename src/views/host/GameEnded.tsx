import AvatarComponent from "avataaars";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import IGameProp from "../../models/IGameProp";
import Player from "../../models/Player";
import { AvatarDefaultSettings } from "../client/Helpers/Avatars/IAvatar";

import './GameEnded.css'

interface IGameEndedProps extends IGameProp{
    resetGame: () => void
}

const GameEnded = ({game, resetGame}: IGameEndedProps) => {
    const [goodWon, setGoodWon] = useState<boolean>()
    const [winnerTeam, setWinnerTeam] = useState<Player[]>([])

    useEffect(() => {
        const tmpGoodWon = game.pointsInnocent > game.pointsEvil

        const goodTeam = game.players.filter(p => !p.isEvil)
        const evilTeam = game.players.filter(p => p.isEvil)
        setWinnerTeam(tmpGoodWon ? goodTeam : evilTeam)

        setGoodWon(tmpGoodWon)
    }, [game.players, game.pointsEvil, game.pointsInnocent])

    return(
        <div className={`game-ended-background-host ${goodWon ? 'good' : 'evil'}`}>
            <h1>Congratulations to the {goodWon ? 'good' : 'evil'} team!</h1>
            {game.pointsInnocent >= 0 ?
                <>
                    <h3>Good had {game.pointsInnocent} point{game.pointsInnocent !== 1 ? 's' : ''}</h3>
                    <h3>Evil had {game.pointsEvil} point{game.pointsEvil !== 1 ? 's' : ''}</h3>
                </>
            : 
                <h3>Evil won by assassinating Merlin!</h3>
            }
            <div className="game-ended-winners-container">
                {winnerTeam.map(p => (
                    <div className="game-ended-player-container" key={p.id}>
                        <AvatarComponent
                            style={{height: '50%'}}
                            {...AvatarDefaultSettings}
                            {...p.avatar}
                        />
                        <h2>{p.name}</h2>
                    </div>
                ))}
            </div>
            <Button
                onClick={resetGame}
            >
                Play Again
            </Button>
        </div>
    )
}

export default GameEnded;