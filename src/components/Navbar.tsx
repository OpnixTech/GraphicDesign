import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'TOOLS', href: '#tools' },
  { label: 'PROCESS', href: '#process' },
  { label: 'CONNECT', href: '#connect' }
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['home', 'about', 'work', 'tools', 'process', 'connect'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 border-b border-white/10 backdrop-blur-md shadow-lg shadow-black/40'
          : 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Portfolio Home"
        >
          <span className="w-2 h-2 bg-[#E11D48] transition-transform group-hover:scale-125" />
          <span className="oswald text-xl sm:text-2xl font-bold tracking-[0.08em] text-white uppercase transition-colors">
            {designerProfile.name}<span className="text-[#E11D48]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-[11px] uppercase font-bold tracking-[0.15em] transition-colors py-2 relative min-h-[44px] flex items-center ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#E11D48]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0D0D0D] border-b border-white/10 px-6 py-6 transition-all"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center justify-between px-3.5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors min-h-[44px] ${
                    isActive
                      ? 'text-white bg-white/5 border-l-2 border-[#E11D48]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-[#E11D48]" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
