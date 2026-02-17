import { useState } from 'react';
import { Lock, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SurpriseSection() {
  const { ref, isVisible } = useScrollReveal();
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'motu') {
      setIsUnlocked(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <section
      id="surprise"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2
          className={`text-4xl md:text-6xl mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          A Special Surprise
        </h2>

        {!isUnlocked ? (
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-border glow-soft">
              <Lock className="h-16 w-16 mx-auto mb-6 text-accent" />
              <p className="text-xl mb-8 text-muted-foreground">
                Enter the password to unlock your surprise
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password..."
                  className="text-center text-lg rounded-full border-2 focus:border-accent"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full glow-soft bg-gradient-to-r from-[oklch(var(--primary))] to-[oklch(var(--accent))] hover:scale-105 transition-transform"
                >
                  Unlock
                </Button>
              </form>

              {showError && (
                <p className="text-destructive mt-4 animate-fade-in">
                  Not quite right... try again! 💕
                </p>
              )}
            </div>
          </div>
        ) : (
          <div
            className="animate-fade-in"
          >
            <div className="bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] p-8 md:p-12 rounded-3xl glow-soft">
              <Heart className="h-20 w-20 mx-auto mb-6 text-primary-foreground fill-current animate-float" />
              <p className="text-2xl md:text-4xl text-primary-foreground leading-relaxed">
                Udit, you matter a lot to me.
              </p>
              <p className="text-3xl md:text-5xl mt-6 text-primary-foreground font-bold">
                You are my saiyaara. ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

