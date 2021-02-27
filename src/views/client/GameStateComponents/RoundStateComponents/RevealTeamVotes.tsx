import IBasicProps from "../../../../models/IBasicProps";
import GameHubMethods from "../../../../services/GameHubMethods";

const RevealTeamVotes = ({game, me, socket}: IBasicProps) => {
    const nextStep = () => {
        socket.invoke(GameHubMethods.SkipRevealTeamVotes, game.id)
    }

    return(
        <>
            <h1>Waiting for result on screen :O</h1>
            {game.currentPlayer.id === me.id &&
                <button
                    onClick={nextStep}    
                >
                    Continue
                </button>
            }
        </>
    )
}

export default RevealTeamVotes;