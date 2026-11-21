import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, Eye, ShieldCheck, AlertCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Lifelong Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Learning Beyond the <span className="text-gradient-electric">Classroom</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified course certifications from premier academic bodies and industry leaders, along with strategic learning milestones.
          </p>
        </div>

        {/* Verification Note */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 rounded-xl glass-panel border border-emerald-500/30 bg-emerald-500/5 text-xs text-slate-300 flex items-start gap-3 shadow-md">
          <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <p>
            <strong className="text-white">Authentic Credentials:</strong> Official certifications include NPTEL Python for Data Science (IIT Madras), Imarticus C & C++ Programming (Grade A), and Bajaj Manufacturing Systems (BMS-ES). Future goals are clearly labeled as demo placeholders.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl glass-card flex flex-col justify-between overflow-hidden group hover:border-blue-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Certificate Image Thumbnail */}
              <div 
                className="relative h-48 bg-[#0B0F19] overflow-hidden border-b border-white/[0.08] cursor-pointer"
                onClick={() => setActiveModalCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                
                {/* Overlay hover cue */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Click to Inspect Full Certificate</span>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow ${
                    cert.isDemo
                      ? 'bg-amber-500/80 text-black border border-amber-400'
                      : 'bg-emerald-600/90 text-white border border-emerald-400'
                  }`}>
                    {cert.isDemo ? 'DEMO PLACEHOLDER' : 'VERIFIED'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{cert.issuedOn}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-blue-400/90 font-medium mt-1">
                    {cert.issuer}
                  </div>

                  {cert.gradeOrScore && (
                    <div className="mt-2.5 inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                      {cert.gradeOrScore}
                    </div>
                  )}

                  <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalCert(cert)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 glass-panel hover:text-white hover:border-white/20 transition-colors flex items-center justify-center"
                      title="Verify at issuer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      {activeModalCert && (
        <CertificateModal
          cert={activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />
      )}
    </section>
  );
};
