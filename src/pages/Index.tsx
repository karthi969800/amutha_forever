import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import FloatingParticles from "@/components/FloatingParticles";
import WelcomeSection from "@/components/WelcomeSection";
import LoveQuestion from "@/components/LoveQuestion";
import NameLanguages from "@/components/NameLanguages";
import MagicBox from "@/components/MagicBox";
import VideoSection from "@/components/VideoSection";
import FinalScreen from "@/components/FinalScreen";

type Section = "welcome" | "question" | "names" | "magic" | "video" | "final";

const getBackgroundClass = (section: Section) => {
  switch (section) {
    case "welcome":
      return "bg-gradient-welcome";
    case "question":
      return "bg-gradient-question";
    case "names":
      return "bg-gradient-names";
    case "magic":
      return "bg-gradient-magic";
    case "video":
      return "bg-gradient-video";
    case "final":
      return "bg-gradient-final";
    default:
      return "";
  }
};

const BackgroundDecorations = ({ section }: { section: Section }) => {
  const decorations = {
    welcome: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Corner */}
        <motion.div
          className="absolute -top-10 -left-10 text-8xl opacity-25"
          animate={{ rotate: 360, scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          💌
        </motion.div>
        {/* Top Right */}
        <motion.div
          className="absolute top-20 right-20 text-6xl opacity-20"
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🌹
        </motion.div>
        {/* Bottom Left */}
        <motion.div
          className="absolute -bottom-5 -left-5 text-7xl opacity-15"
          animate={{ rotate: [0, -360], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          💝
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-10 right-10 text-8xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          ✨
        </motion.div>
        {/* Center Bottom */}
        <motion.div
          className="absolute -bottom-20 left-1/3 text-9xl opacity-10"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          💖
        </motion.div>
        {/* Decorative circles */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-15 mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-12 mix-blend-multiply" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-300 rounded-full blur-2xl opacity-8 mix-blend-multiply" />
      </div>
    ),
    question: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute -top-5 -left-5 text-9xl opacity-20"
          animate={{ rotate: [0, 360], scale: [1, 1.25, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          💕
        </motion.div>
        {/* Top Right */}
        <motion.div
          className="absolute top-10 right-20 text-8xl opacity-18"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          💚
        </motion.div>
        {/* Center Left */}
        <motion.div
          className="absolute top-1/2 left-10 text-7xl opacity-20"
          animate={{ x: [0, 30, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          💗
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          className="absolute -bottom-10 -right-10 text-9xl opacity-15"
          animate={{ scale: [1, 1.3, 1], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          💓
        </motion.div>
        {/* Middle Right */}
        <motion.div
          className="absolute bottom-1/3 right-10 text-8xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          💗
        </motion.div>
        {/* Bokeh circles */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-18 mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-15 mix-blend-multiply" />
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-orange-300 rounded-full blur-2xl opacity-10 mix-blend-multiply" />
      </div>
    ),
    names: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute -top-10 -left-10 text-9xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity }}
        >
          🌍
        </motion.div>
        {/* Top Right */}
        <motion.div
          className="absolute top-10 right-10 text-8xl opacity-18"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🌸
        </motion.div>
        {/* Middle Left */}
        <motion.div
          className="absolute top-1/2 left-20 text-7xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          🌺
        </motion.div>
        {/* Middle Right */}
        <motion.div
          className="absolute top-1/3 right-20 text-8xl opacity-15"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🌼
        </motion.div>
        {/* Bottom Left */}
        <motion.div
          className="absolute -bottom-5 -left-5 text-9xl opacity-15"
          animate={{ x: [0, 30, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          🌷
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-20 right-20 text-8xl opacity-20"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🌻
        </motion.div>
        {/* Bokeh circles */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-18 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-15 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-indigo-300 rounded-full blur-2xl opacity-10 mix-blend-multiply" />
      </div>
    ),
    magic: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute -top-10 -left-10 text-9xl opacity-25"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          ✨
        </motion.div>
        {/* Top Right */}
        <motion.div
          className="absolute top-20 right-20 text-8xl opacity-20"
          animate={{ y: [0, -40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          🎁
        </motion.div>
        {/* Middle Left */}
        <motion.div
          className="absolute top-1/3 left-20 text-9xl opacity-15"
          animate={{ x: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🎀
        </motion.div>
        {/* Middle Right */}
        <motion.div
          className="absolute bottom-1/3 right-10 text-8xl opacity-20"
          animate={{ scale: [1, 1.25, 1], rotate: [0, -360] }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          💫
        </motion.div>
        {/* Bottom Left */}
        <motion.div
          className="absolute -bottom-10 -left-5 text-9xl opacity-18"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🎊
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-20 right-20 text-8xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          🌟
        </motion.div>
        {/* Bokeh circles */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-18 mix-blend-multiply" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-15 mix-blend-multiply" />
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-yellow-300 rounded-full blur-2xl opacity-12 mix-blend-multiply" />
      </div>
    ),
    video: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute -top-5 -left-5 text-9xl opacity-22"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          🎬
        </motion.div>
        {/* Top Right */}
        <motion.div
          className="absolute top-20 right-20 text-8xl opacity-18"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🎥
        </motion.div>
        {/* Middle Left */}
        <motion.div
          className="absolute top-1/2 left-10 text-8xl opacity-20"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🎞️
        </motion.div>
        {/* Middle Right */}
        <motion.div
          className="absolute bottom-1/3 right-10 text-7xl opacity-15"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          📹
        </motion.div>
        {/* Bottom Left */}
        <motion.div
          className="absolute -bottom-10 -left-10 text-9xl opacity-18"
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          🎭
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-20 right-20 text-8xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🎪
        </motion.div>
        {/* Bokeh circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-18 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-15 mix-blend-multiply" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300 rounded-full blur-2xl opacity-12 mix-blend-multiply" />
      </div>
    ),
    final: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute -top-10 -left-10 text-9xl opacity-25"
          animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🩵
        </motion.div>
        {/* Top Right */}
        <motion.div
          className="absolute top-20 right-20 text-8xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          💐
        </motion.div>
        {/* Middle Left */}
        <motion.div
          className="absolute top-1/3 left-10 text-8xl opacity-18"
          animate={{ x: [0, 30, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          💙
        </motion.div>
        {/* Middle Right */}
        <motion.div
          className="absolute top-1/2 right-10 text-7xl opacity-20"
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✨
        </motion.div>
        {/* Bottom Left */}
        <motion.div
          className="absolute -bottom-10 -left-5 text-9xl opacity-20"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🌹
        </motion.div>
        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-20 right-20 text-8xl opacity-20"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          💕
        </motion.div>
        {/* Center decorations */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-7xl opacity-15"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🎉
        </motion.div>
        {/* Bokeh circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 mix-blend-multiply" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-18 mix-blend-multiply" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-300 rounded-full blur-2xl opacity-15 mix-blend-multiply" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-pink-400 rounded-full blur-2xl opacity-12 mix-blend-multiply" />
      </div>
    ),
  };

  return decorations[section] || null;
};

const Index = () => {
  const [section, setSection] = useState<Section>("welcome");
  const [showCountdown, setShowCountdown] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {showCountdown ? (
          <Countdown key="countdown" onComplete={() => setShowCountdown(false)} duration={5} />
        ) : (
          <motion.div
            key={section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative min-h-screen overflow-hidden ${getBackgroundClass(section)}`}
          >
            {/* Animated Background */}
            <BackgroundDecorations section={section} />

            {/* Floating Particles */}
            <FloatingParticles />

          {/* Content */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {section === "welcome" && (
                <WelcomeSection key="welcome" onNext={() => setSection("question")} />
              )}
              {section === "question" && (
                <LoveQuestion key="question" onNext={() => setSection("names")} />
              )}
              {section === "names" && (
                <NameLanguages key="names" onNext={() => setSection("magic")} />
              )}
              {section === "magic" && (
                <MagicBox key="magic" onNext={() => setSection("video")} />
              )}
              {section === "video" && (
                <VideoSection key="video" onNext={() => setSection("final")} />
              )}
              {section === "final" && <FinalScreen key="final" />}
            </AnimatePresence>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
