'use client';

import { useState, useEffect } from 'react';
import ApiService, { Team } from '../../services/apiService';

export default function TeamSelectionPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLeague, setSelectedLeague] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const fetchedTeams = await ApiService.getTeams();
        setTeams(fetchedTeams);
      } catch (err) {
        setError('Failed to load teams. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  // Get unique leagues and countries for filter dropdowns
  const leagues = ['all', ...Array.from(new Set(teams.map(team => team.league))).sort()];
  const countries = ['all', ...Array.from(new Set(teams.map(team => team.country))).sort()];

  // Filter teams based on search term, selected league, and selected country
  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          team.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague = selectedLeague === 'all' || team.league === selectedLeague;
    const matchesCountry = selectedCountry === 'all' || team.country === selectedCountry;
    return matchesSearch && matchesLeague && matchesCountry;
  });

  // Sort teams
  const sortedTeams = [...filteredTeams].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'rating') {
      return b.overallRating - a.overallRating; // Descending order for ratings
    } else if (sortBy === 'league') {
      return a.league.localeCompare(b.league);
    } else if (sortBy === 'country') {
      return a.country.localeCompare(b.country);
    }
    return 0;
  });

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

  // Function to get group information for Champions League teams
  const getGroupInfo = (teamName: string): string => {
    const groups: Record<string, string> = {
      // Group A
      'Bayern Munich': 'Group A',
      'Copenhagen': 'Group A',
      'Galatasaray': 'Group A',
      'Manchester United': 'Group A',
      // Group B
      'Arsenal': 'Group B',
      'PSV Eindhoven': 'Group B',
      'Lens': 'Group B',
      'Sevilla': 'Group B',
      // Group C
      'Real Madrid': 'Group C',
      'Napoli': 'Group C',
      'Atletico Madrid': 'Group C',
      'Celtic': 'Group C',
      // Group D
      'Real Sociedad': 'Group D',
      'Inter Milan': 'Group D',
      'RB Salzburg': 'Group D',
      'Benfica': 'Group D',
      // Group E
      'Lazio': 'Group E',
      'Marseille': 'Group E',
      'Dortmund': 'Group E',
      // Group F
      'Paris Saint-Germain': 'Group F',
      'Newcastle United': 'Group F',
      'AC Milan': 'Group F',
      'Borussia Dortmund': 'Group F',
      // Group G
      'Manchester City': 'Group G',
      'RB Leipzig': 'Group G',
      'Young Boys': 'Group G',
      'Porto': 'Group G',
      // Group H
      'Barcelona': 'Group H',
      'Shakhtar Donetsk': 'Group H',
      'Antwerp': 'Group H',
      'Brest': 'Group H'
    };
    return groups[teamName] || 'Qualifying';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Teams</h1>
          <p className="text-xl text-gray-600 mb-8">Select from official UEFA Champions League 2023-24 teams</p>
          
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Teams</h1>
          <p className="text-xl text-gray-600 mb-8">Select from official UEFA Champions League 2023-24 teams</p>
          
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-2xl mx-auto">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Teams</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Select from official UEFA Champions League 2023-24 teams. Filter by league, country, or search for specific teams.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Teams
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by team name or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="league" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by League
            </label>
            <select
              id="league"
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {leagues.map(league => (
                <option key={league} value={league}>
                  {league === 'all' ? 'All Leagues' : league}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Country
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country === 'all' ? 'All Countries' : country}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Team Name</option>
              <option value="rating">Overall Rating</option>
              <option value="league">League</option>
              <option value="country">Country</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Showing {sortedTeams.length} of {teams.length} teams
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedLeague('all');
              setSelectedCountry('all');
              setSortBy('name');
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {sortedTeams.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No teams found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTeams.map(team => (
            <div 
              key={team.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <h3 className="text-xl font-bold text-center truncate">{team.name}</h3>
              </div>
              
              <div className="p-5">
                <div className="text-center mb-4">
                  <div className="flex justify-center items-center mb-2">
                    <span className="text-3xl mr-2">{getCountryFlag(team.country)}</span>
                    <span className="text-gray-600">{team.country}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {getGroupInfo(team.name)}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-700">Overall Rating</span>
                    <span className="text-xl font-bold text-blue-600">{team.overallRating}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">League</span>
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getLeagueColor(team.league)}`}>
                      {team.league}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}