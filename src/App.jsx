import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainContent from './components/MainContent';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlayingGlobally, setIsPlayingGlobally] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
    // Request music start on user interaction
    setIsPlayingGlobally(true);
  };

  return (
    <div className="app-container gta-bg">
      {!hasEntered ? (
        <LoadingScreen onEnter={handleEnter} />
      ) : (
        <>
          <AudioPlayer isPlayingGlobally={isPlayingGlobally} />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default App;
