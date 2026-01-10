import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isInteractive, setIsInteractive] = useState(false);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsInteractive(true);

    video.muted = false;
    video.loop = false;
    video.controls = true;
    video.play();
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10 max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-border/50">
          <video
            ref={videoRef}
            src="/0531.mp4"
            poster="/video-thumb.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay only in intro mode */}
          {!isInteractive && (
            <button
              onClick={handleClick}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg"
              >
                <Play className="w-9 h-9 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
