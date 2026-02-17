import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollToSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div
        className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient leading-tight">
          For the Love of My Life: Udit
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          You entered my life through a screen and became someone truly special.
        </p>
        
        <Button
          onClick={() => scrollToSection('our-story')}
          size="lg"
          className="rounded-full glow-soft bg-gradient-to-r from-[oklch(var(--primary))] to-[oklch(var(--accent))] hover:scale-105 transition-transform text-lg px-8 py-6 animate-float"
        >
          Explore Our Story
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}

