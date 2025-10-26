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

Create a `.env.local` file in the `client/` directory with:

```env
# Development API URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
```

### Running the Application Locally

1. Start the development servers:
   ```bash
   # From the root directory
   npm run dev
   ```

   This will start both the frontend and backend servers concurrently.

2. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Deployment Instructions

### Option 1: Deploy to Render (Recommended - Single Platform)

Render allows you to deploy both frontend and backend services in one project.

1. **Sign up for Render** at [render.com](https://render.com/)
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure the service**:
   - **Name**: Choose a name for your service
   - **Environment**: Node
   - **Build Command**: `npm run render:build`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (for testing)
5. **Add environment variables**:
   ```
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=24h
   PORT=3001
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-service.onrender.com
   NEXT_PUBLIC_API_BASE_URL=https://your-backend-service.onrender.com/api
   ```
6. **Deploy the service**

### Option 2: Frontend Deployment (Vercel)

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the following environment variable in Vercel:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-backend-service.onrender.com/api
   ```
4. Set the build command to: `npm run build`
5. Set the output directory to: `.next`

### Option 3: Backend Deployment (Railway.app)

1. Create an account at [Railway.app](https://railway.app/)
2. Create a new project
3. Connect your GitHub repository
4. Railway will automatically detect it's a Node.js project
5. Configure the following environment variables in Railway:
   ```
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=24h
   PORT=3001
   NODE_ENV=production
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```
6. Railway will automatically use the build command: `npm install`
7. Railway will automatically use the start command: `npm start`
8. Deploy the application
9. Once deployed, get your Railway app URL (something like `https://your-app-name.up.railway.app`)

### Updating Frontend After Backend Deployment

After deploying your backend:

1. Update the `NEXT_PUBLIC_API_BASE_URL` environment variable in your frontend deployment settings:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-backend-service-url/api
   ```
2. Redeploy your frontend application

### Alternative Backend Deployment Options

You can also deploy the backend to:
- **Heroku**: Use the Heroku CLI or GitHub integration
- **DigitalOcean App Platform**: Create an app and connect your repository
- **Any cloud provider that supports Node.js applications**

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

## Troubleshooting

### "Failed to find a match" on mobile devices or other networks
This issue occurs when accessing the deployed frontend from a device while the backend is still running locally. To fix this:

1. Deploy your backend to a cloud service (Render, Railway, etc.)
2. Update the `NEXT_PUBLIC_API_BASE_URL` environment variable to point to your deployed backend
3. Redeploy your frontend application

### CORS Issues
If you encounter CORS errors, ensure that:
1. The `FRONTEND_URL` environment variable in your backend matches your frontend URL
2. You're using the correct protocol (http vs https)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License
MIT