import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface NameLanguagesProps {
  onNext: () => void;
}

const names = [
  { lang: "English", name: "Happy Birthday Amutha", style: "font-display" },
  { lang: "Tamil", name: "பிறந்தநாள் வாழ்த்துக்கள் அமுதா", style: "font-body font-bold" },
  { lang: "Hindi", name: "जन्मदिन मुबारक अमुथा", style: "font-body font-bold" },
  { lang: "Telugu", name: "పుట్టినరోజు శుభాకాంక్షలు అముత", style: "font-body font-bold" },
  { lang: "Kannada", name: "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು ಅಮುತ", style: "font-body font-bold" },
  { lang: "Malayalam", name: "ജന്മദിനാശംസകൾ അമുത", style: "font-body font-bold" },
  { lang: "Bengali", name: "শুভ জন্মদিন অমুথা", style: "font-body font-bold" },
  { lang: "Gujarati", name: "જન્મદિવસની શુભકામના અમુથા", style: "font-body font-bold" },
  { lang: "Punjabi", name: "ਜਨਮਦਿਨ ਮੁਬਾਰਕ ਅਮੁਥਾ", style: "font-body font-bold" },
  { lang: "Marathi", name: "वाढदिवसाच्या शुभेच्छा अमुथा", style: "font-body font-bold" },
  { lang: "Odia", name: "ଜନ୍ମଦିନ ଶୁଭେଚ୍ଛା ଅମୁଥା", style: "font-body font-bold" },
  { lang: "Sinhala", name: "සුභ උපන්දිනයක් අමුතා", style: "font-body font-bold" },
  { lang: "Japanese", name: "お誕生日おめでとう アムタ", style: "font-body font-bold" },
  { lang: "Korean", name: "생일 축하해 아무타", style: "font-body font-bold" },
  { lang: "Chinese", name: "生日快乐 阿穆塔", style: "font-body font-bold" },
  { lang: "Thai", name: "สุขสันต์วันเกิด อมุทา", style: "font-body font-bold" },
  { lang: "Khmer", name: "សួស្តីថ្ងៃកំណើត អមុថា", style: "font-body font-bold" },
  { lang: "Lao", name: "ສຸກສັນວັນເກີດ ອະມຸທາ", style: "font-body font-bold" },
  { lang: "Burmese", name: "မွေးနေ့မှာ ပျော်ရွှင်ပါ အမုသ", style: "font-body font-bold" },
  { lang: "Arabic", name: "عيد ميلاد سعيد أموثا", style: "font-body font-bold" },
  { lang: "Urdu", name: "سالگرہ مبارک اموتھا", style: "font-body font-bold" },
  { lang: "Persian", name: "تولدت مبارک آموتا", style: "font-body font-bold" },
  { lang: "Hebrew", name: "יום הולדת שמח אמותה", style: "font-body font-bold" },
  { lang: "Russian", name: "С днём рождения Амута", style: "font-display" },
  { lang: "Greek", name: "Χρόνια πολλά Αμουθα", style: "font-display" },
  { lang: "Georgian", name: "გილოცავ დაბადების დღეს ამუთა", style: "font-body font-bold" },
  { lang: "French", name: "Joyeux anniversaire Amutha", style: "font-display" },
  { lang: "Spanish", name: "Feliz cumpleaños Amutha", style: "font-display" },
  { lang: "German", name: "Alles Gute zum Geburtstag Amutha", style: "font-display" },
  { lang: "Italian", name: "Buon compleanno Amutha", style: "font-display" },
  { lang: "Portuguese", name: "Feliz aniversário Amutha", style: "font-display" },
  { lang: "Turkish", name: "Doğum günün kutlu olsun Amutha", style: "font-display" },
  { lang: "Braille", name: "⠓⠁⠏⠏⠽ ⠃⠊⠗⠞⠓⠙⠁⠽ ⠁⠍⠥⠞⠓⠁", style: "font-body tracking-widest" },
];

const NameLanguages = ({ onNext }: NameLanguagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < names.length - 1) {
      const timer = setTimeout(() => setCurrentIndex((i) => i + 1), 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setFinished(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
    >
      <div className="romantic-card max-w-xl w-full text-center relative overflow-hidden">
        {/* Glowing background effect */}
        <div
          className="absolute inset-0 rounded-[2rem] opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.4), transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="font-display text-5xl md:text-7xl text-foreground mb-2 glow-text heartbeat-pulse"
            style={{
              textShadow: `
                0 0 10px rgba(219, 112, 147, 0.5),
                0 0 20px rgba(219, 112, 147, 0.3),
                0 0 30px rgba(219, 112, 147, 0.2)
              `,
            }}
          >
            Amutha 🩵🤗
          </motion.h2>
          <p className="text-muted-foreground mb-12 font-body text-lg">
            Your name echoes in every language...
          </p>

          <div className="h-36 flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute flex flex-col items-center"
              >
                <p
                  className={`text-2xl md:text-3xl lg:text-4xl text-foreground ${names[currentIndex].style}`}
                  style={{
                    textShadow: "0 0 30px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--primary) / 0.2)",
                  }}
                >
                  {names[currentIndex].name} 🩵🤗
                </p>
                <p className="text-sm text-muted-foreground mt-3 font-body tracking-widest uppercase">
                  {names[currentIndex].lang}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex justify-center gap-1 flex-wrap max-w-xs mx-auto">
            {names.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i === currentIndex ? 1.8 : 1,
                  backgroundColor: i <= currentIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
                transition={{ duration: 0.3 }}
                className="w-1.5 h-1.5 rounded-full"
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-muted-foreground text-xs mt-4 font-body">
            {currentIndex + 1} / {names.length}
          </p>

          {finished && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="btn-love text-lg mt-8"
            >
              Continue 💝
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NameLanguages;
