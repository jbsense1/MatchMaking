import { Router, Request, Response } from 'express';

const router = Router();

// Get all matches
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all matches' });
});

// Get match by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get match with ID: ${id}` });
});

// Create a new match
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a new match', data: req.body });
});

// Update match by ID
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update match with ID: ${id}`, data: req.body });
});

export default router;