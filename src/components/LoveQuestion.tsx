import { motion } from "framer-motion";
import { useState, useCallback, useRef } from "react";

interface LoveQuestionProps {
  onNext: () => void;
}

const LoveQuestion = ({ onNext }: LoveQuestionProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [escaped, setEscaped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const runAway = useCallback(() => {
    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 80;
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;
    setNoPos({ x, y });
    setEscaped(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
      ref={containerRef}
    >
      <motion.div className="romantic-card max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-6xl mb-6 inline-block heartbeat-pulse"
        >
          💕
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-foreground mb-4"
        >
          Would you be my favourite forever? 😍
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mb-10 font-body"
        >
          Choose wisely... 😏
        </motion.p>
        <div className="flex gap-6 justify-center items-center relative">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="btn-yes text-xl z-10"
          >
            YES 💚
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: noPos.x, y: noPos.y }}
            transition={{ 
              opacity: { delay: 0.8, duration: 0.6 },
              x: { type: "spring", stiffness: 300, damping: 15 },
              y: { type: "spring", stiffness: 300, damping: 15 }
            }}
            onMouseEnter={runAway}
            onTouchStart={runAway}
            className="btn-no text-xl z-10"
            style={{ position: escaped ? "fixed" : "relative" }}
          >
            NO 😜
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoveQuestion;
