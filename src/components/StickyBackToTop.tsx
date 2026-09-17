import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const StickyBackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button after user scrolls down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      id="sticky-back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#111111] hover:bg-[#E11D48] text-white border border-white/20 hover:border-[#E11D48] shadow-2xl shadow-black/80 transition-all duration-300 group cursor-pointer"
    >
      <ArrowUp className="w-4 h-4 text-[#E11D48] group-hover:text-white transition-colors animate-bounce" />
      <span className="oswald text-[11px] font-bold tracking-[0.15em] uppercase hidden sm:inline">
        TOP
      </span>
    </button>
  );
};
