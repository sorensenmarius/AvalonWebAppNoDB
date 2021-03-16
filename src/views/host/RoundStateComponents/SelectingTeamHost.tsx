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
            <h1 className='selecting-team-header-text'>{game.currentPlayer.name} is choosing a Team</h1>
            <h2 className="NmrPlayers">{game.currentRound.requiredPlayers} players</h2>
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