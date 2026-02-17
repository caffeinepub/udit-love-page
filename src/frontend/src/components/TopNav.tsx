import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { scrollToSection } from '@/lib/scrollToSection';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Our Story', id: 'our-story' },
  { label: 'Reasons', id: 'reasons' },
  { label: 'Memories', id: 'memories' },
  { label: 'Love Note', id: 'love-note' },
  { label: 'Surprise', id: 'surprise' },
  { label: 'Countdown', id: 'countdown' },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl text-gradient font-bold">
          For Udit
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleNavClick(item.id)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-card">
            <SheetTitle className="text-2xl text-gradient mb-6">Navigation</SheetTitle>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className="justify-start text-lg hover:bg-primary/10 hover:text-accent transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

