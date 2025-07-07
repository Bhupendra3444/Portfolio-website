import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export const MagicalAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Card className="fixed bottom-6 right-6 z-50 bg-card/90 backdrop-blur-sm p-4 mystical-shadow">
      <div className="flex items-center gap-3">
        <span className="font-magical text-sm text-foreground">🎵 Magical Theme</span>
        <Button size="sm" variant="outline" onClick={togglePlay}>
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </Button>
        <Button size="sm" variant="outline" onClick={toggleMute}>
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </Button>
      </div>
      
      {/* Replace the src with your Harry Potter theme song file */}
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Add your audio file here - you'll need to upload a Harry Potter theme song */}
        {<source src="/harry.mp3" type="audio/mpeg" />}
        <p className="text-xs text-muted-foreground mt-2">
          Add your Harry Potter theme song file to enable magical music! 🎼
        </p>
      </audio>
    </Card>
  );
};