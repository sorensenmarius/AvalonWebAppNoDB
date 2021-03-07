import IGameProp from "../../../models/IGameProp";

const WaitingForPlayers = ({game}: IGameProp) => {
    return(
        <div className='home-page-background'>
            <h1 style={{paddingTop: '40vh'}}>{game.joinCode}</h1>
            <h2>Waiting for game to start</h2>
        </div>
    )
}

export default WaitingForPlayers;