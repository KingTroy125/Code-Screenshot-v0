import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon } from "@radix-ui/react-icons";

export default function HeroVideoDialog({
  className = "",
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  // Animation variants based on the selected style
  const getVariants = () => {
    switch (animationStyle) {
      case "from-center":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        };
      default:
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        };
    }
  };

  return (
    <div className={className}>
      {/* Thumbnail with play button */}
      <div 
        className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.01]" 
        onClick={openDialog}
      >
        <img 
          src={thumbnailSrc} 
          alt={thumbnailAlt} 
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform hover:scale-105">
            <PlayIcon className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDialog}
              className="absolute inset-0 bg-black/80"
            />

            {/* Dialog Content */}
            <motion.div
              variants={getVariants()}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 w-full max-w-5xl rounded-xl bg-neutral-900 p-1 shadow-2xl"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoSrc}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>

              {/* Close button */}
              <button
                onClick={closeDialog}
                className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
} 