import React, { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check saved theme or system preference
    const saved = localStorage.getItem('aditya-portfolio-theme');
    if (saved) {
      setDarkMode(saved === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('aditya-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('aditya-portfolio-theme', 'light');
    }
  }, [darkMode]);

  // Global keyboard shortcut to open terminal (` or Ctrl+Shift+T)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080B14] text-[#F8FAFC] overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-200 transition-colors duration-300">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Subtle Desktop Cursor Glow */}
      <CustomCursor />

      {/* Ambient Grid & Glow Effects */}
      <BackgroundEffects />

      {/* Sticky Glass Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col space-y-0">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Achievements />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Back to Top */}
      <BackToTop />

      {/* Cyber Developer Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
