import { Heart, MessageCircle, Smile, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reasons = [
  {
    text: 'You choose to listen.',
    icon: MessageCircle,
  },
  {
    text: 'You make distance feel manageable.',
    icon: Heart,
  },
  {
    text: 'You bring comfort.',
    icon: Sparkles,
  },
  {
    text: 'You call me motu.',
    icon: Smile,
  },
];

export default function ReasonsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="reasons"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-6xl text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why You're Special
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border glow-soft hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] flex items-center justify-center glow-soft">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-xl md:text-2xl">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

