import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Tools } from './components/Tools';
import { Process } from './components/Process';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import { StickyBackToTop } from './components/StickyBackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0F0F0] flex flex-col font-sans selection:bg-[#E11D48] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Tools />
        <Process />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Back to Top Button */}
      <StickyBackToTop />
    </div>
  );
}
