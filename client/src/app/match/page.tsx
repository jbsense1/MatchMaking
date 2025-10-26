'use client';

import MatchmakingComponent from '../../components/MatchmakingComponent';

export default function MatchPlayersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Match Players</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find equally skilled opponents for a fair Champions League match. Enter player IDs to generate balanced team assignments.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
        <MatchmakingComponent />
      </div>
    </div>
  );
}