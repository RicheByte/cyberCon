import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Instagram, Facebook } from 'lucide-react';

export default function Register() {
  const base = import.meta.env.BASE_URL;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tracks = [
    {
      id: '01',
      title: 'Ideathon',
      desc: 'Pitch your vision. Generate bold, innovative ideas that tackle real-world challenges and present them to a panel of industry experts.',
      logo: `${base}logos/Ideathon Logo.webp`,
      glow: 'bg-amber-500/5 group-hover:bg-amber-500/10'
    },
    {
      id: '02',
      title: 'Hackathon',
      desc: 'Build solutions that matter. Tackle real-world problem statements and ship functional software under extreme pressure.',
      logo: `${base}logos/Hackathon Logo.webp`,
      glow: 'bg-blue-500/5 group-hover:bg-blue-500/10'
    },
    {
      id: '03',
      title: 'Designathon',
      desc: 'Design with intent. Solve visual communication and UX challenges, delivering polished interfaces in a strict time window.',
      logo: `${base}logos/Designathon Logo.webp`,
      glow: 'bg-purple-500/5 group-hover:bg-purple-500/10'
    },
    {
      id: '04',
      title: 'Capture The Flag',
      desc: 'Hunt the flag. Exploit web vulnerabilities, break cryptography, reverse engineer binaries, and analyze memory dumps.',
      logo: `${base}logos/Capture The Flag Logo.webp`,
      glow: 'bg-red-500/5 group-hover:bg-red-500/10'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#03060d] text-[#f4f4f5] font-['Outfit',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Import the necessary fonts mapping with normal app global style behavior */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
      `}} />

      {/* BACKGROUND ELEMENTS (Matches Home Page) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '16.666% 100%'
        }}
      />

      {/* HEADER */}
      <header className="relative z-20 flex justify-between items-center w-full px-6 md:px-14 py-6 border-b border-white/5 bg-[#03060d]/80 backdrop-blur-md">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={`${base}logos/Cybercon'26 Logo.webp`} fetchpriority="high" alt="CYBERCON'26" className="h-7 sm:h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Center Nav — desktop only */}
        <nav className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.15em] font-['Space_Grotesk',sans-serif] font-medium text-gray-300 pt-1">
          <a href="/#" className="hover:text-white transition-colors">Home</a>
          <a href="/#tracks" className="hover:text-white transition-colors">Tracks</a>
          <a href="/#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right: Back button + mobile hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/" className="hidden md:flex items-center gap-2 border border-white/30 rounded-full px-6 py-2 text-[10px] font-['Space_Grotesk',sans-serif] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            <ArrowLeft className="w-3 h-3" />
            <span>Back to HQ</span>
          </Link>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 z-30 bg-[#03060d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-6">
          <a href="/#" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="/#tracks" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Tracks</a>
          <a href="/#timeline" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Timeline</a>
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Contact</a>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 border border-white/30 rounded-full px-6 py-3 text-[10px] font-['Space_Grotesk'] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full">
            <ArrowLeft className="w-3 h-3" />
            <span>Back to HQ</span>
          </Link>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-14 py-12 md:py-24">
        {/* Title Container */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-24">
          <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">Secure Your Slot</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white max-w-2xl mb-4 md:mb-6">
            Execution &<br />Handbooks.
          </h1>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl leading-relaxed px-2">
            Review the tactical documentation for your discipline, then proceed to interface with the registration terminal. Only the highest caliber operators will survive.
          </p>
        </div>

        {/* 4 Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {tracks.map((track) => (
            <div key={track.id} className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-6 md:p-10 rounded-sm transition-all duration-500 overflow-hidden flex flex-col h-full bg-gradient-to-b from-white/[0.02] to-transparent">
              {/* Backglow Color matches hover */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-40 group-hover:opacity-80 transition-all duration-700 ${track.glow}`}></div>
              
              <div className="relative z-10 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <img src={track.logo} alt={track.title} loading="lazy" decoding="async" className="w-16 sm:w-20 md:w-28 h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-[10px] font-['Space_Grotesk'] text-white/20 uppercase tracking-widest">{track.id}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white">{track.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 md:mb-10">
                  {track.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto border-t border-white/5 pt-6 md:pt-8">
                {track.id === '01' ? (
                  <a href="https://forms.gle/W72ND3rsFgEok6cR8" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white text-[#03060d] px-6 py-4 rounded-sm text-[10px] md:text-[11px] font-['Space_Grotesk'] uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors">
                    Register <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button disabled className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-gray-300 px-6 py-4 rounded-sm text-[10px] md:text-[11px] font-['Space_Grotesk'] uppercase tracking-widest cursor-not-allowed opacity-60">
                    Upcoming
                  </button>
                )}
                <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white px-6 py-4 rounded-sm text-[10px] md:text-[11px] font-['Space_Grotesk'] uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all">
                  {track.id === '01' ? 'Handbook' : 'Upcoming'} <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative w-full bg-[#03060d] z-30 pt-16 md:pt-32 pb-10 md:pb-12 px-6 md:px-14 overflow-hidden border-t border-white/[0.05]">
        {/* katana.webp — centered background image */}
        <img
          src={`${base}katana.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-contain opacity-60 pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
            <div className="col-span-2">
              <div className="mb-4 md:mb-6">
                <img src={`${base}logos/Cybercon'26 Logo.webp`} alt="CYBERCON'26" loading="lazy" decoding="async" className="h-12 md:h-16 w-auto object-contain" />
              </div>
              <p className="text-gray-300 text-sm max-w-sm leading-relaxed font-light">
                Sri Lanka's only event where Builders, Designers, and Hackers compete on the same stage.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li><a href="/#" className="hover:text-white transition-colors">Event Overview</a></li>
                <li><a href="/#tracks" className="hover:text-white transition-colors">The Disciplines</a></li>
                <li><a href="/#timeline" className="hover:text-white transition-colors">Timeline</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 mb-6">Network</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li><a href="https://www.instagram.com/ictclub.saegis/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3"><Instagram className="w-4 h-4 text-white/40"/> Instagram</a></li>
                <li><a href="https://web.facebook.com/profile.php?id=61566920007667" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3"><Facebook className="w-4 h-4 text-white/40"/> Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 font-['Space_Grotesk'] tracking-[0.15em] uppercase">
            <div>© 2026 ICTS, Faculty of Technology, USJ. All rights reserved.</div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
