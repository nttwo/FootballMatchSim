
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Team } from '@/types/team';
import { teams } from '@/data/teams';
import TeamCard from './TeamCard';

interface TeamSelectionProps {
  onTeamsSelected: (teams: [Team, Team]) => void;
}

const TeamSelection = ({ onTeamsSelected }: TeamSelectionProps) => {
  const [homeTeam, setHomeTeam] = useState<Team | null>(null);
  const [awayTeam, setAwayTeam] = useState<Team | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTeamSelect = (team: Team, isHome: boolean) => {
    if (isHome) {
      setHomeTeam(team);
      // Prevent selecting the same team for both home and away
      if (awayTeam && team.id === awayTeam.id) {
        setAwayTeam(null);
      }
    } else {
      setAwayTeam(team);
      // Prevent selecting the same team for both home and away
      if (homeTeam && team.id === homeTeam.id) {
        setHomeTeam(null);
      }
    }
    setError(null);
  };

  const handleStartMatch = () => {
    if (!homeTeam || !awayTeam) {
      setError("Please select both home and away teams");
      return;
    }
    onTeamsSelected([homeTeam, awayTeam]);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Select Teams</h2>
      
      {error && (
        <div className="bg-red-500/50 text-white p-3 rounded-lg mb-4 text-center">
          {error}
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-center">Home Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teams.map(team => (
              <TeamCard 
                key={`home-${team.id}`}
                team={team}
                isSelected={homeTeam?.id === team.id}
                onSelect={() => handleTeamSelect(team, true)}
              />
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-center">Away Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teams.map(team => (
              <TeamCard 
                key={`away-${team.id}`}
                team={team}
                isSelected={awayTeam?.id === team.id}
                onSelect={() => handleTeamSelect(team, false)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleStartMatch} 
          className="px-8 py-6 text-xl bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900"
          disabled={!homeTeam || !awayTeam}
        >
          Start Match
        </Button>
      </div>
      
      <div className="flex justify-center mt-8">
        {homeTeam && awayTeam && (
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Match Preview</h3>
            <div className="flex items-center justify-center gap-4 text-2xl">
              <span className="font-bold">{homeTeam.name}</span>
              <span className="text-white/70">vs</span>
              <span className="font-bold">{awayTeam.name}</span>
            </div>
            <p className="mt-2 text-white/70">
              Home team overall rating: {homeTeam.overallRating} | 
              Away team overall rating: {awayTeam.overallRating}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSelection;
