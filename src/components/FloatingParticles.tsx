import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  type: "heart" | "sparkle";
  left: number;
  delay: number;
  duration: number;
  size: number;
}

interface Burst {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

const FloatingParticles = () => {
  const [particles] = useState<Particle[]>(() => {
    const items: Particle[] = [];
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        type: i % 4 === 0 ? "sparkle" : "heart",
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
        size: 16 + Math.random() * 24,
      });
    }
    return items;
  });

  const [bursts, setBursts] = useState<Burst[]>([]);

  const handleHeartClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    const burstId = Date.now() + Math.random();
    setBursts((prev) => [...prev, { id: burstId, x, y, createdAt: Date.now() }]);

    // Auto-remove burst after animation
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 600);
  };

  // Cleanup old bursts
  useEffect(() => {
    const interval = setInterval(() => {
      setBursts((prev) =>
        prev.filter((b) => Date.now() - b.createdAt < 700)
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background sparkles - stationary twinkling */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`bg-sparkle-${i}`}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: "8px",
              opacity: 0.4,
              animation: `sparkle-twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.type === "heart" ? "cursor-pointer" : ""}`}
          style={{
            left: `${p.left}%`,
            bottom: "-20px",
            fontSize: `${p.size}px`,
            pointerEvents: p.type === "heart" ? "auto" : "none",
            animation: p.type === "heart" ? `float-up ${p.duration}s linear ${p.delay}s infinite` : `sparkle-drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
          onClick={p.type === "heart" ? handleHeartClick : undefined}
          whileHover={p.type === "heart" ? { scale: 1.2 } : {}}
          whileTap={p.type === "heart" ? { scale: 0.9 } : {}}
        >
          {p.type === "heart" ? "🩵" : "✨"}
        </motion.div>
      ))}

      {/* Burst of sparkles on heart click */}
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div key={burst.id} className="fixed pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const distance = 80;
              const tx = Math.cos(angle) * distance;
              const ty = Math.sin(angle) * distance;

              return (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute text-yellow-300"
                  style={{
                    left: burst.x,
                    top: burst.y,
                    fontSize: "14px",
                    "--tx": `${tx}px`,
                    "--ty": `${ty}px`,
                  } as React.CSSProperties & { [key: string]: string }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                >
                  ✨
                </motion.div>
              );
            })}
            {/* Burst heart animation */}
            <motion.div
              className="absolute text-xl"
              style={{
                left: burst.x,
                top: burst.y,
              }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              exit={{ opacity: 0 }}
            >
              💫
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingParticles;
