import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import IGameProp from "../../models/IGameProp";

import './GameEnded.css'

interface IGameEndedProps extends IGameProp{
    resetGame: () => void
}

const GameEnded = ({game, resetGame}: IGameEndedProps) => {
    const [goodWon, setGoodWon] = useState<boolean>()
    const [winnerNames, setWinnerNames] = useState<string>()

    useEffect(() => {
        const tmpGoodWon = game.pointsInnocent > game.pointsEvil

        const goodTeam = game.players.filter(p => !p.isEvil)
        const evilTeam = game.players.filter(p => p.isEvil)
        const winnerTeam = tmpGoodWon ? goodTeam : evilTeam

        setGoodWon(tmpGoodWon)
        setWinnerNames(winnerTeam.map(p => p.name).join(', '))
    }, [game.players, game.pointsEvil, game.pointsInnocent])

    return(
        <div className={`game-ended-background-host ${goodWon ? 'good' : 'evil'}`}>
            <h1>Congratulations to the {goodWon ? 'good' : 'evil'} team!</h1>
            <h2>{winnerNames}</h2>

            {game.pointsInnocent >= 0 ?
                <>
                    <h3>Good had {game.pointsInnocent} point{game.pointsInnocent !== 1 ? 's' : ''}</h3>
                    <h3>Evil had {game.pointsEvil} point{game.pointsEvil !== 1 ? 's' : ''}</h3>
                </>
            : 
                <h3>Evil won by assassinating Merlin!</h3>
            }
            <Button
                onClick={resetGame}
            >
                Play Again
            </Button>
        </div>
    )
}

export default GameEnded;