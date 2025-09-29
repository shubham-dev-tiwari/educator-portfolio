import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Animated loading text
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Loading...') return 'Loading';
        if (prev === 'Loading') return 'Loading.';
        if (prev === 'Loading.') return 'Loading..';
        return 'Loading...';
      });
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
        {/* Custom loader */}
        <div className="custom-loader mb-8"></div>
        
        {/* Brand section */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="loading-text text-3xl font-bold mb-2">
            Abhishek Leela Pandey
          </h1>
          <p className="text-white/80 text-lg font-medium mb-1">
            EdTech Leader × AI Filmmaker
          </p>
          <p className="text-white/60 text-sm">
            40 Under 40 Award Winner
          </p>
        </motion.div>

        {/* Loading status */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-white/90 text-base font-medium mb-2">
            {loadingText}
          </p>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#94e2d5] to-[#3498db] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          
          <p className="text-white/60 text-xs mt-2">
            {Math.round(Math.min(progress, 100))}% Complete
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            '100K+ Students',
            '6K+ IIM Converts',
            'AI Film Pioneer',
            '4 Books Published'
          ].map((text, index) => (
            <motion.div
              key={index}
              className="text-[#94e2d5] text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
