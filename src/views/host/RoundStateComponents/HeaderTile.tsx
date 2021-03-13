import Game from "../../../models/Game";
import IGameProp from "../../../models/IGameProp";
import "./SelectingTeamHost.css"


const HeaderTile = ({ game }: IGameProp) => {
    return (
        <div className="ScoreTile">
            <div className="ImageContainer">
                <img src="/images/AngelShield.png" alt="Not Found" width="35%" />
                <div className="centered"><h2>{game.pointsInnocent}</h2></div>
            </div>
            <div >
                <img src="/images/CRB.png" alt="" width="60%" />
                <div className="PlayerOrder">
                    {game.players.map((player) => (
                        <p key={player.id + '-next-player'}>{player.name} &emsp;</p>
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