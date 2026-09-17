import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  aspectRatio?: string;
  description?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  aspectRatio = '16/9',
  description
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  // Convert aspect ratio to tailwind style
  const aspectClass = aspectRatio === '4/3' ? 'aspect-[4/3]' : aspectRatio === '3/4' ? 'aspect-[3/4]' : 'aspect-[16/9]';

  return (
    <div className="w-full bg-[#111111] border border-white/10 overflow-hidden p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 text-xs tracking-[0.15em] uppercase">
        <div className="flex items-center gap-2">
          <span className="oswald font-bold text-sm sm:text-base text-white tracking-wider">{title}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 font-mono text-[11px]">
          <span className="text-gray-400">BEFORE</span>
          <span className="text-[#E11D48] font-bold">→</span>
          <span className="text-white font-bold">AFTER</span>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className={`relative w-full ${aspectClass} overflow-hidden cursor-ew-resize select-none bg-black border border-white/10`}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Before and After comparison for ${title}`}
      >
        {/* AFTER (Full background image) */}
        <img
          src={afterImage}
          alt={`${title} - Edited Result`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* BEFORE (Clipped by slider position) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={`${title} - Original Capture`}
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
            loading="lazy"
          />
        </div>

        {/* Clean Editorial Badges */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 backdrop-blur-xs text-[10px] font-mono tracking-[0.15em] text-gray-300 border border-white/10 pointer-events-none">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/85 backdrop-blur-xs text-[10px] font-mono tracking-[0.15em] text-[#E11D48] border border-[#E11D48]/50 pointer-events-none font-bold">
          AFTER
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical white/red line */}
          <div className="w-[2px] h-full bg-[#E11D48]" />

          {/* Draggable knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#E11D48] flex items-center justify-center text-white shadow-lg pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#E11D48]" />
          </div>
        </div>
      </div>

      {description && (
        <p className="mt-3 text-xs text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
