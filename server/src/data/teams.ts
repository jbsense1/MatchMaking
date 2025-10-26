// FIFA 23 Teams Data - Combined database with Champions League 2023-24 teams and additional top European teams
export const fifaTeams = [
  // Original teams (56 teams)
  { id: 1, name: 'Real Madrid', overallRating: 88, league: 'LaLiga', country: 'Spain' },
  { id: 2, name: 'FC Barcelona', overallRating: 86, league: 'LaLiga', country: 'Spain' },
  { id: 3, name: 'Bayern Munich', overallRating: 89, league: 'Bundesliga', country: 'Germany' },
  { id: 4, name: 'Manchester City', overallRating: 87, league: 'Premier League', country: 'England' },
  { id: 5, name: 'Paris Saint-Germain', overallRating: 88, league: 'Ligue 1', country: 'France' },
  { id: 6, name: 'Liverpool', overallRating: 85, league: 'Premier League', country: 'England' },
  { id: 7, name: 'Chelsea', overallRating: 84, league: 'Premier League', country: 'England' },
  { id: 8, name: 'Manchester United', overallRating: 83, league: 'Premier League', country: 'England' },
  { id: 9, name: 'Juventus', overallRating: 85, league: 'Serie A', country: 'Italy' },
  { id: 10, name: 'AC Milan', overallRating: 84, league: 'Serie A', country: 'Italy' },
  { id: 11, name: 'Inter Milan', overallRating: 86, league: 'Serie A', country: 'Italy' },
  { id: 12, name: 'Ajax', overallRating: 82, league: 'Eredivisie', country: 'Netherlands' },
  { id: 13, name: 'Benfica', overallRating: 81, league: 'Primeira Liga', country: 'Portugal' },
  { id: 14, name: 'Porto', overallRating: 80, league: 'Primeira Liga', country: 'Portugal' },
  { id: 15, name: 'Borussia Dortmund', overallRating: 83, league: 'Bundesliga', country: 'Germany' },
  { id: 16, name: 'Atletico Madrid', overallRating: 84, league: 'LaLiga', country: 'Spain' },
  { id: 17, name: 'Sevilla', overallRating: 81, league: 'LaLiga', country: 'Spain' },
  { id: 18, name: 'RB Leipzig', overallRating: 82, league: 'Bundesliga', country: 'Germany' },
  { id: 19, name: 'Tottenham', overallRating: 82, league: 'Premier League', country: 'England' },
  { id: 20, name: 'Arsenal', overallRating: 83, league: 'Premier League', country: 'England' },
  { id: 21, name: 'Napoli', overallRating: 85, league: 'Serie A', country: 'Italy' },
  { id: 22, name: 'Real Sociedad', overallRating: 80, league: 'LaLiga', country: 'Spain' },
  { id: 23, name: 'PSV Eindhoven', overallRating: 79, league: 'Eredivisie', country: 'Netherlands' },
  { id: 24, name: 'Celtic', overallRating: 77, league: 'Scottish Premiership', country: 'Scotland' },
  
  // Additional LaLiga teams
  { id: 25, name: 'Villarreal', overallRating: 83, league: 'LaLiga', country: 'Spain' },
  { id: 26, name: 'Real Betis', overallRating: 82, league: 'LaLiga', country: 'Spain' },
  { id: 27, name: 'Athletic Club', overallRating: 81, league: 'LaLiga', country: 'Spain' },
  { id: 28, name: 'Real Valladolid', overallRating: 76, league: 'LaLiga', country: 'Spain' },
  
  // Additional Bundesliga teams
  { id: 29, name: 'RB Salzburg', overallRating: 81, league: 'Bundesliga', country: 'Austria' },
  { id: 30, name: 'Eintracht Frankfurt', overallRating: 80, league: 'Bundesliga', country: 'Germany' },
  { id: 31, name: 'Bayer Leverkusen', overallRating: 82, league: 'Bundesliga', country: 'Germany' },
  { id: 32, name: 'VfB Stuttgart', overallRating: 79, league: 'Bundesliga', country: 'Germany' },
  
  // Additional Premier League teams
  { id: 33, name: 'Newcastle United', overallRating: 82, league: 'Premier League', country: 'England' },
  { id: 34, name: 'Aston Villa', overallRating: 80, league: 'Premier League', country: 'England' },
  { id: 35, name: 'Brighton & Hove Albion', overallRating: 79, league: 'Premier League', country: 'England' },
  { id: 36, name: 'West Ham United', overallRating: 78, league: 'Premier League', country: 'England' },
  
  // Additional Serie A teams
  { id: 37, name: 'AS Roma', overallRating: 82, league: 'Serie A', country: 'Italy' },
  { id: 38, name: 'SS Lazio', overallRating: 80, league: 'Serie A', country: 'Italy' },
  { id: 39, name: 'Atalanta', overallRating: 81, league: 'Serie A', country: 'Italy' },
  { id: 40, name: 'Fiorentina', overallRating: 78, league: 'Serie A', country: 'Italy' },
  
  // Additional Ligue 1 teams
  { id: 41, name: 'Olympique Lyon', overallRating: 81, league: 'Ligue 1', country: 'France' },
  { id: 42, name: 'Olympique Marseille', overallRating: 79, league: 'Ligue 1', country: 'France' },
  { id: 43, name: 'AS Monaco', overallRating: 80, league: 'Ligue 1', country: 'France' },
  { id: 44, name: 'LOSC Lille', overallRating: 78, league: 'Ligue 1', country: 'France' },
  
  // Additional Eredivisie teams
  { id: 45, name: 'Feyenoord', overallRating: 80, league: 'Eredivisie', country: 'Netherlands' },
  { id: 46, name: 'AZ Alkmaar', overallRating: 78, league: 'Eredivisie', country: 'Netherlands' },
  
  // Additional Primeira Liga teams
  { id: 47, name: 'Sporting CP', overallRating: 82, league: 'Primeira Liga', country: 'Portugal' },
  { id: 48, name: 'Braga', overallRating: 79, league: 'Primeira Liga', country: 'Portugal' },
  
  // Additional leagues
  { id: 49, name: 'Galatasaray', overallRating: 80, league: 'Süper Lig', country: 'Turkey' },
  { id: 50, name: 'Fenerbahçe', overallRating: 78, league: 'Süper Lig', country: 'Turkey' },
  { id: 51, name: 'SL Benfica', overallRating: 81, league: 'Primeira Liga', country: 'Portugal' },
  { id: 52, name: 'Dynamo Kyiv', overallRating: 79, league: 'Ukrainian Premier League', country: 'Ukraine' },
  { id: 53, name: 'Shakhtar Donetsk', overallRating: 80, league: 'Ukrainian Premier League', country: 'Ukraine' },
  { id: 54, name: 'Club Brugge', overallRating: 78, league: 'Belgian First Division A', country: 'Belgium' },
  { id: 55, name: 'FC Copenhagen', overallRating: 76, league: 'Danish Superliga', country: 'Denmark' },
  { id: 56, name: 'Rangers', overallRating: 77, league: 'Scottish Premiership', country: 'Scotland' },
  
  // Champions League 2023-24 Group Stage Teams (32 teams)
  // Group A
  { id: 57, name: 'Bayern Munich CL', overallRating: 89, league: 'Bundesliga', country: 'Germany' },
  { id: 58, name: 'Copenhagen CL', overallRating: 76, league: 'Danish Superliga', country: 'Denmark' },
  { id: 59, name: 'Galatasaray CL', overallRating: 80, league: 'Süper Lig', country: 'Turkey' },
  { id: 60, name: 'Manchester United CL', overallRating: 83, league: 'Premier League', country: 'England' },
  
  // Group B
  { id: 61, name: 'Arsenal CL', overallRating: 83, league: 'Premier League', country: 'England' },
  { id: 62, name: 'PSV Eindhoven CL', overallRating: 79, league: 'Eredivisie', country: 'Netherlands' },
  { id: 63, name: 'Lens CL', overallRating: 78, league: 'Ligue 1', country: 'France' },
  { id: 64, name: 'Sevilla CL', overallRating: 81, league: 'LaLiga', country: 'Spain' },
  
  // Group C
  { id: 65, name: 'Real Madrid CL', overallRating: 88, league: 'LaLiga', country: 'Spain' },
  { id: 66, name: 'Napoli CL', overallRating: 85, league: 'Serie A', country: 'Italy' },
  { id: 67, name: 'Atletico Madrid CL', overallRating: 84, league: 'LaLiga', country: 'Spain' },
  { id: 68, name: 'Celtic CL', overallRating: 77, league: 'Scottish Premiership', country: 'Scotland' },
  
  // Group D
  { id: 69, name: 'Real Sociedad CL', overallRating: 80, league: 'LaLiga', country: 'Spain' },
  { id: 70, name: 'Inter Milan CL', overallRating: 86, league: 'Serie A', country: 'Italy' },
  { id: 71, name: 'RB Salzburg CL', overallRating: 81, league: 'Bundesliga', country: 'Austria' },
  { id: 72, name: 'Benfica CL', overallRating: 82, league: 'Primeira Liga', country: 'Portugal' },
  
  // Group E
  { id: 73, name: 'Atletico Madrid CL2', overallRating: 84, league: 'LaLiga', country: 'Spain' },
  { id: 74, name: 'Lazio CL', overallRating: 80, league: 'Serie A', country: 'Italy' },
  { id: 75, name: 'Marseille CL', overallRating: 79, league: 'Ligue 1', country: 'France' },
  { id: 76, name: 'Dortmund CL', overallRating: 83, league: 'Bundesliga', country: 'Germany' },
  
  // Group F
  { id: 77, name: 'Paris Saint-Germain CL', overallRating: 88, league: 'Ligue 1', country: 'France' },
  { id: 78, name: 'Newcastle United CL', overallRating: 82, league: 'Premier League', country: 'England' },
  { id: 79, name: 'AC Milan CL', overallRating: 84, league: 'Serie A', country: 'Italy' },
  { id: 80, name: 'Borussia Dortmund CL', overallRating: 83, league: 'Bundesliga', country: 'Germany' },
  
  // Group G
  { id: 81, name: 'Manchester City CL', overallRating: 87, league: 'Premier League', country: 'England' },
  { id: 82, name: 'RB Leipzig CL', overallRating: 82, league: 'Bundesliga', country: 'Germany' },
  { id: 83, name: 'Young Boys CL', overallRating: 76, league: 'Swiss Super League', country: 'Switzerland' },
  { id: 84, name: 'Porto CL', overallRating: 80, league: 'Primeira Liga', country: 'Portugal' },
  
  // Group H
  { id: 85, name: 'Barcelona CL', overallRating: 86, league: 'LaLiga', country: 'Spain' },
  { id: 86, name: 'Shakhtar Donetsk CL', overallRating: 80, league: 'Ukrainian Premier League', country: 'Ukraine' },
  { id: 87, name: 'Antwerp CL', overallRating: 77, league: 'Belgian First Division A', country: 'Belgium' },
  { id: 88, name: 'Brest CL', overallRating: 75, league: 'Ligue 1', country: 'France' },
  
  // Additional Champions League teams from qualifying rounds
  { id: 89, name: 'Feyenoord CL', overallRating: 80, league: 'Eredivisie', country: 'Netherlands' },
  { id: 90, name: 'Sporting CP CL', overallRating: 82, league: 'Primeira Liga', country: 'Portugal' },
  { id: 91, name: 'Union Berlin CL', overallRating: 78, league: 'Bundesliga', country: 'Germany' },
  { id: 92, name: 'Rangers CL', overallRating: 77, league: 'Scottish Premiership', country: 'Scotland' },
  { id: 93, name: 'Crvena Zvezda CL', overallRating: 78, league: 'Serbian SuperLiga', country: 'Serbia' },
  { id: 94, name: 'Braga CL', overallRating: 79, league: 'Primeira Liga', country: 'Portugal' },
  { id: 95, name: 'Maccabi Haifa CL', overallRating: 76, league: 'Israeli Premier League', country: 'Israel' },
  { id: 96, name: 'AEK Athens CL', overallRating: 77, league: 'Super League Greece', country: 'Greece' },
];