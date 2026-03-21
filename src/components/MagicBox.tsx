import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface MagicBoxProps {
  onNext: () => void;
}

const MagicBox = ({ onNext }: MagicBoxProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="box"
            className="text-center"
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <p className="font-body text-xl text-muted-foreground mb-8">
              I have something special for you...
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              className="text-8xl cursor-pointer"
              style={{ 
                filter: "drop-shadow(0 0 20px hsl(var(--accent) / 0.6))",
                animation: "pulse-glow 2s ease-in-out infinite",
                background: "transparent",
                border: "none",
              }}
              aria-label="Open magic box"
            >
              🎁
            </motion.button>
            <p className="font-display text-2xl text-foreground mt-6">
              Magic Box ✨
            </p>
            <p className="text-muted-foreground text-sm mt-2 font-body">Tap to open</p>
          </motion.div>
        ) : (
          <motion.div
            key="poem"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glow-box max-w-lg w-full text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="text-4xl mb-6">💐</div>
              <div className="poetry-container font-body">
                <p>இவ்வுலகில் ஆயிரம் உறவுகள் இருப்பினும்</p>
                <p>என் மனம் தேடுவது ஏனோ உன்னை,</p>
                <br />
                <p>நட்சத்திரம் நிறைந்த வானம் அழகுதான்,</p>
                <p>மலர்கள் மலரும் பூமியும் அழகுதான்,</p>
                <br />
                <p>ஆனா அவை எல்லாவற்றையும் விட</p>
                <p>என் மனதுகள் ஒலிக்கின்ற உன் பெயர்தான்</p>
                <p>இவ்வுலகில் பேர் அழகு. ✨</p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="btn-love text-lg mt-10"
            >
              There's more 💫
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MagicBox;
