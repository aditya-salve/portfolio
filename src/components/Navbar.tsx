import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#080B14]/85 dark:bg-[#080B14]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 text-base tracking-tighter">
                {personalInfo.initials}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-100 group-hover:text-white text-sm sm:text-base leading-tight tracking-tight">
                {personalInfo.shortName}
              </span>
              <span className="text-[11px] font-mono text-blue-400/80 tracking-wider">
                COMP.ENGG // 2029
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.06] shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Terminal Toggle Button */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                title="Launch Cyber Terminal"
                aria-label="Terminal"
                className="p-2 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200 text-xs font-mono flex items-center gap-1.5"
              >
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="hidden xl:inline text-[11px]">cli</span>
              </button>
            )}

            {/* Dark / Light Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-200"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Accent Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get In Touch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080B14]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-4 border-blue-500'
                    : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 text-sm font-mono flex items-center justify-center gap-2 hover:bg-white/[0.06]"
                >
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span>Open Interactive Terminal</span>
                </button>
              )}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="w-full py-3 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 text-sm shadow-md shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
