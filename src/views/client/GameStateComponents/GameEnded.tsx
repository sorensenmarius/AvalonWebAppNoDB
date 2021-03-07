import Button from "../../../components/Button/Button";
import Game from "../../../models/Game";

interface IGameEnded {
    game: Game
    resetGame: () => void
}

const GameEnded = ({game, resetGame}: IGameEnded) => {  
    const evilWin = game.pointsEvil > game.pointsInnocent

    return(
        <>
            <h1>The game has ended</h1>
            <h2>{evilWin ? 'Evil' : 'Good'} won!</h2>
            <h3>{game.pointsInnocent} - {game.pointsEvil}</h3>
            <Button
                onClick = {resetGame}
            >
                Play Again
            </Button>
        </>
    )
}

export default GameEnded;