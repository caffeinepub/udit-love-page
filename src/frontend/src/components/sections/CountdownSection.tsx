import { Clock } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CountdownSection() {
  const { ref, isVisible } = useScrollReveal();
  const targetDate = new Date('2026-02-18T00:00:00');
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  return (
    <section
      id="countdown"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2
          className={`text-4xl md:text-6xl mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Counting Down
        </h2>

        {!isComplete ? (
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-border glow-soft">
              <Clock className="h-16 w-16 mx-auto mb-8 text-accent" />
              <p className="text-xl text-muted-foreground mb-8">
                Until February 18, 2026
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] p-6 rounded-2xl glow-soft">
                  <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
                    {days}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    Days
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] p-6 rounded-2xl glow-soft">
                  <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
                    {hours}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    Hours
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] p-6 rounded-2xl glow-soft">
                  <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
                    {minutes}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    Minutes
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] p-6 rounded-2xl glow-soft">
                  <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
                    {seconds}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] p-12 rounded-3xl glow-soft">
              <p className="text-4xl md:text-6xl text-primary-foreground mb-4">
                🎉 The day is here! 🎉
              </p>
              <p className="text-2xl text-primary-foreground/90">
                February 18, 2026
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

