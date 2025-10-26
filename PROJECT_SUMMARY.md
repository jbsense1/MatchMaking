# FIFA Match - Project Summary

## Overview
FIFA Match is a web application that enables fair team matching for FIFA 23 Champions League matches. The system pairs two players with teams of similar overall rating (OV) to ensure balanced and competitive gameplay.

## Architecture
The application follows a modern full-stack architecture:

### Frontend (Client)
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **HTTP Client**: Fetch API
- **Deployment**: Vercel

### Backend (Server)
- **Framework**: Express.js with TypeScript
- **Data Storage**: In-memory mock data (no database required)
- **Authentication**: JWT
- **Deployment**: Railway/Render

## Features Implemented

### 1. Player Management
- Player registration and authentication
- Skill rating system
- Player profiles

### 2. Team Database
- Comprehensive FIFA 23 Champions League teams database
- Team overall ratings (OV)
- League and country information

### 3. Matchmaking System
- Fair team matching algorithm
- Skill-based player pairing
- Team assignment based on overall ratings
- Fairness rating calculation
- Champions League team filtering

### 4. Match Management
- Match creation and tracking
- Team assignments
- Match status management

## API Endpoints

### Players
- `GET /api/players` - Retrieve all players
- `GET /api/players/:id` - Retrieve specific player
- `POST /api/players` - Create new player
- `PUT /api/players/:id` - Update player
- `DELETE /api/players/:id` - Delete player

### Teams
- `GET /api/teams` - Retrieve all teams
- `GET /api/teams/:id` - Retrieve specific team
- `GET /api/teams/league/:league` - Retrieve teams by league

### Matches
- `GET /api/matches` - Retrieve all matches
- `GET /api/matches/:id` - Retrieve specific match
- `POST /api/matches` - Create new match
- `PUT /api/matches/:id` - Update match
- `DELETE /api/matches/:id` - Delete match

### Matchmaking
- `GET /api/matchmaking/suggestions/:player1Id/:player2Id` - Get matchmaking suggestions
- `GET /api/matchmaking/suggestions/:player1Id/:player2Id?championsLeague=true` - Get Champions League only matchmaking suggestions
- `GET /api/matchmaking/teams` - Retrieve all available teams
- `GET /api/matchmaking/players` - Retrieve all players

## Data Structure

### Player (Mock Data)
- id (Int)
- username (String)
- email (String)
- password (String)
- skillRating (Int)

### Team (Mock Data)
- id (Int)
- name (String)
- overallRating (Int)
- league (String)
- country (String)

### Match (Mock Data)
- id (Int)
- status (String) - pending, ongoing, completed
- winnerId (Int, Optional)

## Matchmaking Algorithm

The system uses a fairness-based matching algorithm:

1. Calculate average skill rating of both players
2. Find teams with overall ratings close to this average
3. Assign different teams to each player
4. Calculate fairness rating (difference in team ratings)
5. Optional: Filter to Champions League teams only

## Environment Variables

### Backend (.env)
```env
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="24h"
PORT=3001
NODE_ENV=development
FRONTEND_URL="http://localhost:3000"
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
```

## Development Workflow

1. Install dependencies:
   ```bash
   npm run postinstall
   ```

2. Run development servers:
   ```bash
   npm run dev
   ```

## Deployment

### Frontend
Deploy to Vercel with environment variables configured.

### Backend
Deploy to Railway/Render with environment variables configured.

## Future Enhancements

1. Real-time matchmaking queue
2. Tournament bracket system
3. Player statistics and analytics
4. Team customization options
5. Mobile application
6. Social features (friends, chat)
7. Leaderboards
8. Match replay system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License
MIT