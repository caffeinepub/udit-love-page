import { useState } from 'react';
import { Mail, MailOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function LoveNoteSection() {
  const { ref, isVisible } = useScrollReveal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="love-note"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2
          className={`text-4xl md:text-6xl mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          A Love Note
        </h2>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            variant="ghost"
            className="mb-8 hover:scale-110 transition-transform"
          >
            {isOpen ? (
              <MailOpen className="h-32 w-32 text-accent" />
            ) : (
              <Mail className="h-32 w-32 text-primary" />
            )}
          </Button>

          <p className="text-muted-foreground mb-8">
            {isOpen ? 'Click to close' : 'Click the envelope to read'}
          </p>

          <div
            className={`transition-all duration-700 overflow-hidden ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-border glow-soft">
              <p className="text-xl md:text-2xl leading-relaxed italic">
                "Udit, I didn't expect an online conversation to become something so meaningful. 
                You've become a source of calm and consistency."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

