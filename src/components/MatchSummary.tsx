
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Team } from '@/types/team';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MatchSummaryProps {
  homeTeam: Team;
  awayTeam: Team;
  events: any[];
  stats: {
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
  };
  onNewMatch: () => void;
}

const MatchSummary = ({ homeTeam, awayTeam, events, stats, onNewMatch }: MatchSummaryProps) => {
  // Get goal events
  const goalEvents = events.filter(event => event.type === 'goal');
  
  // Who won?
  let result;
  if (stats.homeScore > stats.awayScore) {
    result = `${homeTeam.name} wins`;
  } else if (stats.homeScore < stats.awayScore) {
    result = `${awayTeam.name} wins`;
  } else {
    result = "It's a draw";
  }

  // Chart data
  const chartData = {
    labels: ['Possession', 'Shots', 'Shots on Target', 'Corners', 'Fouls'],
    datasets: [
      {
        label: homeTeam.name,
        data: [
          stats.possession, 
          stats.homeShots, 
          stats.homeShotsOnTarget, 
          stats.homeCorners, 
          stats.homeFouls
        ],
        backgroundColor: homeTeam.primaryColor,
      },
      {
        label: awayTeam.name,
        data: [
          100 - stats.possession, 
          stats.awayShots, 
          stats.awayShotsOnTarget, 
          stats.awayCorners, 
          stats.awayFouls
        ],
        backgroundColor: awayTeam.primaryColor,
      }
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2 text-center">Match Summary</h2>
      <div className="text-xl text-center mb-6">{result}</div>
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-black/40 border-none">
          <CardHeader>
            <CardTitle>Match Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ height: "300px" }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/40 border-none">
          <CardHeader>
            <CardTitle>Goal Scorers</CardTitle>
          </CardHeader>
          <CardContent>
            {goalEvents.length > 0 ? (
              <div className="space-y-2">
                {goalEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-2 py-1">
                    <span className="text-lg">⚽</span>
                    <span className="font-medium">{event.player?.name}</span>
                    <span className="text-white/70">{event.minute}'</span>
                    <span className="ml-auto">
                      {event.team === 'home' ? homeTeam.shortName : awayTeam.shortName}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-white/70">
                No goals scored in this match
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-xl font-bold mb-4">Key Statistics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-black/30 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Possession</span>
            <div>
              <span className="font-bold">{stats.possession}%</span>
              <span className="mx-1">-</span>
              <span className="font-bold">{100 - stats.possession}%</span>
            </div>
          </div>
          <Progress value={stats.possession} className="h-2" />
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Shots</span>
            <div>
              <span className="font-bold">{stats.homeShots}</span>
              <span className="mx-1">-</span>
              <span className="font-bold">{stats.awayShots}</span>
            </div>
          </div>
          <Progress 
            value={(stats.homeShots / (stats.homeShots + stats.awayShots || 1)) * 100} 
            className="h-2" 
          />
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Shots on Target</span>
            <div>
              <span className="font-bold">{stats.homeShotsOnTarget}</span>
              <span className="mx-1">-</span>
              <span className="font-bold">{stats.awayShotsOnTarget}</span>
            </div>
          </div>
          <Progress 
            value={(stats.homeShotsOnTarget / (stats.homeShotsOnTarget + stats.awayShotsOnTarget || 1)) * 100} 
            className="h-2" 
          />
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Corners</span>
            <div>
              <span className="font-bold">{stats.homeCorners}</span>
              <span className="mx-1">-</span>
              <span className="font-bold">{stats.awayCorners}</span>
            </div>
          </div>
          <Progress 
            value={(stats.homeCorners / (stats.homeCorners + stats.awayCorners || 1)) * 100} 
            className="h-2" 
          />
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button onClick={onNewMatch} className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
          Play Another Match
        </Button>
      </div>
    </div>
  );
};

export default MatchSummary;
