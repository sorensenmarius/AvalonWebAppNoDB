import Game from "../../../models/Game";

const GameEnded = ({game} : {game: Game}) => {
    const evilWin = game.pointsEvil > game.pointsInnocent

    return(
        <>
            <h1>The game has ended</h1>
            <h2>{evilWin ? 'Evil' : 'Good'} won!</h2>
            <h3>{game.pointsInnocent} - {game.pointsEvil}</h3>
        </>
    )
}

export default GameEnded;