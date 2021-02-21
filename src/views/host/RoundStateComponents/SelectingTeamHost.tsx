import Game from "../../../models/Game";

interface ISelectingTeamHost {
    game: Game
}

const SelectingTeamHost = ({game} : ISelectingTeamHost) => {
    return(
        <>
            <h1>{game.currentPlayer.name} is choosing {game.currentRound.requiredPlayers} players</h1>
            {game.currentRound.currentTeam.map(p => (
                <p key={p.id}>{p.name}</p>
            ))}
        </>
    )
}

export default SelectingTeamHost;