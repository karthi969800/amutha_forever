import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CountdownProps {
  onComplete: () => void;
  duration?: number; // in seconds
}

const Countdown = ({ onComplete, duration = 5 }: CountdownProps) => {
  const [count, setCount] = useState(duration);

  useEffect(() => {
    if (count <= 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300"
    >
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-6xl opacity-30"
          animate={{ y: [0, -30, 0], rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          💙
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-5xl opacity-25"
          animate={{ y: [0, 30, 0], rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          🎉
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-4xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.div>
      </div>

      {/* Main Countdown Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-5xl md:text-6xl text-white mb-8"
          style={{
            textShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          Amutha 🩵🤗
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-white mb-12"
          style={{
            textShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          Get ready for something special...
        </motion.p>

        {/* Countdown Number */}
        <motion.div
          key={count}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="text-9xl md:text-[150px] font-bold text-white mb-8"
          style={{
            textShadow: "0 0 40px rgba(0, 0, 0, 0.3), 0 0 80px rgba(255, 255, 255, 0.2)",
          }}
        >
          {count}
        </motion.div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="mt-8 px-8 py-3 rounded-full font-body font-semibold text-white"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
          }}
        >
          Skip ⏭️
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Countdown;
