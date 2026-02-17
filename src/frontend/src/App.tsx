import { useEffect } from 'react';
import TopNav from './components/TopNav';
import HeroSection from './components/sections/HeroSection';
import OurStorySection from './components/sections/OurStorySection';
import ReasonsSection from './components/sections/ReasonsSection';
import MemoryGallerySection from './components/sections/MemoryGallerySection';
import LoveNoteSection from './components/sections/LoveNoteSection';
import SurpriseSection from './components/sections/SurpriseSection';
import CountdownSection from './components/sections/CountdownSection';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-pastel relative">
      {/* Background decoration */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/assets/generated/pastel-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <TopNav />
        <MusicToggle />
        
        <main>
          <HeroSection />
          <OurStorySection />
          <ReasonsSection />
          <MemoryGallerySection />
          <LoveNoteSection />
          <SurpriseSection />
          <CountdownSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;

