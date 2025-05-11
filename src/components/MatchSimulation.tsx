
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Team, Player } from '@/types/team';
import MatchEvent from './MatchEvent';

interface MatchSimulationProps {
  homeTeam: Team;
  awayTeam: Team;
  onMatchEnd: (events: any[], stats: any) => void;
}

interface MatchStats {
  homeScore: number;
  awayScore: number;
  possession: number;
  homeShots: number;
  awayShots: number;
  homeShotsOnTarget: number;
  awayShotsOnTarget: number;
  homeCorners: number;
  awayCorners: number;
  homeFouls: number;
  awayFouls: number;
}

interface EventData {
  minute: number;
  type: 'goal' | 'shot' | 'save' | 'foul' | 'corner' | 'possession' | 'half-time' | 'full-time';
  team: 'home' | 'away';
  player?: Player;
  description: string;
}

const MatchSimulation = ({ homeTeam, awayTeam, onMatchEnd }: MatchSimulationProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [minute, setMinute] = useState(0);
  const [events, setEvents] = useState<EventData[]>([]);
  const [stats, setStats] = useState<MatchStats>({
    homeScore: 0,
    awayScore: 0,
    possession: 50,
    homeShots: 0,
    awayShots: 0,
    homeShotsOnTarget: 0,
    awayShotsOnTarget: 0,
    homeCorners: 0,
    awayCorners: 0,
    homeFouls: 0,
    awayFouls: 0,
  });

  const startMatch = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const pauseMatch = () => {
    setIsPaused(!isPaused);
  };

  const endMatch = () => {
    setIsPlaying(false);
    addEvent({
      minute,
      type: 'full-time',
      team: 'home',
      description: `Full time! Final score: ${homeTeam.name} ${stats.homeScore} - ${stats.awayScore} ${awayTeam.name}`
    });
    setTimeout(() => {
      onMatchEnd(events, stats);
    }, 2000);
  };

  const addEvent = (event: EventData) => {
    setEvents(prevEvents => [...prevEvents, event]);
  };

  const updateStats = (newStats: Partial<MatchStats>) => {
    setStats(prevStats => ({
      ...prevStats,
      ...newStats
    }));
  };

  const generateEvent = (currentMinute: number) => {
    // Skip events at certain minutes for natural flow
    if (currentMinute % 3 !== 0) return;

    // Define probabilities based on team ratings
    const homePossessionProb = 0.5 + (homeTeam.overallRating - awayTeam.overallRating) * 0.005;
    
    // Determine which team has possession
    const homeHasPossession = Math.random() < homePossessionProb;
    const attackingTeam = homeHasPossession ? homeTeam : awayTeam;
    const defendingTeam = homeHasPossession ? awayTeam : homeTeam;
    const teamType = homeHasPossession ? 'home' : 'away';
    
    // Update possession stats
    const newPossession = Math.floor(homePossessionProb * 100);
    updateStats({ possession: newPossession });
    
    // Get random players from each team
    const attacker = attackingTeam.players.find(p => p.position === 'FWD') || 
                     attackingTeam.players[Math.floor(Math.random() * attackingTeam.players.length)];
    const defender = defendingTeam.players.find(p => p.position === 'DEF') || 
                     defendingTeam.players[Math.floor(Math.random() * defendingTeam.players.length)];
    const goalkeeper = defendingTeam.players.find(p => p.position === 'GK') || defendingTeam.players[0];
    
    // Generate random event
    const eventChance = Math.random();
    
    if (eventChance < 0.05) {
      // Foul
      const team = teamType;
      const foulChance = Math.random() * 100;
      if (team === 'home') {
        updateStats({ homeFouls: stats.homeFouls + 1 });
      } else {
        updateStats({ awayFouls: stats.awayFouls + 1 });
      }
      
      addEvent({
        minute: currentMinute,
        type: 'foul',
        team,
        player: defender,
        description: `${defender.name} commits a foul on ${attacker.name}.`
      });
    } else if (eventChance < 0.15) {
      // Shot attempt
      const shotSuccessBase = (attacker.attributes.shooting + attacker.attributes.technique) / 2;
      const defenseStrength = (defender.attributes.defending + defender.attributes.tackling) / 2;
      
      // Calculate shot success probability (0-100)
      const shotSuccessProb = Math.max(20, Math.min(90, shotSuccessBase - defenseStrength / 3 + 20));
      
      if (teamType === 'home') {
        updateStats({ homeShots: stats.homeShots + 1 });
      } else {
        updateStats({ awayShots: stats.awayShots + 1 });
      }
      
      // Check if shot is on target
      if (Math.random() * 100 < shotSuccessProb) {
        // Shot on target
        if (teamType === 'home') {
          updateStats({ homeShotsOnTarget: stats.homeShotsOnTarget + 1 });
        } else {
          updateStats({ awayShotsOnTarget: stats.awayShotsOnTarget + 1 });
        }
        
        // Calculate goal probability
        const keeperSkill = goalkeeper.attributes.goalkeeping || 75;
        const goalProb = Math.max(10, Math.min(80, shotSuccessProb - keeperSkill / 2 + 20));
        
        if (Math.random() * 100 < goalProb) {
          // Goal!
          if (teamType === 'home') {
            updateStats({ homeScore: stats.homeScore + 1 });
          } else {
            updateStats({ awayScore: stats.awayScore + 1 });
          }
          
          addEvent({
            minute: currentMinute,
            type: 'goal',
            team: teamType,
            player: attacker,
            description: `GOAL! ${attacker.name} scores for ${attackingTeam.name}!`
          });
        } else {
          // Save
          addEvent({
            minute: currentMinute,
            type: 'save',
            team: teamType === 'home' ? 'away' : 'home',
            player: goalkeeper,
            description: `${goalkeeper.name} makes a save from ${attacker.name}'s shot.`
          });
        }
      } else {
        // Shot off target
        addEvent({
          minute: currentMinute,
          type: 'shot',
          team: teamType,
          player: attacker,
          description: `${attacker.name} shoots but it goes wide.`
        });
        
        // Check for corner
        if (Math.random() < 0.4) {
          if (teamType === 'home') {
            updateStats({ homeCorners: stats.homeCorners + 1 });
          } else {
            updateStats({ awayCorners: stats.awayCorners + 1 });
          }
          
          addEvent({
            minute: currentMinute,
            type: 'corner',
            team: teamType,
            description: `Corner kick for ${attackingTeam.name}.`
          });
        }
      }
    } else if (eventChance < 0.25) {
      // Possession update
      addEvent({
        minute: currentMinute,
        type: 'possession',
        team: teamType,
        player: attackingTeam.players[Math.floor(Math.random() * attackingTeam.players.length)],
        description: `${attackingTeam.name} are building an attack through the middle.`
      });
    }
    
    // Add half-time event
    if (currentMinute === 45) {
      addEvent({
        minute: 45,
        type: 'half-time',
        team: 'home', // Neutral event
        description: `Half time! Score: ${homeTeam.name} ${stats.homeScore} - ${stats.awayScore} ${awayTeam.name}`
      });
    }
  };

  useEffect(() => {
    if (!isPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      if (minute >= 90) {
        clearInterval(interval);
        endMatch();
        return;
      }
      
      setMinute(prevMinute => {
        const newMinute = prevMinute + 1;
        generateEvent(newMinute);
        return newMinute;
      });
    }, 800);
    
    return () => clearInterval(interval);
  }, [isPlaying, isPaused, minute, homeTeam, awayTeam]);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-black/30 p-4 rounded-lg">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="text-lg font-medium">{homeTeam.name}</h3>
          <div 
            className="w-4 h-4 rounded-full mt-1" 
            style={{ backgroundColor: homeTeam.primaryColor }}
          ></div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold">
            {stats.homeScore}
          </div>
          <div className="text-2xl">
            -
          </div>
          <div className="text-4xl font-bold">
            {stats.awayScore}
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-medium">{awayTeam.name}</h3>
          <div 
            className="w-4 h-4 rounded-full mt-1" 
            style={{ backgroundColor: awayTeam.primaryColor }}
          ></div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span>Kick Off</span>
          <span className="font-bold">{minute}'</span>
          <span>Full Time</span>
        </div>
        <Progress value={(minute / 90) * 100} className="h-2" />
      </div>
      
      <div className="bg-black/30 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-3">
          <div>Possession</div>
          <div className="flex items-center">
            <span className="font-bold">{stats.possession}%</span>
            <span className="mx-2">-</span>
            <span className="font-bold">{100 - stats.possession}%</span>
          </div>
        </div>
        <Progress value={stats.possession} className="h-2" />
      </div>
      
      <div className="flex justify-around mb-6">
        <div>
          <div className="text-center mb-2">Shots</div>
          <div className="flex gap-4 justify-center">
            <span className="font-bold">{stats.homeShots}</span>
            <span>-</span>
            <span className="font-bold">{stats.awayShots}</span>
          </div>
        </div>
        <div>
          <div className="text-center mb-2">On Target</div>
          <div className="flex gap-4 justify-center">
            <span className="font-bold">{stats.homeShotsOnTarget}</span>
            <span>-</span>
            <span className="font-bold">{stats.awayShotsOnTarget}</span>
          </div>
        </div>
        <div>
          <div className="text-center mb-2">Corners</div>
          <div className="flex gap-4 justify-center">
            <span className="font-bold">{stats.homeCorners}</span>
            <span>-</span>
            <span className="font-bold">{stats.awayCorners}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mb-8">
        {!isPlaying ? (
          <Button onClick={startMatch} className="bg-green-600 hover:bg-green-700">
            Start Match
          </Button>
        ) : (
          <>
            <Button onClick={pauseMatch} className="bg-amber-600 hover:bg-amber-700">
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button onClick={endMatch} className="bg-red-600 hover:bg-red-700">
              End Match
            </Button>
          </>
        )}
      </div>
      
      <div className="bg-black/20 rounded-lg p-4 max-h-96 overflow-y-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Match Events</h3>
        {events.length === 0 ? (
          <p className="text-center text-white/70">Press "Start Match" to begin the simulation</p>
        ) : (
          <div className="space-y-2">
            {events.map((event, index) => (
              <MatchEvent 
                key={index} 
                event={event} 
                homeTeam={homeTeam}
                awayTeam={awayTeam}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchSimulation;
