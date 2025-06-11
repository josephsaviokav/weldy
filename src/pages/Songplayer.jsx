import React, { useState, useRef, useEffect } from "react";
import "../css/SongPlayer.css";
import {
  Play,
  Pause,
  
  Volume2,
  VolumeX,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const SongPlayer = () => {
  const { state } = useLocation();
  const song = state?.song;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setMuted(!muted);
    audioRef.current.muted = !muted;
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    audioRef.current.volume = vol;
    if (vol > 0 && muted) {
      setMuted(false);
      audioRef.current.muted = false;
    }
  };

  if (!song) return <div>No song selected</div>;

  return (
    <div className="song-player full-page">
      
      <audio ref={audioRef} src={`/songs/${song.sourcepath}`} preload="metadata" />
      <div className="song-info">
        <img src={song.primaryImage} alt="cover" className="cover" />
        <div>
          <h4>{song.title}</h4>
          <p>{song.artist}</p>
        </div>
      </div>
      <div className="controls">
        
        {isPlaying ? (
          <Pause className="icon" onClick={togglePlay} />
        ) : (
          <Play className="icon" onClick={togglePlay} />
        )}
        
      </div>
      
      <div className="volume">
        {muted || volume === 0 ? (
          <VolumeX className="icon" onClick={toggleMute} />
        ) : (
          <Volume2 className="icon" onClick={toggleMute} />
        )}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={muted ? 0 : volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default SongPlayer;
