import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') !== null || 
          target.closest('button') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle glow ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 ease-out will-change-transform ${
          isPointer 
            ? 'w-10 h-10 border border-blue-400/60 bg-blue-500/10 scale-125' 
            : 'w-8 h-8 border border-blue-500/30 bg-blue-500/5'
        }`}
        style={{
          transform: `translate3d(${position.x - (isPointer ? 20 : 16)}px, ${position.y - (isPointer ? 20 : 16)}px, 0)`,
          boxShadow: isPointer ? '0 0 16px rgba(59, 130, 246, 0.4)' : 'none'
        }}
      />
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue-400 will-change-transform"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          boxShadow: '0 0 8px #3B82F6'
        }}
      />
    </div>
  );
};
