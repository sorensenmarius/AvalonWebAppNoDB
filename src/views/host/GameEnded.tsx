import { useEffect, useState } from "react";
import IGameProp from "../../models/IGameProp";

const GameEnded = ({game}: IGameProp) => {
    const [goodWon, setGoodWon] = useState<boolean>()
    const [winnerNames, setWinnerNames] = useState<string>()

    useEffect(() => {
        const tmpGoodWon = game.pointsEvil > game.pointsInnocent

        const goodTeam = game.players.filter(p => !p.isEvil)
        const evilTeam = game.players.filter(p => p.isEvil)
        const winnerTeam = tmpGoodWon ? evilTeam : goodTeam

        setGoodWon(tmpGoodWon)
        setWinnerNames(winnerTeam.map(p => p.name).join(', '))
    }, [game.players, game.pointsEvil, game.pointsInnocent])

    return(
        <>
            <h1>Congratulations to the {goodWon ? 'good' : 'evil'} team!</h1>
            <h2>{winnerNames}</h2>

            {game.pointsInnocent >= 0 ?
                <>
                    <h3>Good had {game.pointsInnocent}</h3>
                    <h3>Evil had {game.pointsEvil}</h3>
                </>
            : 
                <h3>Evil won by assassinating Merlin!</h3>
            }
        </>
    )
}

export default GameEnded;