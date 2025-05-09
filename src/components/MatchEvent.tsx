
import React from 'react';
import { Team } from '@/types/team';

interface EventProps {
  event: {
    minute: number;
    type: 'goal' | 'shot' | 'save' | 'foul' | 'corner' | 'possession' | 'half-time' | 'full-time';
    team: 'home' | 'away';
    player?: any;
    description: string;
  };
  homeTeam: Team;
  awayTeam: Team;
}

const MatchEvent = ({ event, homeTeam, awayTeam }: EventProps) => {
  const team = event.team === 'home' ? homeTeam : awayTeam;
  
  const getBgColor = () => {
    switch (event.type) {
      case 'goal':
        return 'bg-green-800/50';
      case 'shot':
        return 'bg-blue-800/30';
      case 'save':
        return 'bg-purple-800/30';
      case 'foul':
        return 'bg-red-800/30';
      case 'corner':
        return 'bg-yellow-800/30';
      case 'half-time':
      case 'full-time':
        return 'bg-gray-800/50';
      default:
        return 'bg-black/20';
    }
  };
  
  const getIcon = () => {
    switch (event.type) {
      case 'goal':
        return '⚽';
      case 'shot':
        return '👟';
      case 'save':
        return '🧤';
      case 'foul':
        return '🟨';
      case 'corner':
        return '🚩';
      case 'half-time':
        return '⏱️';
      case 'full-time':
        return '🏁';
      default:
        return '🔄';
    }
  };
  
  return (
    <div className={`flex items-center gap-3 py-2 px-3 rounded-lg ${getBgColor()} animate-slide-in`}>
      <div className="min-w-[30px] font-mono text-white/70">
        {event.minute}'
      </div>
      <div className="text-xl">
        {getIcon()}
      </div>
      <div>
        {event.description}
      </div>
    </div>
  );
};

export default MatchEvent;
