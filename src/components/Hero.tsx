import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Minimal Sub-Tag */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 bg-[#E11D48]" />
              <span className="oswald text-xs font-bold uppercase tracking-[0.15em] text-[#E11D48]">
                Visual Designer & Editor
              </span>
            </div>

            {/* Main Greeting / Title */}
            <h1 className="oswald text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white leading-[0.9] mb-4">
              HELLO, I'M ABHAY<br />
              KURMI<span className="text-[#E11D48]">.</span>
            </h1>

            {/* Role Subtitle */}
            <h2 className="text-[#E11D48] font-bold uppercase tracking-widest text-xs sm:text-sm mb-6">
              {designerProfile.subtitle}
            </h2>

            {/* Short Intro */}
            <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed mb-9">
              {designerProfile.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-btn-view-work"
                onClick={() => scrollToSection('work')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E11D48] hover:brightness-110 text-white font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-all cursor-pointer min-h-[44px]"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-btn-contact"
                onClick={() => scrollToSection('connect')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent hover:bg-white hover:text-black text-white border border-white/20 font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-all cursor-pointer min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>CONTACT ME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Original Photo with #E11D48 background glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-portrait-container"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center"
            >
              {/* Vibrant #E11D48 Background Glow Layer */}
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-[#E11D48]/35 blur-3xl pointer-events-none -z-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full bg-[#E11D48]/50 blur-2xl pointer-events-none -z-0"
              />

              <img
                src={designerProfile.portraitImage}
                alt={designerProfile.name}
                className="relative z-10 w-full h-full object-contain select-none filter drop-shadow-[0_15px_30px_rgba(225,29,72,0.3)]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
