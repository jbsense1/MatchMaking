import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import playerRoutes from './routes/players';
import teamRoutes from './routes/teams';
import matchRoutes from './routes/matches';
import matchmakingRoutes from './routes/matchmaking';

const app: Express = express();

// Use PORT from environment variable or default to 3001
const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

// Configure CORS to allow requests from frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/players', playerRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/matchmaking', matchmakingRoutes);

// Health check endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'FIFA Match Backend API', 
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'FIFA Match Backend'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

export default app;