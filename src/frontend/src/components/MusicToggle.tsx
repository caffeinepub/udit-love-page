import { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/audio/placeholder-love-track.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Audio playback failed:', error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleMusic}
            size="icon"
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full glow-gold bg-gradient-to-br from-[oklch(var(--gold))] to-[oklch(var(--primary))] hover:scale-110 transition-transform shadow-lg"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-gold-foreground" />
            ) : (
              <Play className="h-6 w-6 text-gold-foreground ml-1" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card border-border">
          <p className="text-sm">
            {isPlaying ? 'Pause music' : 'Play background music'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Replace /assets/audio/placeholder-love-track.mp3 with your song
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
