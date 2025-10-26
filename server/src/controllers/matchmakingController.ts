import { Request, Response } from 'express';
import { MatchmakingService } from '../services/matchmaking';
import { fifaTeams } from '../data/teams';

// Mock data - in a real app this would come from a database
const mockPlayers = [
  { id: 1, skillRating: 85 },
  { id: 2, skillRating: 87 },
  { id: 3, skillRating: 90 },
  { id: 4, skillRating: 82 },
];

// Use the full list of FIFA teams with all properties
const mockTeams = fifaTeams.map(team => ({
  id: team.id,
  name: team.name,
  overallRating: team.overallRating,
  league: team.league,
  country: team.country
}));

export class MatchmakingController {
  // Get matchmaking suggestions for two players
  static getMatchSuggestions(req: Request, res: Response) {
    try {
      const { player1Id, player2Id } = req.params;
      // Get the championsLeagueOnly parameter from query string
      const championsLeagueOnly = req.query.championsLeague === 'true';
      
      // Find players by ID
      const player1 = mockPlayers.find(p => p.id === parseInt(player1Id));
      const player2 = mockPlayers.find(p => p.id === parseInt(player2Id));
      
      if (!player1 || !player2) {
        return res.status(404).json({ error: 'Player not found' });
      }
      
      // Create a fair match with optional Champions League filter
      const match = MatchmakingService.createFairMatch(player1, player2, mockTeams, championsLeagueOnly);
      
      if (!match.player1Team || !match.player2Team) {
        return res.status(400).json({ error: 'Could not find suitable teams for a fair match' });
      }
      
      res.json({
        player1: { id: player1.id, skillRating: player1.skillRating },
        player2: { id: player2.id, skillRating: player2.skillRating },
        teams: {
          player1Team: match.player1Team,
          player2Team: match.player2Team
        },
        fairnessRating: Math.abs(match.player1Team.overallRating - match.player2Team.overallRating),
        championsLeagueFilterApplied: championsLeagueOnly
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  // Get all available teams
  static getTeams(req: Request, res: Response) {
    res.json({ teams: mockTeams });
  }
  
  // Get all players
  static getPlayers(req: Request, res: Response) {
    res.json({ players: mockPlayers });
  }
}