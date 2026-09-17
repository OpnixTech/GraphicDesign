import React from 'react';
import { ArrowUp } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Tier: Designer Name & Roles */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 bg-[#E11D48]" />
              <h3 className="oswald text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                {designerProfile.name}<span className="text-[#E11D48]">.</span>
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-medium tracking-wide">
              <span>Graphic Designer</span>
              <span className="text-gray-600">•</span>
              <span>Video Editor</span>
              <span className="text-gray-600">•</span>
              <span>Photo Editor</span>
              <span className="text-gray-600">•</span>
              <span>Illustrator</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.15em] font-bold">
            {designerProfile.socials.youtube && (
              <a
                href={designerProfile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-youtube-link"
                className="text-gray-400 hover:text-[#FF0000] transition-colors min-h-[44px] flex items-center gap-2"
              >
                <img
                src={`${import.meta.env.BASE_URL}youtube_logo.png`}
                  alt="YouTube"
                  className="h-4 w-auto object-contain bg-white rounded-[2px] px-1 py-0.5"
                />
                <span>YouTube</span>
                {designerProfile.youtubeStats && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#FF0000]/15 text-[#FF4D4D] border border-[#FF0000]/30 rounded-[3px]">
                    {designerProfile.youtubeStats.subscribers}
                  </span>
                )}
              </a>
            )}
            {designerProfile.socials.instagram && (
              <a
                href={designerProfile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="text-gray-400 hover:text-[#E11D48] transition-colors min-h-[44px] flex items-center gap-1.5"
              >
                <span>Instagram</span>
                {designerProfile.instagramStats && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#E11D48]/15 text-[#FF4D88] border border-[#E11D48]/30 rounded-[3px]">
                    {designerProfile.instagramStats.followers}
                  </span>
                )}
              </a>
            )}
            {designerProfile.socials.behance && (
              <a
                href={designerProfile.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E11D48] transition-colors min-h-[44px] flex items-center"
              >
                Behance
              </a>
            )}
            {designerProfile.socials.linkedin && (
              <a
                href={designerProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E11D48] transition-colors min-h-[44px] flex items-center"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500">
          <p>
            © 2026 {designerProfile.name}. All rights reserved.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#E11D48] uppercase tracking-[0.15em] font-bold transition-colors cursor-pointer min-h-[44px] self-start sm:self-auto"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E11D48]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
