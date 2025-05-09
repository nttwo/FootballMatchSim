
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HomeScreenProps {
  onStart: () => void;
}

const HomeScreen = ({ onStart }: HomeScreenProps) => {
  return (
    <div className="flex flex-col items-center py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Match Day Simulator</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Choose two teams and watch as they battle it out in a simulated match based on
          player attributes and real-time probability calculations.
        </p>
      </motion.div>
      
      <motion.div 
        className="p-4 bg-white/10 backdrop-blur-sm rounded-lg mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <ul className="text-left list-disc pl-6 space-y-2">
          <li>Choose from popular football teams with real player stats</li>
          <li>Dynamic play-by-play simulation based on player attributes</li>
          <li>Match events determined by complex probability calculations</li>
          <li>Realistic match outcomes based on team strengths and weaknesses</li>
          <li>Comprehensive match summary with statistics</li>
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button 
          onClick={onStart}
          size="lg" 
          className="text-xl px-8 py-6 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 border-2 border-white/20 shadow-lg"
        >
          Start New Match
        </Button>
      </motion.div>
      
      <motion.div 
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="font-bold mb-2">Team Selection</h3>
          <p className="text-white/70">Choose from top Premier League teams with unique attributes.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="font-bold mb-2">Live Match</h3>
          <p className="text-white/70">Watch as events unfold in real-time with dynamic probability.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="font-bold mb-2">Match Analysis</h3>
          <p className="text-white/70">Review detailed stats and match highlights after the game.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeScreen;
