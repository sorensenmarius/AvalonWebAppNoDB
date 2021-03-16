import AvatarComponent from "avataaars";
import IGameProp from "../../../models/IGameProp";
import { AvatarDefaultSettings } from "../../client/Helpers/Avatars/IAvatar";
import "./SelectingTeamHost.css"


const HeaderTile = ({ game }: IGameProp) => {
    const playersExpanded = game.players.concat(game.players).concat(game.players).slice(game.playerIndex + 1, game.playerIndex + 6)

    return (
        <div className="ScoreTile">
            <div className="ImageContainer">
                <img src="/images/AngelShield.png" alt="Not Found" width="35%" />
                <div className="centered"><h2>{game.pointsInnocent}</h2></div>
            </div>
            <div >
                <h4 style={{marginTop: 0}}>Next five players</h4>
                <div className="PlayerOrder">
                    {playersExpanded.map((player) => (
                        <p 
                            key={player.id + '-next-player'}
                            style={{margin: 0}}
                        >
                            <AvatarComponent
                                style={{height: '50px', width:  '50px'}}
                                {...AvatarDefaultSettings}
                                {...player.avatar}
                            />
                            {player.name}
                        </p>
                    ))}
                </div>
            </div>

            <div className="ImageContainer">
                <img src="/images/Devil.png" alt="Not Found" height="10%" width="30%" />
                <div className="centered"><h2>{game.pointsEvil}</h2></div>
            </div>
        </div>
    )
}

export default HeaderTile;