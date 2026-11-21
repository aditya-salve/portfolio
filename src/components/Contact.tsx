import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Client-side Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please provide a valid email address.');
      return;
    }

    // Because a live backend/email API (e.g. EmailJS, Formspree, Resend) is not yet pre-configured,
    // we clearly notify the user and trigger a pre-filled mailto link so no inquiry is ever lost!
    setFormSubmitted(true);
  };

  const handleMailtoFallback = () => {
    const encodedSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const encodedBody = encodeURIComponent(
      `Hello Aditya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's Connect & <span className="text-gradient-electric">Build Something Great</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            I'm always interested in connecting with people, exploring new ideas, and learning about exciting opportunities in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  Direct Communication Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Whether you'd like to collaborate, discuss engineering projects, or explore internships, feel free to reach out directly.
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="text-xs font-mono text-slate-400">Direct Email:</div>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-slate-400">Location:</div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles:
                </div>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300">
                          LinkedIn
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          aditya-salve-8abb8a42a
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit ↗
                    </span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-slate-500/40 hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-slate-300" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-slate-200">
                          GitHub
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          github.com/aditya-salve
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit ↗
                    </span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card p-6 sm:p-9 border border-white/10 shadow-2xl relative">
              
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the form below. If you prefer, you can also launch your local email client with one click.
              </p>

              {formError && (
                <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              {formSubmitted ? (
                <div className="py-8 px-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    <strong>Backend Configuration Notice:</strong> To ensure your message is delivered immediately without backend reliance, click the button below to dispatch via your default email client:
                  </p>
                  
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleMailtoFallback}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/30 transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </button>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Discussion / Internship Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors underline"
                    >
                      Or open default email client ↗
                    </button>

                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
