import React from "react";
import RoundStatus from "../../models/enums/RoundStatus";
import Game from "../../models/Game";
import RevealExpeditionVote from "./RoundStateComponents/RevealExpeditionVote";
import RevealTeamVotesHost from "./RoundStateComponents/RevealTeamVotesHost";
import SelectingTeamHost from "./RoundStateComponents/SelectingTeamHost";
import VotingForExpeditionHost from "./RoundStateComponents/VotingForExpeditionHost";
import VotingForTeamHost from "./RoundStateComponents/VotingForTeamHost";
import "./HostRoundCss.css"

interface IHostRound {
    game: Game
}

const HostRound = ({ game }: IHostRound) => {
    /*   const currentRoundStatus = game.currentRound.status;
      if (currentRoundStatus === RoundStatus.SelectingTeam)
          return <SelectingTeamHost game={game} />
  
      if (currentRoundStatus === RoundStatus.VotingForTeam)
          return <VotingForTeamHost game={game} />
  
      if (currentRoundStatus === RoundStatus.RevealTeamVote)
          return <RevealTeamVotesHost game={game} />
  
      if (currentRoundStatus === RoundStatus.VotingForExpedition)
          return <VotingForExpeditionHost game={game} />
  
      if (currentRoundStatus === RoundStatus.RevealExpeditionVote)
          return <RevealExpeditionVote game={game} /> */
    return (
        <>
            <div className="BackgroundHolder"></div>
            <div className="HostRoundContent">
                <div className="PreviousRounds">
                    <img src="/images/PR.png" alt="" width="70%" />
                    <div className="PreviousRoundCards Success" >
                        <div className="Leader">
                            Mission Leader: Simon
                        </div>

                        Voting Results: Yes: 3, No: 2
                        Participants: Simon, Johanna, Marius
                    </div>
                    <div className="PreviousRoundCards Failure" >

                    </div>
                    <div className="PreviousRoundCards Failure" >

                    </div>
                </div>
                <div className="ScoreAndMainComp">
                    <div className="ScoreTile">
                        <div className="ImageContainer">
                            <img src="/images/AngelShield.png" alt="Not Found" width="35%" />
                            <div className="centered"><h2>2</h2></div>
                        </div>
                        <img src="/images/CRB.png" alt="" width="40%" />
                        <div className="ImageContainer">
                            <img src="/images/Devil.png" alt="Not Found" height="10%" width="30%" />
                            <div className="centered"><h2>2</h2></div>
                        </div>


                    </div>
                    <div className="MainTile">
                        <SelectingTeamHost />
                    </div>
                </div>
                {/*             <h1>Not yet urgh - HostRound -  {currentRoundStatus} </h1>
 */}    </div>
        </>
    )
}

export default HostRound;