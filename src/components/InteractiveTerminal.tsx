import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, quickTerminalCommands } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  type: 'command' | 'output' | 'error';
  text: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    { type: 'output', text: 'Welcome to Aditya Salve\'s Cyber Terminal v1.0 [x86_64]' },
    { type: 'output', text: 'Type "help" to view available terminal commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: CommandHistoryItem[] = [
      ...history,
      { type: 'command', text: `aditya@terminal:~$ ${inputVal}` }
    ];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: quickTerminalCommands.map(c => `  • ${c.command.padEnd(12)} - ${c.description}`).join('\n')
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `[ADITYA RAJENDRA SALVE]\nTitle:    ${personalInfo.title}\nCollege:  ${personalInfo.college}\nYear:     ${personalInfo.currentYear}\nLocation: ${personalInfo.location}\nBio:      ${personalInfo.heroDescription}\nQuote:    "${personalInfo.learningQuote}"`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `CORE PROFICIENCIES:\n  [Intermediate] C Programming (65%)\n  [Intermediate] C++ (65%)\n  [Beginner]     Python (40% - NPTEL)\n  [Beginner]     Java (35%)\n  [Beginner]     Data Structures (45%)\n  [Beginner]     HTML & CSS (45%)\nEXPLORING: Game Development, Software Engineering, Emerging Tech`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `PROJECT SHOWCASE:\n  1. Student Management System (C++ / OOP / File I/O) [DEMO PLACEHOLDER]\n  2. Personal Portfolio Website (React / Tailwind / TS) [ACTIVE]\n  3. Game Development Project (Interactive Mechanics) [DEMO PLACEHOLDER]\nCustomize anytime via src/data/portfolioData.ts.`
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: `VERIFIED CREDENTIALS:\n  1. NPTEL Python for Data Science (IIT Madras / Swayam) - Roll: NPTEL26CS80S466201283\n  2. Imarticus Learning C & C++ Programming - Grade A - ID: VLCVTSYQ373U\n  3. Bajaj Manufacturing Systems Employability Skills - ID: 548687-37-2026-09-28\n  + 2 Future Demo Placeholders`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `ACADEMIC TIMELINE:\n  • Dr. D. Y. Patil College of Engineering and Innovation\n    Degree: Bachelor of Engineering - Computer Engineering\n    Status: Second Year (1st Sem) | Graduating: 2029 | Pune\n  • Higher Secondary Education (12th Grade)\n    Stream: Science & Mathematics | Pune`
        });
        break;

      case 'sih':
        newHistory.push({
          type: 'output',
          text: `SMART INDIA HACKATHON (SIH):\nParticipated in the national Smart India Hackathon initiative.\nFocus: Collaborative rapid prototyping, technical teamwork, and solving real-world challenges under pressure.`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CONTACT INFORMATION:\n  Email:    ${personalInfo.email}\n  LinkedIn: ${personalInfo.linkedin}\n  GitHub:   ${personalInfo.github}\n  Location: ${personalInfo.location}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" to list available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl rounded-2xl border border-blue-500/40 bg-[#080B14]/95 shadow-[0_0_35px_rgba(59,130,246,0.3)] overflow-hidden font-mono flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#101626] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              aditya@terminal: ~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen / Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {item.type === 'command' && (
                <span className="text-blue-400 font-bold">{item.text}</span>
              )}
              {item.type === 'output' && (
                <span className="text-slate-300">{item.text}</span>
              )}
              {item.type === 'error' && (
                <span className="text-red-400">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0B0F19] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-bold">aditya@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' for commands..."
            className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder-slate-600 font-mono"
            autoFocus
          />
          <button
            type="submit"
            aria-label="Run command"
            className="p-1.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600/50 hover:text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
