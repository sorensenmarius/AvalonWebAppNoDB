import Game from "../../../models/Game";
import "./SelectingTeamHost.css"

interface ISelectingTeamHost {
    game: Game
}

const SelectingTeamHost = ({ game }: ISelectingTeamHost) => {
    return (
        <div className="SelectingTeamMain">
            <h2>{game.currentPlayer.name} is choosing a Team</h2>
            <h3 className="NmrPlayers">{game.currentRound.requiredPlayers} players</h3>
            <div className="GridContainer">
                {game.currentRound.currentTeam.map(p => (
                    <div className="host-choose-player-silhouette" key={p.id}>
                        <img src="/images/playersilChosen.png" alt="" width="92%" />
                        <div className="centeredPlayerNameChosen"><h5>{p.name}</h5></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectingTeamHost;