import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = ({ isPlayingGlobally }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlayingGlobally && audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
      setIsPlaying(true);
    }
  }, [isPlayingGlobally]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player-container">
      <button className="audio-btn" onClick={togglePlay}>
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span>{isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}</span>
      </button>
      
      {/* Assuming a music file exists in public directory. User needs to provide this. */}
      <audio 
        ref={audioRef} 
        src="/gta-theme.mp3" 
        loop 
        preload="auto"
      />
    </div>
  );
};

export default AudioPlayer;
