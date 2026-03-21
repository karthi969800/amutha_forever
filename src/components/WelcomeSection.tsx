import { motion } from "framer-motion";

interface WelcomeSectionProps {
  onNext: () => void;
}

const WelcomeSection = ({ onNext }: WelcomeSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
    >
      <motion.div className="romantic-card max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 20 }}
          className="text-6xl mb-6 inline-block"
        >
          💌
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-4xl md:text-5xl text-foreground mb-4"
        >
          Hey…
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-body text-xl text-muted-foreground mb-8 glow-text"
          style={{
            textShadow: `
              0 0 10px rgba(219, 112, 147, 0.4),
              0 0 15px rgba(219, 112, 147, 0.2)
            `,
          }}
        >
          are you really my Amutha? 💖
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="btn-love text-xl"
        >
          Yes, it's me 🤭
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeSection;
