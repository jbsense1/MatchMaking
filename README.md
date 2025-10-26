# FIFA Match - Champions League Team Matching System

A web application that matches two players with teams of similar overall rating (OV) for fair Champions League matches in FIFA 23.

## Project Structure

```
fifa-match/
├── client/           # Next.js Frontend
│   ├── src/
│   │   ├── app/      # App router pages
│   │   └── components/ # React components
│   ├── public/       # Static assets
│   └── ...
├── server/           # Express.js Backend
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── routes/   # API routes
│   │   ├── services/ # Business logic
│   │   └── server.ts # Entry point
│   └── ...
└── package.json      # Root package.json
```

## Technologies Used

### Frontend
- **Next.js** - React framework with SSR capabilities
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Fetch API** - Built-in HTTP client for API requests

### Backend
- **Express.js** - Node.js web application framework
- **TypeScript** - Type-safe JavaScript
- **In-memory mock data** - No database required

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install root dependencies:
   ```bash
   npm install
   ```

2. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install server dependencies:
   ```bash
   cd ../server
   npm install
   ```

### Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```env
# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="24h"

# Application
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL="http://localhost:3000"
```

### Running the Application

1. Start the development servers:
   ```bash
   # From the root directory
   npm run dev
   ```

   This will start both the frontend and backend servers concurrently.

2. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## API Endpoints

### Players
- `GET /api/players` - Get all players
- `GET /api/players/:id` - Get player by ID
- `POST /api/players` - Create a new player
- `PUT /api/players/:id` - Update player by ID
- `DELETE /api/players/:id` - Delete player by ID

### Teams
- `GET /api/teams` - Get all teams
- `GET /api/teams/:id` - Get team by ID
- `GET /api/teams/league/:league` - Get teams by league

### Matches
- `GET /api/matches` - Get all matches
- `GET /api/matches/:id` - Get match by ID
- `POST /api/matches` - Create a new match
- `PUT /api/matches/:id` - Update match by ID

### Matchmaking
- `GET /api/matchmaking/suggestions/:player1Id/:player2Id` - Get matchmaking suggestions
- `GET /api/matchmaking/suggestions/:player1Id/:player2Id?championsLeague=true` - Get Champions League only matchmaking suggestions
- `GET /api/matchmaking/teams` - Get all available teams
- `GET /api/matchmaking/players` - Get all players

## Development

### Frontend Development
The frontend is built with Next.js and uses the App Router. Components are located in `client/src/app/` and reusable components in `client/src/components/`.

### Backend Development
The backend is built with Express.js and follows a controller-service pattern:
- Routes define API endpoints
- Controllers handle requests and responses
- Services contain business logic
- Data is stored in-memory (no database required)

## Deployment

### Frontend
Deploy the frontend to Vercel for automatic deployments with GitHub integration.

### Backend
Deploy the backend to platforms like:
- Railway
- Render
- Heroku
- DigitalOcean App Platform

Ensure environment variables are set in the deployment platform.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License
MIT