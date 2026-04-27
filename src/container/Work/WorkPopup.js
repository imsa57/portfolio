import React, { useRef, useEffect, useState } from "react";
import "./Work.scss";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { motion } from "framer-motion";

const WorkPopup = ({ work, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
      setIsPlaying(true);
      setIsMuted(false);
    }
  }, []);
  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleVideoPause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };
  const handleVideoUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };
  return (
    <div className="work-popup">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="work-popup-content"
      >
        {work.linkType === "image" && (
          <img src={work?.projectLink} alt={work?.name} />
        )}
        {work.linkType === "video" && (
          <video
            ref={videoRef}
            className="work-popup-video"
            src={work?.projectLink}
            alt={work?.name}
          />
        )}
      </motion.div>
      <div className="video-controls">
        {work.linkType === "video" && (
          <>
            {isPlaying ? (
              <button onClick={() => handleVideoPause()}>
                <FaPause />
              </button>
            ) : (
              <button onClick={() => handleVideoPlay()}>
                <FaPlay />
              </button>
            )}
            {isMuted ? (
              <button onClick={() => handleVideoUnmute()}>
                <FaVolumeMute />
              </button>
            ) : (
              <button onClick={() => handleVideoMute()}>
                <FaVolumeUp />
              </button>
            )}
          </>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WorkPopup;
