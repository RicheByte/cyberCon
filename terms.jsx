import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Terms() {
  const base = import.meta.env.BASE_URL;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#03060d] text-[#f4f4f5] font-['Outfit',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
      `}} />

      {/* BACKGROUND ELEMENTS */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.15) 0%, transparent 50%)
          `,
        }}
      />

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-14 py-6 border-b border-white/10 bg-black/60 backdrop-blur-md shadow-2xl shadow-black/50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={`${base}logos/Cybercon'26 Logo.webp`} fetchpriority="high" alt="CYBERCON'26" className="h-7 sm:h-10 md:h-14 w-auto object-contain" />
          </Link>
        </div>

        {/* Center Nav — desktop only */}
        <nav className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.15em] font-['Space_Grotesk',sans-serif] font-medium text-gray-300 pt-1">
          <Link to="/#" className="hover:text-white transition-colors duration-300 drop-shadow-md">Home</Link>
          <Link to="/#tracks" className="hover:text-white transition-colors duration-300 drop-shadow-md">Tracks</Link>
          <Link to="/#timeline" className="hover:text-white transition-colors duration-300 drop-shadow-md">Timeline</Link>
          <Link to="/#contact" className="hover:text-white transition-colors duration-300 drop-shadow-md">Contact</Link>
        </nav>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <Link to="/register" className="hidden md:flex items-center gap-2 border border-white/30 bg-white/5 rounded-sm px-6 py-2 text-[10px] font-['Space_Grotesk',sans-serif] uppercase tracking-widest hover:bg-white hover:text-black active:bg-white active:text-black active:shadow-[0_0_30px_rgba(255,255,255,0.9)] active:scale-95 active:duration-75 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] group text-gray-300">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white group-hover:bg-black group-active:bg-black"></span>
            </span>
            Register Now
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
        <div className="md:hidden fixed top-[80px] left-0 right-0 z-40 bg-[#03060d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-6 shadow-2xl">
          <Link to="/#" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/#tracks" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Tracks</Link>
          <Link to="/#timeline" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Timeline</Link>
          <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Contact</Link>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 border border-white/30 bg-white/5 rounded-sm px-6 py-3 text-[10px] font-['Space_Grotesk'] uppercase tracking-widest hover:bg-white hover:text-black active:bg-white active:text-black active:shadow-[0_0_30px_rgba(255,255,255,0.9)] active:scale-[0.98] active:duration-75 transition-all duration-300 w-full shadow-[0_0_15px_rgba(255,255,255,0.1)] group text-gray-300">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white group-hover:bg-black group-active:bg-black"></span>
            </span>
            Register Now
          </Link>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-32 pb-20 px-6 md:px-14">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-['Space_Grotesk'] font-bold mb-4 text-white tracking-tight">Terms & Conditions</h1>
            <p className="text-gray-400 text-lg font-light">Last Updated: April 3, 2026</p>
          </div>

          <div className="space-y-12 text-gray-300">
            <section className="border-l-2 border-red-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed font-light">
                By using CyberCon'26's website and services, you agree to these terms. If you don't agree, stop using our services immediately.
              </p>
            </section>

            <section className="border-l-2 border-purple-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">2. License to Use Website</h2>
              <p className="leading-relaxed font-light">
                CyberCon'26 grants you a limited license to access and use this website for personal purposes. You may not reproduce, distribute, or exploit content without our permission.
              </p>
            </section>

            <section className="border-l-2 border-blue-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">3. Event Registration</h2>
              <p className="font-light mb-4">By registering for CyberCon'26:</p>
              <ul className="space-y-3 font-light">
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1">⚡</span>
                  <span>You confirm all information provided is accurate and complete</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1">⚡</span>
                  <span>You agree to comply with all event rules and code of conduct</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1">⚡</span>
                  <span>You understand spots may be limited and acceptance is not guaranteed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1">⚡</span>
                  <span>You accept applicable fees for certain tracks</span>
                </li>
              </ul>
            </section>

            <section className="border-l-2 border-purple-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">4. Code of Conduct</h2>
              <p className="leading-relaxed font-light">
                All participants are expected to maintain a respectful and inclusive environment. Harassment, discrimination, or inappropriate behavior will not be tolerated and may result in disqualification.
              </p>
            </section>

            <section className="border-l-2 border-blue-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="leading-relaxed font-light">
                All content on CyberCon'26's website is our property or our suppliers' property. Unauthorized use is strictly prohibited.
              </p>
            </section>

            <section className="border-l-2 border-red-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed font-light">
                CyberCon'26 is not liable for indirect, incidental, special, or consequential damages from your use of our website or services.
              </p>
            </section>

            <section className="border-l-2 border-purple-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">7. Disclaimers</h2>
              <p className="leading-relaxed font-light">
                Our website is provided "as is" without warranties. We don't guarantee uninterrupted or error-free service.
              </p>
            </section>

            <section className="border-l-2 border-blue-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">8. Modifications</h2>
              <p className="leading-relaxed font-light">
                We may modify these terms at any time. Continued use means you accept the changes.
              </p>
            </section>

            <section className="border-l-2 border-red-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">9. Governing Law</h2>
              <p className="leading-relaxed font-light">
                These terms are governed by Sri Lankan law, and disputes are subject to the exclusive jurisdiction of Sri Lankan courts.
              </p>
            </section>

            <section className="border-l-2 border-purple-500/50 pl-8">
              <h2 className="text-2xl font-['Space_Grotesk'] font-bold text-white mb-4">10. Contact Us</h2>
              <p className="leading-relaxed font-light mb-4">
                Questions about these terms? Reach out to us:
              </p>
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded">
                <p className="font-['Space_Grotesk'] text-purple-300">📧 contact@cybercon26.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* =========================================
          FOOTER
          ========================================= */}
      <footer className="relative w-full bg-[#03060d] z-30 pt-16 md:pt-32 pb-10 md:pb-12 px-6 md:px-14 overflow-hidden border-t border-white/[0.05]">

        {/* katana.png — centered background image */}
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
                Where innovation collides with ambition. Where Sri Lanka's brightest minds come to compete, inspire, and create magic together.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li><Link to="/#" className="hover:text-white transition-colors">Event Overview</Link></li>
                <li><Link to="/#tracks" className="hover:text-white transition-colors">The Disciplines</Link></li>
                <li><Link to="/#timeline" className="hover:text-white transition-colors">Timeline</Link></li>
                <li><Link to="/#contact" className="hover:text-white transition-colors">Team</Link></li>
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
            <div>© 2026 ICTS, ICT club of saegis campus. All rights reserved.</div>
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
