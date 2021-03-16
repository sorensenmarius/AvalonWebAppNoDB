import AvatarComponent from "avataaars";
import Game from "../../../models/Game";
import { AvatarDefaultSettings } from "../../client/Helpers/Avatars/IAvatar";
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
                        <AvatarComponent
                            style={{height: '90%'}}
                            {...AvatarDefaultSettings}
                            {...p.avatar}
                        />
                        <div className="centeredPlayerNameChosen"><h5>{p.name}</h5></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectingTeamHost;