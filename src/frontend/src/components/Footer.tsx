import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'udit-love-page';

  return (
    <footer id="footer" className="bg-gradient-footer py-12 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-2xl md:text-3xl italic text-gradient">
          "Forever feels less scary with the right person."
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>© {currentYear}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-accent fill-current" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

