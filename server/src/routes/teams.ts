import { Router, Request, Response } from 'express';

const router = Router();

// Get all teams
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all teams' });
});

// Get team by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get team with ID: ${id}` });
});

// Get teams by league
router.get('/league/:league', (req: Request, res: Response) => {
  const { league } = req.params;
  res.json({ message: `Get teams in league: ${league}` });
});

export default router;