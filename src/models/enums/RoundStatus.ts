import Round from "../Round";

enum RoundStatus {
    SelectingTeam,
    VotingForTeam,
    VotingForExpedition,
    TeamApproved,
    MissionSuccess,
    MissionFailed,
    RoundEnded = -1
}

export default RoundStatus;