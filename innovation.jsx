import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Terminal, PenTool, Shield, Plus, Minus, Github, Linkedin, Instagram, Facebook, Lightbulb } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Who is eligible to compete?", a: "Undergraduates and tech enthusiasts from registered institutions island-wide." },
    { q: "Can I register for multiple tracks?", a: "No. Choose your specialization carefully to ensure maximum performance. Overlapping schedules will prevent execution across multiple domains." },
    { q: "What is the registration fee?", a: "Registration is strictly zero-cost, but access tokens (slots) are highly competitive and limited." },
    { q: "Where is the final round?", a: "The Grand Finale will be held on-site at the Faculty of Technology, University of Sri Jayewardenepura, on 04 April 202.0." }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#03060d] text-[#f4f4f5] font-['Outfit',sans-serif] selection:bg-[#ff3344] selection:text-white antialiased overflow-x-hidden">
      
      {/* Injecting Premium Google Fonts & Special Styles */}
      <style dangerouslySetInnerHTML={{__html: "" + `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Syncopate:wght@400;700&display=swap');
        
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        html, body {
          overflow-x: clip;
          background-color: #03060d;
        }

        .font-wide {
          font-family: 'Syncopate', sans-serif;
        }

        .bg-tech-grid {
          background-image: 
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center center;
        }

        .noise-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none; z-index: 50; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .stripes-red {
          background: repeating-linear-gradient(-45deg, #ff3344, #ff3344 4px, transparent 4px, transparent 8px);
        }

        .text-hollow {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
          opacity: 0.3;
        }

        .cyber-core {
          position: relative;
          width: 280px; height: 400px;
          background: linear-gradient(135deg, #6a42c2 0%, #3b2073 100%);
          border-radius: 60px 60px 20px 20px;
          box-shadow: inset 0 10px 30px rgba(255,255,255,0.1), inset 0 -20px 40px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
        }
        .cyber-core::after {
          content: '';
          position: absolute; top:0; left:0; right:0; bottom:0;
          background: linear-gradient(90deg, transparent 49%, rgba(0,0,0,0.5) 50%, transparent 51%);
          background-size: 10px 100%;
          opacity: 0.3;
          mix-blend-mode: overlay;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      ` + ""}} />

      <div className="bg-tech-grid absolute inset-0 z-0 pointer-events-none"></div>
      <div className="noise-overlay"></div>

      {/* UI Framing / Borders */}
      <div className="absolute top-0 left-0 w-full h-2 bg-white/10 z-40 fixed"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10 z-40 fixed"></div>
      <div className="absolute top-0 left-0 w-2 h-full bg-white/10 z-40 hidden md:block fixed"></div>
      <div className="absolute top-0 right-0 w-2 h-full bg-white/10 z-40 hidden md:block fixed"></div>

      {/* Corner Crosshairs */}
      <div className="fixed top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white/30 z-40 hidden md:block"></div>
      <div className="fixed top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white/30 z-40 hidden md:block"></div>
      <div className="fixed bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-white/30 z-40 hidden md:block"></div>
      <div className="fixed bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white/30 z-40 hidden md:block"></div>

      {/* =========================================
           SECTION 1: HERO
           ========================================= */}
      <section className="relative min-h-screen flex flex-col pt-6 pb-12 overflow-hidden z-10">
        
        {/* Navbar */}
        <header className="relative z-50 flex justify-between items-center w-full px-6 md:px-10 lg:px-14 mt-4">
          <div className="text-lg md:text-2xl font-bold tracking-tight text-white">
            CRYPTX<sup className="text-[10px] md:text-xs font-normal text-white/70">2.0</sup>
          </div>

          <nav className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.15em] font-['Space_Grotesk',sans-serif] font-medium text-gray-400 pt-2">
            <a href="#tracks" className="hover:text-white transition-colors">Tracks</a>
            <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <Link to="/innovation" className="hover:text-[#ff3344] transition-colors">Innovation</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block border border-white/20 rounded-full px-6 py-2 text-[10px] font-['Space_Grotesk',sans-serif] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Secure Access
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 z-50 bg-[#03060d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-6">
            <a href="#tracks" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Tracks</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Timeline</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Contact</a>
            <Link to="/innovation" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-[#ff3344] transition-colors">Innovation</Link>
            <button className="mt-2 border border-white/30 rounded-full px-6 py-3 text-[10px] font-['Space_Grotesk'] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full">
              Secure Access
            </button>
          </div>
        )}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 mt-10">
            <h1 className="font-wide text-[18vw] leading-none text-hollow whitespace-nowrap tracking-tighter">
                INNOVA
            </h1>
        </div>

        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-10 mt-10">
            <div className="bg-white text-black p-2 font-bold text-xs tracking-widest">UD</div>
            <div className="w-px h-32 bg-white/20"></div>
            <span className="vertical-text transform rotate-180 font-bold text-xs tracking-widest text-[#f4f4f5] uppercase">Face Everything</span>
            <div className="w-px h-16 bg-white/20"></div>
            <span className="font-wide text-xs text-white">A1</span>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-10 mt-10">
            <h2 className="vertical-text font-wide text-5xl tracking-widest text-white/5 uppercase transform rotate-180">
                SYSTEM
            </h2>
            <div className="mt-8 flex flex-col items-center gap-2 text-gray-500 font-bold text-xs">
                <span>V</span><span>S</span><span>V</span><span>S</span>
            </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center flex-1 justify-center mt-32 md:mt-20">
            
            <div className="w-full max-w-5xl flex justify-between items-start mb-8 text-xs font-bold tracking-widest uppercase text-white/80">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center font-wide text-[10px]">Σ</div>
                    <div className="leading-tight">
                        <span className="text-white">GROUPE A</span><br/>
                        <span className="text-gray-500">JOUR 1</span>
                    </div>
                </div>
                <div className="text-right hidden sm:block">
                    <span className="text-white">MATCH LIVE</span><br/>
                    <span className="text-gray-500">{'>'} PLAY-OFF</span><br/>
                    <span className="text-[#ff3344]">{'>'} LOADING...</span>
                </div>
            </div>

            <div className="relative w-full flex justify-center items-center my-8 md:my-16">
                <div className="cyber-core flex flex-col items-center justify-center relative group">
                    <div className="absolute inset-x-0 top-10 h-px bg-white/20"></div>
                    <div className="absolute inset-x-0 bottom-20 h-px bg-black/40"></div>
                    
                    <div className="relative w-24 h-24 mb-4 z-20 transition-transform duration-700 group-hover:rotate-180">
                        <div className="absolute inset-0 bg-[#ff3344]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                        <div className="absolute inset-[4px] bg-[#03060d]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                        <div className="absolute inset-[10px] bg-[#ff3344] opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    </div>
                    
                    <div className="w-16 h-4 stripes-red mb-2 opacity-80"></div>
                    <div className="text-xs font-wide text-white/50 tracking-widest">CORE.SYS</div>
                </div>

                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-wide text-5xl md:text-7xl lg:text-[7.5rem] text-white tracking-tighter uppercase pointer-events-none drop-shadow-2xl leading-none">
                    INNO<br/>VATION
                </h1>
            </div>

            <div className="w-full max-w-5xl border-t border-white/20 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="flex border border-white/20 p-1 bg-[#08080a]">
                    <div className="px-4 py-2 border-r border-white/20 flex items-center gap-2">
                        <span className="text-[10px] text-gray-500">///</span>
                        <span className="font-bold text-xs tracking-wider text-white">FUZEFORGE</span>
                    </div>
                    <div className="bg-white/5 text-white px-4 py-2 flex flex-col justify-center leading-none">
                        <span className="font-wide text-[10px] tracking-widest">BOULOGNE</span>
                        <span className="font-wide text-[10px] tracking-widest text-gray-500">BILLANCOURT</span>
                    </div>
                </div>

                <a href="#tracks" className="group relative inline-flex items-center justify-center bg-white text-black px-10 py-5 overflow-hidden transition-all duration-300 hover:bg-[#ff3344] hover:text-white">
                    <div className="absolute inset-0 w-full h-full stripes-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative font-wide text-sm tracking-[0.2em] font-bold flex items-center gap-3">
                        REGISTER 
                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </span>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#03060d] group-hover:bg-white transition-colors duration-300" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
                </a>

            </div>
        </div>
      </section>

      {/* =========================================
          THE DISCIPLINES (TRACKS)
          ========================================= */}
      <section id="tracks" className="relative w-full bg-[#02040a] z-30 pt-16 pb-16 md:pt-32 md:pb-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          <div className="flex flex-col items-start gap-3 mb-12 md:mb-24">
            <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500">01 — The Disciplines</p>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white">The Disciplines.</h2>
            <p className="text-gray-400 font-light max-w-xl text-sm leading-relaxed mt-1">
              Four exclusive battlegrounds. Select your domain. Only the highest caliber operators will survive the preliminary protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Hackathon */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-all duration-700"></div>
              <img src="/logos/Hackathon Logo.png" alt="Hackathon" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Teams of 2-4</span>
                <span className="text-white/20">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Hackathon</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Build solutions that matter. Tackle real-world problem statements and ship functional software under extreme pressure.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Designathon */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[60px] group-hover:bg-purple-500/10 transition-all duration-700"></div>
              <img src="/logos/Designathon Logo.png" alt="Designathon" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Teams of 1-3</span>
                <span className="text-white/20">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Designathon</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Design with intent. Solve visual communication and UX challenges, delivering polished interfaces in a strict time window.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Ideathon */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] group-hover:bg-amber-500/10 transition-all duration-700"></div>
              <img src="/logos/Ideathon Logo.png" alt="Ideathon" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Teams of 2-4</span>
                <span className="text-white/20">03</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Ideathon</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Pitch your vision. Generate bold, innovative ideas that tackle real-world challenges and present them to a panel of industry experts.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* CTF Track */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-[60px] group-hover:bg-red-500/10 transition-all duration-700"></div>
              <img src="/logos/Capture The Flag Logo.png" alt="Capture The Flag" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Open to All</span>
                <span className="text-white/20">04</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Capture The Flag</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Hunt the flag. Exploit web vulnerabilities, break cryptography, reverse engineer binaries, and analyze memory dumps.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          LOGOS MARQUEE STRIP
          ========================================= */}
      <div className="relative w-full bg-[#02040a] border-t border-white/[0.04] py-14 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#02040a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#02040a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-24 px-12">
              {[
                { src: "/logos/CRYPTX2.0 Logo.png",      label: "CRYPTX2.0" },
                { src: '/logos/Hackathon Logo.png',        label: 'Hackathon' },
                { src: '/logos/Designathon Logo.png',      label: 'Designathon' },
                { src: '/logos/Ideathon Logo.png',         label: 'Ideathon' },
                { src: '/logos/Capture The Flag Logo.png', label: 'Capture The Flag' },
              ].map((logo, i) => (
                <div key={i} className="flex items-center gap-5 shrink-0 opacity-50 hover:opacity-90 transition-opacity duration-300 cursor-default select-none">
                  <img src={logo.src} alt={logo.label} className="h-16 w-auto object-contain" />
                  <span className="text-xs font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 whitespace-nowrap">{logo.label}</span>
                  <span className="text-white/10 text-2xl ml-10">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          METRICS & STATS SECTION
          ========================================= */}
      <section className="relative w-full bg-[#03060d] z-30 py-16 md:py-32 px-6 md:px-14 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 justify-between items-start">
          
          <div className="lg:w-1/3 flex flex-col justify-center w-full">
            <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">02 — Impact Metrics</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-4 leading-[0.9] text-white">Impact<br />Metrics.</h2>
            <p className="text-gray-400 font-light text-sm max-w-[280px] leading-relaxed">
              Stats defining the CRYPTX arena. The magnitude of the convergence is undeniable.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 w-full">
            <div className="flex flex-col border-l border-white/10 pl-6 group">
               <div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">1000<span className="text-white/30 text-4xl">+</span></div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Total<br/>Registrations</div>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-6 group">
               <div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">03</div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Challenge<br/>Tiers</div>
               <div className="mt-4 text-[8px] uppercase tracking-[0.1em] text-white/30 font-['Outfit'] border border-white/10 rounded-full px-3 py-1 inline-block w-max">
                 Entry / Int. / Root
               </div>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-6 group">
               <div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">25<span className="text-white/30 text-4xl">+</span></div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Universities<br/>Linked</div>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-6 group">
               <div className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">09</div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Track<br/>Winners</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
           SECTION 2: TIMELINE (ROADMAP)
           ========================================= */}
      <section id="timeline" className="relative py-24 bg-[#03060d] overflow-hidden z-30">
          <div className="absolute top-0 right-10 w-px h-full bg-white/5"></div>
          <div className="absolute top-0 right-14 w-px h-full bg-white/5"></div>
          
          <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
              <div className="flex items-end gap-6 mb-20 border-b border-white/20 pb-4">
                  <h2 className="font-wide text-5xl md:text-7xl tracking-tighter text-white uppercase leading-none">
                      TIMELINE
                  </h2>
                  <div className="hidden md:flex flex-col text-xs font-bold tracking-widest text-gray-500 mb-2">
                      <span>STATUS: ACTIVE</span>
                      <span>SEQ: 004.89</span>
                  </div>
                  <div className="ml-auto w-16 h-8 stripes-red"></div>
              </div>

              <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2"></div>
                  <div className="space-y-16">
                      <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                          <div className="absolute left-[-5.5px] md:left-1/2 top-0 w-3 h-3 bg-[#03060d] border-2 border-white/50 transform md:-translate-x-1/2 md:translate-y-2 rounded-full z-10 group-hover:bg-[#ff3344] group-hover:border-[#ff3344] group-hover:scale-150 transition-all duration-300"></div>
                          <div className="w-full md:w-[45%] pl-8 md:pl-0 md:text-right">
                              <div className="inline-flex items-center gap-3 bg-white text-black px-3 py-1 mb-4">
                                  <span className="font-wide text-xs">PHASE 01</span>
                              </div>
                              <h3 className="font-wide text-2xl mb-3 text-white">SYSTEM BOOT</h3>
                              <p className="text-sm text-gray-400 leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-white/20 pl-4 md:pl-0 md:pr-4">
                                  Initializing primary protocols. Establishing secure connections to the mainframe and deploying initial aesthetic parameters. Standby for data injection.
                              </p>
                          </div>
                          <div className="hidden md:block w-[45%]"></div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                          <div className="absolute left-[-5.5px] md:left-1/2 top-0 w-3 h-3 bg-[#03060d] border-2 border-white/50 transform md:-translate-x-1/2 md:translate-y-2 rounded-full z-10 group-hover:bg-purple-500 group-hover:border-purple-500 group-hover:scale-150 transition-all duration-300"></div>
                          <div className="hidden md:block w-[45%]"></div>
                          <div className="w-full md:w-[45%] pl-8 md:pl-8">
                              <div className="inline-flex items-center gap-3 bg-[#6a42c2] text-white px-3 py-1 mb-4">
                                  <span className="font-wide text-xs">PHASE 02</span>
                              </div>
                              <h3 className="font-wide text-2xl mb-3 text-white">ASSET DEPLOYMENT</h3>
                              <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-[#6a42c2]/50 pl-4">
                                  Constructing cyber-physical representations. Armor integrity at 100%. Synchronizing visual layers with audio cues. The stage is set.
                              </p>
                          </div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                          <div className="absolute left-[-5.5px] md:left-1/2 top-0 w-3 h-3 bg-[#03060d] transform md:-translate-x-1/2 md:translate-y-2 z-10 border-2 border-[#ff3344] ring-4 ring-transparent group-hover:bg-[#ff3344] group-hover:rotate-45 transition-all duration-300"></div>
                          <div className="w-full md:w-[45%] pl-8 md:pl-0 md:text-right">
                              <div className="inline-flex items-center gap-3 bg-[#ff3344] text-white px-3 py-1 mb-4">
                                  <span className="font-wide text-xs">PHASE 03</span>
                              </div>
                              <h3 className="font-wide text-2xl mb-3 text-white">ENGAGEMENT</h3>
                              <p className="text-sm text-gray-400 leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-[#ff3344]/50 pl-4 md:pl-0 md:pr-4">
                                  Registration opens. User acquisition commences. Face everything. The underdog protocol is now active.
                              </p>
                          </div>
                          <div className="hidden md:block w-[45%]"></div>
                      </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 bottom-[-40px] w-8 h-8 bg-[#03060d] border border-white/20 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 border border-white/50"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* =========================================
          COMMAND & INTEL (CONTACT)
          ========================================= */}
      <section id="contact" className="relative w-full bg-[#03060d] z-30 py-16 md:py-32 px-6 md:px-14 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-20 gap-6">
            <div>
              <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">04 — Team</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-white">Meet the<br/>Team.</h2>
            </div>
            <p className="text-gray-500 font-light text-sm max-w-[300px] leading-relaxed">
              Key personnel and contacts. Reach out to the respective coordinators for queries.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Raviru Rathnaweera", role: "President — ICTS" },
              { name: "Nuwan Konara", role: "CTF Coordinator" },
              { name: "Dulanga Perera", role: "Designathon Coord" },
              { name: "Yesith Hansana", role: "Hackathon Coord" }
            ].map((person, idx) => (
              <div key={idx} className="bg-[#08080a] border border-white/5 hover:border-white/15 p-6 md:p-8 flex flex-col justify-between min-h-[140px] md:aspect-square group transition-all duration-500 rounded-sm overflow-hidden">
                <div className="text-[9px] md:text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">
                  {person.role}
                </div>
                <div className="text-base md:text-xl font-bold tracking-tight text-white/70 group-hover:text-white transition-colors leading-[1.2]">
                  {person.name}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* =========================================
          FAQ SECTION
          ========================================= */}
      <section className="relative w-full bg-[#02040a] z-30 py-16 md:py-32 px-6 md:px-14 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
           <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">05 — FAQ</p>
           <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mb-10 md:mb-16 text-white">Frequently Asked.</h2>
           
           <div className="space-y-3">
             {faqs.map((faq, index) => (
               <div key={index} className="border border-white/5 bg-[#08080a] hover:border-white/10 transition-all duration-300 rounded-sm">
                 <button 
                   className="w-full text-left px-5 md:px-8 py-5 md:py-6 flex justify-between items-center group"
                   onClick={() => toggleFaq(index)}
                 >
                   <span className="font-['Space_Grotesk'] tracking-wide text-sm text-gray-300 group-hover:text-white transition-colors pr-4">{faq.q}</span>
                   <div className="border border-white/10 rounded-full p-2 group-hover:border-white/30 transition-colors shrink-0">
                     {openFaq === index ? <Minus className="text-white/60 w-3 h-3" /> : <Plus className="text-white/40 w-3 h-3 group-hover:text-white/70" />}
                   </div>
                 </button>
                 {openFaq === index && (
                   <div className="px-5 md:px-8 pb-6 text-gray-400 text-sm font-light leading-relaxed border-t border-white/[0.05] pt-5">
                     {faq.a}
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
          ========================================= */}
      <footer className="relative w-full bg-[#03060d] z-30 pt-16 md:pt-32 pb-10 md:pb-12 px-6 md:px-14 overflow-hidden border-t border-white/[0.05]">

        {/* katana.png — centered background image */}
        <img
          src="/katana.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-contain opacity-60 pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
            <div className="col-span-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-6 text-white">
                CRYPTX<sup className="text-sm md:text-base font-normal">2.0</sup>
              </div>
              <p className="text-gray-300 text-sm max-w-sm leading-relaxed font-light">
                Sri Lanka's only event where Builders, Designers, and Hackers compete on the same stage.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Event Overview</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">The Disciplines</a></li>
                <li><a href="#timeline" className="hover:text-white transition-colors">Timeline</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Team</a></li>
                <li><Link to="/innovation" className="hover:text-purple-300 transition-colors">Innovation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 mb-6">Network</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Linkedin className="w-4 h-4 text-white/40"/> LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Instagram className="w-4 h-4 text-white/40"/> Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><Facebook className="w-4 h-4 text-white/40"/> Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 font-['Space_Grotesk'] tracking-[0.15em] uppercase">
            <div>© 202.0 ICTS, Faculty of Technology, USJ. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}