import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FinalScreen = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 relative"
    >
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: -30,
                x: Math.random() * window.innerWidth,
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                y: window.innerHeight + 50,
                rotate: Math.random() * 720 - 360,
                opacity: 0,
              }}
              transition={{
                duration: 3.5 + Math.random() * 2.5,
                delay: Math.random() * 1.5,
                ease: "easeOut",
              }}
              className="absolute text-3xl"
            >
              {["🩵", "💙", "✨", "🩷", "🌸", "💐", "🎀", "💫"][i % 8]}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div className="glow-box max-w-md w-full text-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-display text-4xl md:text-5xl text-primary mb-6 glow-text"
          style={{
            textShadow: `
              0 0 10px hsl(var(--accent) / 0.5),
              0 0 20px hsl(var(--accent) / 0.3),
              0 0 30px hsl(var(--accent) / 0.2)
            `,
          }}
        >
          Amutha 🩵🤗
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-muted-foreground font-body text-lg"
        >
          Happy Birthday, Best Friend! 🎂🎉
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-muted-foreground font-body text-sm mt-4"
        >
          Thank you for being an amazing friend 💙
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;
