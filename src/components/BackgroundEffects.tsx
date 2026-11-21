import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 cyber-grid opacity-70" />

      {/* Primary Radial Glow (Electric Blue - Top Left) */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 dark:opacity-25 pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, rgba(59, 130, 246, 0) 70%)'
        }}
      />

      {/* Secondary Radial Glow (Violet - Center Right) */}
      <div 
        className="absolute top-[35%] -right-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-15 dark:opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, rgba(139, 92, 246, 0) 70%)'
        }}
      />

      {/* Bottom Radial Glow (Electric Blue / Cyan - Bottom Left) */}
      <div 
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 dark:opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, rgba(6, 182, 212, 0) 70%)'
        }}
      />

      {/* Subtle Noise / Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#080B14]/60 dark:block hidden" />
    </div>
  );
};
