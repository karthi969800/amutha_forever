import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface BackgroundAudioProps {
  audioUrl: string;
  volume?: number;
}

const BackgroundAudio = ({ audioUrl, volume = 0.5 }: BackgroundAudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(volume);

  // Auto-play audio when component mounts
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = currentVolume;
      // Delay audio play to ensure it's loaded
      const timer = setTimeout(() => {
        if (audio && audio.paused) {
          audio.play().catch((error) => {
            console.log("Auto-play prevented or failed:", error);
          });
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update audio volume when currentVolume or muted changes
  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = currentVolume;
      }
    }
  }, [isMuted, currentVolume]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      // If audio is paused, play it
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setCurrentVolume(newVolume);
    if (isMuted) setIsMuted(false);
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        crossOrigin="anonymous"
        onError={(e) => console.error("Audio loading error:", e)}
        onCanPlay={() => console.log("Audio ready to play")}
      />

      {/* Audio Control Button - Fixed position */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Volume Slider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: 120, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={currentVolume}
            onChange={handleVolumeChange}
            className="w-24 cursor-pointer"
            title="Volume control"
          />
          <span className="text-xs text-muted-foreground w-6">
            {Math.round(currentVolume * 100)}%
          </span>
        </motion.div>

        {/* Mute/Unmute Button */}
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            p-2.5 rounded-full transition-all backdrop-blur-md
            ${
              isMuted
                ? "bg-red-500/30 hover:bg-red-500/40 text-red-200"
                : "bg-blue-500/30 hover:bg-blue-500/40 text-blue-200"
            }
            border border-white/20 shadow-lg
          `}
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </motion.button>
      </motion.div>
    </>
  );
};

export default BackgroundAudio;
