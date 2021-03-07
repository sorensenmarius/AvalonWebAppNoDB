import Game from "../../../models/Game";
import "./SelectingTeamHost.css"

interface ISelectingTeamHost {
    game: Game
}

const SelectingTeamHost = (/* {game} : ISelectingTeamHost */) => {
    return (
        <div className="SelectingTeamMain">
            <h2>Simon is choosing a Team</h2>
            <h3 className="NmrPlayers">3 players</h3>
            <div className="GridContainer">
                <div className="PlayerCard">
                    <img src="/images/playersil.png" alt="" width="92%" />
                    <div className="centeredPlayerName"><h5>Johanna</h5></div>
                </div>
                <div className="PlayerCard">
                    <img src="/images/playesilChosen.png" alt="" width="100%" />
                    <div className="centeredPlayerNameChosen"><h5>Simon</h5></div>

                </div>
            </div>
            {/*  <h1>{game.currentPlayer.name} is choosing {game.currentRound.requiredPlayers} players</h1>
            {game.currentRound.currentTeam.map(p => (
                <p key={p.id}>{p.name}</p>
            ))} */}
        </div>
    )
}

export default SelectingTeamHost;