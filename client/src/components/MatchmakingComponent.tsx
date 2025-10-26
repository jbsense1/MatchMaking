'use client';

import { useState } from 'react';
import ApiService, { MatchResult } from '../services/apiService';

// Function to get flag emoji based on country
const getCountryFlag = (country: string): string => {
  const flags: Record<string, string> = {
    'Spain': '🇪🇸',
    'Germany': '🇩🇪',
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'France': '🇫🇷',
    'Italy': '🇮🇹',
    'Netherlands': '🇳🇱',
    'Portugal': '🇵🇹',
    'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'Turkey': '🇹🇷',
    'Denmark': '🇩🇰',
    'Austria': '🇦🇹',
    'Ukraine': '🇺🇦',
    'Belgium': '🇧🇪',
    'Switzerland': '🇨🇭',
    'Serbia': '🇷🇸',
    'Israel': '🇮🇱',
    'Greece': '🇬🇷'
  };
  return flags[country] || '🌍';
};

// Function to get league badge color
const getLeagueColor = (league: string): string => {
  const colors: Record<string, string> = {
    'LaLiga': 'bg-red-500',
    'Bundesliga': 'bg-yellow-500',
    'Premier League': 'bg-blue-500',
    'Ligue 1': 'bg-purple-500',
    'Serie A': 'bg-green-500',
    'Eredivisie': 'bg-orange-500',
    'Primeira Liga': 'bg-pink-500',
    'Scottish Premiership': 'bg-teal-500',
    'Danish Superliga': 'bg-indigo-500',
    'Süper Lig': 'bg-red-600',
    'Swiss Super League': 'bg-red-700',
    'Belgian First Division A': 'bg-blue-600',
    'Ukrainian Premier League': 'bg-yellow-600',
    'Serbian SuperLiga': 'bg-red-800',
    'Israeli Premier League': 'bg-blue-700',
    'Super League Greece': 'bg-blue-800'
  };
  return colors[league] || 'bg-gray-500';
};

export default function MatchmakingComponent() {
  const [player1Id, setPlayer1Id] = useState<string>('1');
  const [player2Id, setPlayer2Id] = useState<string>('2');
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [championsLeagueFilter, setChampionsLeagueFilter] = useState<boolean>(false);

  const findMatch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Pass the championsLeagueFilter parameter to the API service
      const result = await ApiService.getMatchSuggestions(
        parseInt(player1Id), 
        parseInt(player2Id),
        championsLeagueFilter
      );
      setMatchResult(result);
    } catch (err) {
      setError('Failed to find a match. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Team Card Component
  const TeamCard = ({ team, player, playerLabel }: { team: any; player: any; playerLabel: string }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <h3 className="text-xl font-bold text-center">{playerLabel}</h3>
        <p className="text-center text-sm opacity-90">Player ID: {player.id}</p>
      </div>
      
      <div className="p-5">
        <div className="text-center mb-4">
          <h4 className="text-2xl font-bold text-gray-800">{team.name}</h4>
          <div className="flex justify-center items-center mt-2">
            <span className="text-2xl mr-2">{getCountryFlag(team.country)}</span>
            <span className="text-gray-600">{team.country}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
            <span className="font-medium text-gray-700">Overall Rating</span>
            <span className="text-xl font-bold text-blue-600">{team.overallRating}</span>
          </div>
          
          <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
            <span className="font-medium text-gray-700">Player Skill</span>
            <span className="text-xl font-bold text-green-600">{player.skillRating}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">League</span>
            <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getLeagueColor(team.league)}`}>
              {team.league}
            </span>
          </div>
          
          {/* Show Champions League indicator if applicable */}
          {team.name.includes('CL') && (
            <div className="flex justify-center items-center bg-yellow-50 p-2 rounded-lg">
              <span className="font-medium text-yellow-700">🏆 Champions League 2023-24</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">FIFA Matchmaking</h2>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="player1" className="block text-sm font-medium text-gray-700 mb-1">
              Player 1 ID
            </label>
            <input
              type="number"
              id="player1"
              value={player1Id}
              onChange={(e) => setPlayer1Id(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="1"
            />
          </div>
          
          <div>
            <label htmlFor="player2" className="block text-sm font-medium text-gray-700 mb-1">
              Player 2 ID
            </label>
            <input
              type="number"
              id="player2"
              value={player2Id}
              onChange={(e) => setPlayer2Id(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="1"
            />
          </div>
        </div>
        
        {/* Champions League Filter */}
        <div className="mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={championsLeagueFilter}
              onChange={(e) => setChampionsLeagueFilter(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-5 w-5"
            />
            <span className="ml-2 text-gray-700 font-medium">
              🏆 Champions League 2023-24 Teams Only
            </span>
          </label>
          <p className="text-sm text-gray-600 mt-1">
            Filter matches to only include teams that participated in the 2023-24 UEFA Champions League
          </p>
        </div>
        
        <button
          onClick={findMatch}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Finding Match...
            </div>
          ) : 'Find Fair Match'}
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-8" role="alert">
          <p>{error}</p>
        </div>
      )}
      
      {matchResult && (
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Match Result</h3>
          
          {/* Show filter status */}
          <div className="mb-6 text-center">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              matchResult.championsLeagueFilterApplied 
                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' 
                : 'bg-gray-100 text-gray-800 border border-gray-300'
            }`}>
              <span>{matchResult.championsLeagueFilterApplied ? '🏆 Champions League Filter: ON' : '📋 All Teams Available'}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <TeamCard 
              team={matchResult.teams.player1Team} 
              player={matchResult.player1} 
              playerLabel="Player 1" 
            />
            
            <TeamCard 
              team={matchResult.teams.player2Team} 
              player={matchResult.player2} 
              playerLabel="Player 2" 
            />
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Match Fairness</h4>
            <p className="text-lg">
              Fairness Rating: <span className="font-bold text-green-600">{matchResult.fairnessRating}</span> (lower is better)
            </p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.max(0, Math.min(100, 100 - matchResult.fairnessRating * 10))}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {matchResult.fairnessRating === 0 ? 'Perfectly balanced!' : 
               matchResult.fairnessRating <= 2 ? 'Very fair match' : 
               matchResult.fairnessRating <= 4 ? 'Fair match' : 'Somewhat balanced'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}