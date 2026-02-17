import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const memories = [
  { 
    caption: 'Our special moment', 
    id: 1,
    image: '/assets/IMG-20260217-WA0007-2.jpg'
  },
  { 
    caption: 'Together forever', 
    id: 2,
    image: '/assets/IMG-20260217-WA0006-2.jpg'
  },
  { 
    caption: 'Beautiful memories', 
    id: 3,
    image: '/assets/IMG-20260217-WA0008-3.jpg'
  },
  { 
    caption: 'Love and laughter', 
    id: 4,
    image: '/assets/IMG-20260217-WA0009-2.jpg'
  },
];

export default function MemoryGallerySection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  return (
    <section
      id="memories"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-6xl text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our Memories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memory, index) => (
            <Dialog key={memory.id}>
              <DialogTrigger asChild>
                <div
                  className={`cursor-pointer group transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  onClick={() => setSelectedMemory(memory.id)}
                >
                  <div className="bg-card p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-border">
                    <div className="aspect-square bg-gradient-to-br from-[oklch(var(--secondary))] to-[oklch(var(--primary))] rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={memory.image}
                        alt={memory.caption}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <p className="text-center text-lg font-medium">{memory.caption}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-md border-border">
                <div className="p-4">
                  <div className="aspect-square bg-gradient-to-br from-[oklch(var(--secondary))] to-[oklch(var(--primary))] rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-center text-2xl font-medium">{memory.caption}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
