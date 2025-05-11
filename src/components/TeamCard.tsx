
import React from 'react';
import { Card } from "@/components/ui/card";
import { Team } from '@/types/team';

interface TeamCardProps {
  team: Team;
  isSelected: boolean;
  onSelect: () => void;
}

const TeamCard = ({ team, isSelected, onSelect }: TeamCardProps) => {
  const cardStyle = {
    borderColor: isSelected ? team.primaryColor : 'transparent',
    borderWidth: isSelected ? '3px' : '0px',
  };

  return (
    <Card 
      className={`cursor-pointer transition-all hover:scale-105 ${isSelected ? 'ring-4 ring-white/50' : ''}`} 
      style={cardStyle}
      onClick={onSelect}
    >
      <div className="p-4 flex flex-col items-center">
        <div className="text-4xl mb-2">{team.logo}</div>
        <h3 className="font-bold text-xl mb-1">{team.name}</h3>
        <div className="text-sm text-white/70">Formation: {team.formation}</div>
        <div className="mt-2 flex items-center">
          <div 
            className="h-3 w-full rounded-full bg-white/20"
            style={{ maxWidth: '100px' }}
          >
            <div 
              className="h-full rounded-full" 
              style={{ 
                width: `${team.overallRating}%`, 
                backgroundColor: team.primaryColor,
              }}
            ></div>
          </div>
          <span className="ml-2 font-bold">{team.overallRating}</span>
        </div>
        <div className="mt-2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: i < (team.overallRating - 75) / 5 ? team.primaryColor : 'rgba(255,255,255,0.2)'
              }}
            ></div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
