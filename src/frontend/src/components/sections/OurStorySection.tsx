import { Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const timelineItems = [
  'One message and everything changed.',
  'Late-night conversations that felt effortless.',
  'Moments that made distance feel smaller.',
  'Video calls that felt meaningful.',
];

export default function OurStorySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="our-story"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-6xl text-center mb-4 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          A Random Instagram Group Chat
        </h2>
        
        <p
          className={`text-center text-muted-foreground mb-16 text-lg transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Where it all began...
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[oklch(var(--primary))] via-[oklch(var(--accent))] to-[oklch(var(--gold))]" />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-3xl border border-border glow-soft">
                    <p className="text-lg md:text-xl">{item}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(var(--primary))] to-[oklch(var(--accent))] flex items-center justify-center glow-soft z-10">
                  <Heart className="h-6 w-6 text-primary-foreground fill-current" />
                </div>
                <div className="w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Hindi quote */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-3xl italic text-accent mb-6">
            "Tum paas nahi, phir bhi sabse kareeb ho."
          </p>
          <p className="text-lg text-muted-foreground">
            Distance means little when someone matters.
          </p>
        </div>
      </div>
    </section>
  );
}

