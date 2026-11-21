import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#06080F] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] items-start">
          
          {/* Identity Column (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 p-[2px]">
                <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 text-base">
                  {personalInfo.initials}
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">
                  {personalInfo.fullName}
                </div>
                <div className="text-xs text-blue-400 font-mono">
                  {personalInfo.title}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Computer Engineering Student at Dr. D. Y. Patil College of Engineering and Innovation, Pune. Passionate about software development, systems logic, and building meaningful technology.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Navigation Index:
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-white transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-blue-500 text-[10px]">›</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Action / Back to Top (3 Cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div className="text-xs font-mono text-slate-400 md:text-right">
              <div>TAL_DABHADE // PUNE</div>
              <div className="text-emerald-400 mt-1">AVAILABLE FOR OPPORTUNITIES</div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all self-start md:self-end"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <div>
            © {currentYear} Aditya Rajendra Salve. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed & Built with curiosity by</span>
            <span className="text-slate-200 font-semibold">Aditya Salve</span>.
          </div>
        </div>

      </div>
    </footer>
  );
};
