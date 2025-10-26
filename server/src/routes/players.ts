import { Router, Request, Response } from 'express';

const router = Router();

// Get all players
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all players' });
});

// Get player by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get player with ID: ${id}` });
});

// Create a new player
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a new player', data: req.body });
});

// Update player by ID
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update player with ID: ${id}`, data: req.body });
});

// Delete player by ID
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete player with ID: ${id}` });
});

export default router;