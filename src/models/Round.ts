import RoundStatus from "./enums/RoundStatus";
import Player from "./Player";

interface Round {
    id: string,
    failedTeams: number,
    currentTeam: Player[],
    teamString: string,
    status: RoundStatus,
    votesForTeam: number,
    votesAgainstTeam: number,
    votesForExpedition: number,
    votesAgainstExpedition: number,
    requiredPlayers: number
}

export default Round;