import { Router, Request, Response } from 'express';
import { MatchmakingController } from '../controllers/matchmakingController';

const router = Router();

// Get matchmaking suggestions for two players
router.get('/suggestions/:player1Id/:player2Id', MatchmakingController.getMatchSuggestions);

// Get all available teams
router.get('/teams', MatchmakingController.getTeams);

// Get all players
router.get('/players', MatchmakingController.getPlayers);

export default router;