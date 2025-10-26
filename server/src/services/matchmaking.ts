// Matchmaking service for finding equally skilled players

interface Player {
  id: number;
  skillRating: number;
}

interface Team {
  id: number;
  name: string;
  overallRating: number;
  league: string;
  country: string;
}

export class MatchmakingService {
  // Find players with similar skill ratings
  static findMatchingPlayers(players: Player[], targetRating: number, tolerance: number = 5): Player[] {
    return players.filter(player => 
      Math.abs(player.skillRating - targetRating) <= tolerance
    );
  }

  // Match teams with similar overall ratings
  static matchTeams(teams: Team[], targetRating: number, tolerance: number = 3): Team[] {
    return teams.filter(team => 
      Math.abs(team.overallRating - targetRating) <= tolerance
    );
  }

  // Filter teams to only include Champions League 2023-24 participants
  static filterChampionsLeagueTeams(teams: Team[]): Team[] {
    // Teams with "CL" in their name are Champions League participants
    return teams.filter(team => team.name.includes('CL'));
  }

  // Create a fair match between two players
  static createFairMatch(player1: Player, player2: Player, teams: Team[], championsLeagueOnly: boolean = false): { 
    player1Team: Team | null, 
    player2Team: Team | null 
  } {
    // Calculate average skill rating
    const averageRating = (player1.skillRating + player2.skillRating) / 2;
    
    // Filter teams based on Champions League preference
    let filteredTeams = championsLeagueOnly ? this.filterChampionsLeagueTeams(teams) : teams;
    
    // If no teams match the Champions League filter, fall back to all teams
    if (championsLeagueOnly && filteredTeams.length === 0) {
      filteredTeams = teams;
    }
    
    // Find teams that match the average rating
    const matchingTeams = this.matchTeams(filteredTeams, averageRating);
    
    if (matchingTeams.length < 2) {
      return { player1Team: null, player2Team: null };
    }
    
    // Shuffle the matching teams to randomize selection
    const shuffledTeams = [...matchingTeams].sort(() => Math.random() - 0.5);
    
    // Assign different teams to each player (now randomized)
    return {
      player1Team: shuffledTeams[0],
      player2Team: shuffledTeams[1]
    };
  }
}