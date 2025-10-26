// API service for communicating with the backend

// Determine API base URL based on environment
const getApiBaseUrl = (): string => {
  // In production, use the deployed backend URL
  if (process.env.NODE_ENV === 'production') {
    // Replace with your actual deployed backend URL
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-deployed-backend-url.com/api';
  }
  
  // In development, use localhost
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';
};

const API_BASE_URL = getApiBaseUrl();

export interface Player {
  id: number;
  skillRating: number;
}

export interface Team {
  id: number;
  name: string;
  overallRating: number;
  league: string;
  country: string;
}

export interface MatchResult {
  player1: Player;
  player2: Player;
  teams: {
    player1Team: Team;
    player2Team: Team;
  };
  fairnessRating: number;
  championsLeagueFilterApplied?: boolean;
}

class ApiService {
  // Get matchmaking suggestions for two players
  static async getMatchSuggestions(player1Id: number, player2Id: number, championsLeagueOnly: boolean = false): Promise<MatchResult> {
    // Add the championsLeague parameter to the query string
    const queryParams = championsLeagueOnly ? `?championsLeague=true` : '';
    const response = await fetch(`${API_BASE_URL}/matchmaking/suggestions/${player1Id}/${player2Id}${queryParams}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch match suggestions');
    }
    
    return response.json();
  }
  
  // Get all available teams
  static async getTeams(): Promise<Team[]> {
    const response = await fetch(`${API_BASE_URL}/matchmaking/teams`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch teams');
    }
    
    const data = await response.json();
    return data.teams;
  }
  
  // Get all players
  static async getPlayers(): Promise<Player[]> {
    const response = await fetch(`${API_BASE_URL}/matchmaking/players`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    
    const data = await response.json();
    return data.players;
  }
}

export default ApiService;