import { motion } from "framer-motion";

interface VideoSectionProps {
  onNext: () => void;
}

// 🎬 VIDEO CONFIGURATION - EASY TO UPDATE
// Instructions:
// 1. YouTube: Get video ID from URL (e.g., https://www.youtube.com/watch?v=XXXXX → use XXXXX)
//    Set videoType: "youtube" and videoId: "YOUR_VIDEO_ID"
// 2. Direct MP4: Put video file in public/videos/ folder
//    Set videoType: "file" and videoUrl: "/videos/your-video.mp4"
// 3. Vimeo: Get video ID from Vimeo URL
//    Set videoType: "vimeo" and videoId: "YOUR_VIDEO_ID"
// 4. For now, leave as "none" to show placeholder

const VIDEO_CONFIG = {
  type: "file", // Options: "youtube" | "vimeo" | "file" | "none"
  
  // YouTube: Video ID from the URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ → use dQw4w9WgXcQ)
  youtubeId: "", // Example: "dQw4w9WgXcQ"
  
  // Vimeo: Video ID from Vimeo URL (e.g., https://vimeo.com/123456789 → use 123456789)
  vimeoId: "", // Example: "123456789"
  
  // Direct file: Path to video in public folder
  fileUrl: "/videos/my-video.mp4.mp4", // Your video is uploaded! 🎥
};

const VideoSection = ({ onNext }: VideoSectionProps) => {
  const isVideoConfigured = VIDEO_CONFIG.type !== "none";

  const renderVideo = () => {
    if (!isVideoConfigured) {
      return (
        <div className="text-center p-8">
          <p className="text-4xl mb-4">🎬</p>
          <p className="text-muted-foreground font-body text-sm">
            Your special video will appear here
          </p>
          <p className="text-muted-foreground font-body text-xs mt-2">
            📝 See code comments to add your video
          </p>
        </div>
      );
    }

    if (VIDEO_CONFIG.type === "youtube") {
      return (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${VIDEO_CONFIG.youtubeId}`}
          title="Love Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (VIDEO_CONFIG.type === "vimeo") {
      return (
        <iframe
          src={`https://player.vimeo.com/video/${VIDEO_CONFIG.vimeoId}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (VIDEO_CONFIG.type === "file") {
      return (
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          style={{ 
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain"
          }}
        >
          <source src={VIDEO_CONFIG.fileUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
    >
      <motion.div className="romantic-card max-w-lg w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-5xl mb-4 inline-block"
        >
          🎥
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-foreground mb-2"
        >
          A little something...
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground font-body mb-8"
        >
          This is for you, my friend 💙
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="rounded-[1.5rem] overflow-hidden bg-muted flex items-center justify-center border border-border w-full"
          style={{ maxHeight: "500px", height: "auto" }}
        >
          {renderVideo()}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="btn-love text-lg mt-10"
        >
          One last thing... 💕
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default VideoSection;
