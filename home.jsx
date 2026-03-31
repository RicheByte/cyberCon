import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Terminal, PenTool, Shield, Plus, Minus, Github, Linkedin, Instagram, Facebook, Lightbulb } from 'lucide-react';
import bgVid from './vid.mp4';

export default function App() {
  const base = import.meta.env.BASE_URL;
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState('Innovation Ceremony');
  const videoRef = useRef(null);
  const heroContainerRef = useRef(null);

  const timelines = {
    "Innovation Ceremony": [
      { date: "Mar 27", title: "Registration Opens", desc: "Your shot begins now. Spots are limited, competition is fierce.", baseDot: "bg-amber-500", hoverDot: "group-hover:bg-amber-400 group-hover:scale-150" },
      { date: "Apr 4", title: "Info Sessions", desc: "Learn what separates winners from everyone else.", baseDot: "bg-amber-500/50", hoverDot: "group-hover:bg-amber-400/80 group-hover:scale-150" },
      { date: "Apr 12", title: "Registration Closes", desc: "Last chance to lock in your spot. Move fast.", baseDot: "bg-amber-500/50", hoverDot: "group-hover:bg-amber-400/80 group-hover:scale-150" },
      { date: "Apr 13", title: "Proposal Kit Released", desc: "Everything you need to craft a killer pitch is here.", baseDot: "bg-amber-500/50", hoverDot: "group-hover:bg-amber-400/80 group-hover:scale-150" },
      { date: "Apr 19", title: "Final Push", desc: "Last reminder before the deadline. Make your idea shine.", baseDot: "bg-amber-500/50", hoverDot: "group-hover:bg-amber-400/80 group-hover:scale-150" },
      { date: "Apr 20", title: "Proposals Due", desc: "Time's up. Your vision is now in their hands.", baseDot: "bg-amber-500/50", hoverDot: "group-hover:bg-amber-400/80 group-hover:scale-150" },
      { date: "May 22", title: "Innovation Ceremony", desc: "Present to industry titans. This is your moment.", baseDot: "bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]", hoverDot: "group-hover:scale-125", highlight: true },
      { date: "May 25", title: "Champions Crowned", desc: "The best ideas rise. Celebrate the victory.", baseDot: "bg-amber-500/50", hoverDot: "group-hover:bg-amber-400/80 group-hover:scale-150" }
    ],
    "Designathon": [
      { date: "Apr 27", title: "Registration Opens", desc: "Designathon registration portal is live.", baseDot: "bg-purple-500", hoverDot: "group-hover:bg-purple-400 group-hover:scale-150" },
      { date: "May 10-11", title: "Awareness Sessions", desc: "Introductory sessions on design principles and tools.", baseDot: "bg-purple-500/50", hoverDot: "group-hover:bg-purple-400/80 group-hover:scale-150" },
      { date: "May 15", title: "Registration Closes", desc: "Final deadline for Designathon registration.", baseDot: "bg-purple-500/50", hoverDot: "group-hover:bg-purple-400/80 group-hover:scale-150" },
      { date: "May 18", title: "Workshop", desc: "Design workshop and final preparations.", baseDot: "bg-purple-500/50", hoverDot: "group-hover:bg-purple-400/80 group-hover:scale-150" },
      { date: "May 22", title: "Event Day", desc: "Designathon competition takes place.", baseDot: "bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]", hoverDot: "group-hover:scale-125", highlight: true },
      { date: "May 25", title: "Winners Announced", desc: "Results and winners celebration.", baseDot: "bg-purple-500/50", hoverDot: "group-hover:bg-purple-400/80 group-hover:scale-150" }
    ],
    "Hackathon": [
      { date: "Apr 27", title: "Registration Opens", desc: "Form your team of 2-4 members.", baseDot: "bg-blue-500", hoverDot: "group-hover:bg-blue-400 group-hover:scale-150" },
      { date: "May 10-11", title: "Awareness Sessions", desc: "Introductory sessions on development practices.", baseDot: "bg-blue-500/50", hoverDot: "group-hover:bg-blue-400/80 group-hover:scale-150" },
      { date: "May 16", title: "Registration Closes", desc: "Final deadline for Hackathon registration.", baseDot: "bg-blue-500/50", hoverDot: "group-hover:bg-blue-400/80 group-hover:scale-150" },
      { date: "May 19", title: "Workshop", desc: "Development workshop and final preparations.", baseDot: "bg-blue-500/50", hoverDot: "group-hover:bg-blue-400/80 group-hover:scale-150" },
      { date: "May 23", title: "Event Day", desc: "24-hour sprint and final presentations.", baseDot: "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]", hoverDot: "group-hover:scale-125", highlight: true },
      { date: "May 25", title: "Winners Announced", desc: "Results and winners celebration.", baseDot: "bg-blue-500/50", hoverDot: "group-hover:bg-blue-400/80 group-hover:scale-150" }
    ],
    "CTF": [
      { date: "Apr 25-26", title: "Awareness Sessions", desc: "Learn about CTF challenges and strategies.", baseDot: "bg-red-500", hoverDot: "group-hover:bg-red-400 group-hover:scale-150" },
      { date: "Apr 27", title: "Registration Opens", desc: "CTF registration portal is live.", baseDot: "bg-red-500/50", hoverDot: "group-hover:bg-red-400/80 group-hover:scale-150" },
      { date: "May 4", title: "Registration Closes", desc: "Final deadline for CTF registration.", baseDot: "bg-red-500/50", hoverDot: "group-hover:bg-red-400/80 group-hover:scale-150" },
      { date: "May 7", title: "Workshop", desc: "CTF workshop and preparation session.", baseDot: "bg-red-500/50", hoverDot: "group-hover:bg-red-400/80 group-hover:scale-150" },
      { date: "May 11", title: "Qualifier Day", desc: "CTF qualification round begins.", baseDot: "bg-red-500/50", hoverDot: "group-hover:bg-red-400/80 group-hover:scale-150" },
      { date: "May 11", title: "Top 10 Finalists Announced", desc: "Top 10 teams advance to finals.", baseDot: "bg-red-500/50", hoverDot: "group-hover:bg-red-400/80 group-hover:scale-150" },
      { date: "May 24", title: "War Room Setup", desc: "Final preparations and war room setup.", baseDot: "bg-red-500/50", hoverDot: "group-hover:bg-red-400/80 group-hover:scale-150" },
      { date: "May 25", title: "CTF Finals Day", desc: "Intense on-site cyber warfare.", baseDot: "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]", hoverDot: "group-hover:scale-125", highlight: true }
    ]
  };

  useEffect(() => {
    let targetTime = 0;
    let currentTime = 0;
    let rafId = null;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const tick = () => {
      const video = videoRef.current;
      if (!video) return;

      currentTime = lerp(currentTime, targetTime, 0.1);

      // Snap when close enough to avoid endless tiny updates
      if (Math.abs(currentTime - targetTime) < 0.01) {
        currentTime = targetTime;
      }

      video.currentTime = currentTime;

      if (currentTime !== targetTime) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const handleScroll = () => {
      const video = videoRef.current;
      const container = heroContainerRef.current;
      if (!video || !container || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const scrollDistance = rect.height - window.innerHeight;
      if (scrollDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);
      targetTime = progress * video.duration;

      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "What's the actual vibe here?", a: "This isn't your average hackathon. It's where the brightest tech minds collide, compete, and create. You'll be surrounded by builders, designers, and security experts pushing boundaries." },
    { q: "Can I join multiple tracks?", a: "One track per person — go all-in on your specialty. We designed it this way so you can unleash your full potential without spreading yourself thin." },
    { q: "How much does it cost?", a: "Ideathon is completely free — we're betting on innovation, not budgets. Hackathon, Designathon, and CTF have registration fees to cover costs. But spots are limited across all tracks, so move fast if you're serious." },
    { q: "Where do we battle it out?", a: "Right here in the Saegis campus. This is where legends are made." }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#03060d] text-[#f4f4f5] font-['Outfit',sans-serif] selection:bg-blue-500/30">
      
      {/* Injecting Premium Google Fonts & Special Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
        
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

        .cyber-grid {
          background-image: linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .clip-edges {
          clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
        }

        .cyber-border-gradient {
          position: relative;
        }
        .cyber-border-gradient::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.4), rgba(255, 255, 255, 0.05), transparent 50%, rgba(255, 255, 255, 0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
          pointer-events: none;
        }
      `}} />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '16.666% 100%'
        }}
      />

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-14 py-6 border-b border-white/10 bg-black/60 backdrop-blur-md shadow-2xl shadow-black/50">
        {/* Logo */}
        <div className="flex items-center">
          <img src={`${base}logos/Cybercon'26 Logo.png`} alt="CYBERCON'26" className="h-7 sm:h-10 md:h-14 w-auto object-contain" />
        </div>

        {/* Center Nav — desktop only */}
        <nav className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.15em] font-['Space_Grotesk',sans-serif] font-medium text-gray-300 pt-1">
          <a href="#about" className="hover:text-white transition-colors duration-300 drop-shadow-md">Event</a>
          <a href="#tracks" className="hover:text-white transition-colors duration-300 drop-shadow-md">Tracks</a>
          <a href="#timeline" className="hover:text-white transition-colors duration-300 drop-shadow-md">Timeline</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300 drop-shadow-md">Contact</a>
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
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Event</a>
          <a href="#tracks" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Tracks</a>
          <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Timeline</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] font-['Space_Grotesk'] text-gray-300 hover:text-white transition-colors">Contact</a>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 border border-white/30 bg-white/5 rounded-sm px-6 py-3 text-[10px] font-['Space_Grotesk'] uppercase tracking-widest hover:bg-white hover:text-black active:bg-white active:text-black active:shadow-[0_0_30px_rgba(255,255,255,0.9)] active:scale-[0.98] active:duration-75 transition-all duration-300 w-full shadow-[0_0_15px_rgba(255,255,255,0.1)] group text-gray-300">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white group-hover:bg-black group-active:bg-black"></span>
            </span>
            Register Now
          </Link>
        </div>
      )}

      {/* --- HERO SCROLL CONTAINER --- */}
      {/* Set height to allow scrolling while the content remains sticky. 
          250vh means 1 viewport height for display, and 1.5 viewport heights for scrubbing distance */}
      <div ref={heroContainerRef} className="relative z-10 w-full h-[250vh]">
        {/* --- HERO STICKY CONTENT --- */}
        <div className="sticky top-0 left-0 w-full h-screen flex flex-col pt-32 p-6 md:px-10 lg:px-14 overflow-hidden bg-[#03060d]">
        
        {/* Central Custom Image & Lighting (Hero Only) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Smooth gradient transition to hide any sharp edges at the top */}
          <div className="absolute top-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-[#03060d] via-[#03060d]/90 to-transparent z-10" />

          {/* Glow behind character */}
          <div className="absolute inset-0 flex items-center justify-center translate-y-[8vh]">
            <div className="absolute w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-[#608bce] rounded-full blur-[140px] opacity-20 mix-blend-screen" />
          </div>
          
          <video 
            ref={videoRef}
            src={bgVid} 
            className="absolute inset-0 w-full h-full object-cover object-top translate-y-[10vh] md:translate-y-[12vh] scale-[1.02]"
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            }}
          />
          
          {/* Mobile dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 md:hidden z-20 pointer-events-none" />
        </div>

        {/* Main Hero Content Layout */}
        <main className="flex-1 relative w-full mt-10 md:mt-0 z-30">
          
          {/* Mobile layout: stacked headline + date + button */}
          <div className="md:hidden flex flex-col h-full items-center text-center px-4 relative">
            <div className="absolute inset-0 bg-black/30 blur-[40px] -z-10 rounded-full" />
            <h1 className="text-5xl font-bold tracking-[-0.04em] leading-[0.95] mb-6 drop-shadow-2xl">
              Think. Create.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white font-medium">Dominate.</span><br />
              Win it all.
            </h1>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[300px] mb-8">
              Four tracks. One mission. Prove you're the best in the game.
            </p>
            <div className="text-2xl font-medium tracking-[-0.04em] leading-none text-white/80 mb-2">
              April 04<sup className="text-sm -top-2">th</sup>, 202.0
            </div>
            <div className="text-gray-500 text-sm font-light tracking-wide mb-10">ICT club of saegis campus</div>
            
            <a href="#tracks" className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:bg-white/10 hover:scale-105 transition-all duration-500 cursor-pointer group">
              <span className="text-[8px] font-['Space_Grotesk',sans-serif] uppercase tracking-widest text-white/90">Enter</span>
              <ArrowDown size={10} className="text-white/60 group-hover:text-white transition-colors group-hover:translate-y-1 duration-300" strokeWidth={1.5} />
            </a>
          </div>

          {/* Desktop layout: absolute positioned corners */}
          {/* Top Left: Main Headline */}
          <div className="hidden md:block md:absolute md:top-[15%] md:left-0 max-w-[450px]">
            <h1 className="text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.9] mb-6 drop-shadow-2xl">
              Think. Create.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white font-medium">Dominate.</span><br />
              Win it all.
            </h1>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[280px]">
              The ultimate playground where innovators battle, designers shine, coders sprint, and hackers hunt flags. Your moment is now.
            </p>
          </div>

          {/* Top Right: Secondary Headline */}
          <div className="hidden md:block md:absolute md:top-[15%] md:right-0 max-w-[320px]">
            <h2 className="text-5xl font-medium tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              Your Battleground<br />Awaits.
            </h2>
            <p className="text-[9px] font-['Space_Grotesk',sans-serif] text-gray-400 uppercase tracking-[0.2em] leading-[1.8] text-justify opacity-80">
              Sri Lanka's most intense tech competition. Pick your weapon. Learn from the best. Compete like you mean it. Walk away as a legend.
            </p>
          </div>

          {/* Bottom Left: Detail Text */}
          <div className="hidden md:block md:absolute md:bottom-[5%] md:left-0 max-w-[280px]">
            <h3 className="text-xl font-medium tracking-tight mb-4">
              Ready to Challenge Yourself?
            </h3>
            <p className="text-[9px] font-['Space_Grotesk',sans-serif] text-gray-500 uppercase tracking-[0.15em] leading-[1.8] mb-6 text-justify">
              <span className="text-gray-300">CODE</span> THE FUTURE, DESIGN BRILLIANCE, PITCH GAME-CHANGERS, AND HUNT DIGITAL FLAGS. THIS IS YOUR SHOT.
            </p>
          </div>

          {/* Bottom Right: Date & Location */}
          <div className="hidden md:block md:absolute md:bottom-[5%] md:right-0 text-right">
            <div className="text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-none mb-2 drop-shadow-lg">
              April<br />
              04<sup className="text-4xl -top-4">th</sup>, 202.0
            </div>
            <div className="text-gray-400 text-base font-light tracking-wide">
              ICT club of saegis campus
            </div>
          </div>

          {/* Center Bottom: Enter Button — desktop only */}
          <div className="hidden md:flex absolute bottom-[10%] left-1/2 -translate-x-1/2 flex-col items-center">
            <a href="#tracks" className="w-32 h-32 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:scale-105 transition-all duration-500 cursor-pointer group">
              <span className="text-[10px] font-['Space_Grotesk',sans-serif] uppercase tracking-widest text-white/90">Enter</span>
              <ArrowDown size={12} className="text-white/60 group-hover:text-white transition-colors group-hover:translate-y-1 duration-300" strokeWidth={1.5} />
            </a>
          </div>

        </main>
        

      </div>
      </div>

      {/* =========================================
          THE DISCIPLINES (TRACKS)
          ========================================= */}
      <section id="tracks" className="relative w-full bg-[#02040a] z-30 pt-16 pb-16 md:pt-32 md:pb-32 px-6 md:px-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          <div className="flex flex-col items-start gap-3 mb-12 md:mb-24">
            <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">01 — Your Arsenal</p>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white">Choose Your Weapon.</h2>
            <p className="text-gray-400 font-light max-w-xl text-sm leading-relaxed mt-1">
              Four unique tracks. Four different ways to prove your excellence. Which legend will you become?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Hackathon */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-all duration-700"></div>
              <img src={`${base}logos/Hackathon Logo.png`} alt="Hackathon" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Teams of 2-4</span>
                <span className="text-white/20">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Hackathon</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Code against the clock. 24 hours to turn your vision into reality. Build fast, ship harder, prove yourself against the best developers on the island.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Designathon */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[60px] group-hover:bg-purple-500/10 transition-all duration-700"></div>
              <img src={`${base}logos/Designathon Logo.png`} alt="Designathon" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Teams of 1-3</span>
                <span className="text-white/20">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Designathon</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Design under pressure. Create beautiful, functional interfaces that solve real problems. Your pixels will speak louder than words.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Ideathon */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] group-hover:bg-amber-500/10 transition-all duration-700"></div>
              <img src={`${base}logos/Ideathon Logo.png`} alt="Ideathon" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Teams of 2-4</span>
                <span className="text-white/20">03</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Ideathon</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Innovate fearlessly. Pitch ideas that could change the world. Impress industry titans and propel your concept from napkin to reality.
              </p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <a href="#" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-400 hover:text-white transition-colors group/link">
                View Details <ArrowDown className="w-3 h-3 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* CTF Track */}
            <div className="group relative bg-[#08080a] border border-white/5 hover:border-white/15 p-8 rounded-sm transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-[60px] group-hover:bg-red-500/10 transition-all duration-700"></div>
              <img src={`${base}logos/Capture The Flag Logo.png`} alt="Capture The Flag" className="w-10 h-10 object-contain mb-8 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="text-[10px] font-['Space_Grotesk'] text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Open to All</span>
                <span className="text-white/20">04</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Capture The Flag</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                Hack with purpose. Exploit vulnerabilities, crack encryption, reverse engineer code. Become the ethical hacker everyone talks about.
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
      <div className="relative w-full bg-[#02040a] border-t border-white/[0.04] py-8 md:py-14 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#02040a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#02040a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              {[
                { src: `${base}logos/Cybercon'26 Logo.png`,      label: "CYBERCON'26" },
                { src: `${base}logos/Hackathon Logo.png`,        label: 'Hackathon' },
                { src: `${base}logos/Designathon Logo.png`,      label: 'Designathon' },
                { src: `${base}logos/Ideathon Logo.png`,         label: 'Ideathon' },
                { src: `${base}logos/Capture The Flag Logo.png`, label: 'Capture The Flag' },
              ].map((logo, i) => (
                <div key={i} className="flex items-center shrink-0 opacity-50 hover:opacity-90 transition-opacity duration-300 cursor-default select-none">
                  <img src={logo.src} alt={logo.label} className="h-12 md:h-16 w-auto object-contain" />
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
            <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">02 — The Numbers</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-4 leading-[0.9] text-white">By The Numbers.</h2>
            <p className="text-gray-400 font-light text-sm max-w-[280px] leading-relaxed">
              This isn't just talk. These numbers represent something real: the rise of Sri Lanka's tech renaissance.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-16 w-full mt-10 lg:mt-0">
            <div className="flex flex-col border-l border-white/10 pl-5 md:pl-6 group">
               <div className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">1000<span className="text-white/30 text-2xl md:text-4xl">+</span></div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Total<br/>Registrations</div>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-5 md:pl-6 group">
               <div className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">03</div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Challenge<br/>Tiers</div>
               <div className="mt-3 md:mt-4 text-[8px] uppercase tracking-[0.1em] text-white/30 font-['Outfit'] border border-white/10 rounded-full px-2 py-1 md:px-3 inline-block w-max">
                 Entry / Int. / Root
               </div>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-5 md:pl-6 group">
               <div className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">25<span className="text-white/30 text-2xl md:text-4xl">+</span></div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Universities<br/>Linked</div>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-5 md:pl-6 group">
               <div className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors">09</div>
               <div className="text-[9px] uppercase tracking-[0.2em] font-['Space_Grotesk'] text-gray-500 mt-2">Track<br/>Winners</div>
            </div>
          </div>

        </div>
      </section>
      {/* =========================================
          OPERATIONAL TIMELINE
          ========================================= */}
      <section id="timeline" className="relative w-full bg-[#02040a] z-30 border-t border-white/[0.05] flex flex-col lg:flex-row">

        {/* LEFT — timeline content */}
        <div className="w-full lg:w-1/2 py-12 md:py-32 px-6 md:px-14 lg:pl-52 lg:pr-10">
          
          <div className="mb-10 md:mb-16">
            <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-3">03 — The Countdown</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-3 text-white">When It Happens.</h2>
            <p className="text-gray-400 font-light text-sm">Everything's scheduled. Now it's on you. Don't miss your window of opportunity.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-10 md:mb-16 overflow-x-auto no-scrollbar py-2">
            {Object.keys(timelines).map((track) => (
              <button
                key={track}
                onClick={() => setActiveTimeline(track)}
                className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-['Space_Grotesk'] uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  activeTimeline === track 
                  ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'border border-white/20 text-gray-400 hover:text-white hover:border-white/50'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          <div className="relative border-l border-white/10 ml-[2px] space-y-8 md:space-y-16 py-4">
            <div className="absolute top-0 left-[-1px] w-[2px] h-[30%] bg-gradient-to-b from-white/30 to-transparent transition-all duration-500"></div>
            
            {timelines[activeTimeline].map((item, idx) => (
              <div key={idx} className="relative pl-5 md:pl-16 group">
                <div className={`absolute -left-[4px] w-2 h-2 rounded-full transition-all duration-300 ${item.baseDot} ${item.hoverDot} ${item.highlight ? 'top-[22px] md:top-[28px] -left-[5px] w-3 h-3' : 'top-[7px]'}`} />
                
                {item.highlight ? (
                  <>
                    <div className="inline-block border border-white/20 rounded-full px-3 py-1 text-[10px] font-['Space_Grotesk'] tracking-[0.15em] text-white/70 mb-2">{item.date}</div>
                    <h4 className="text-2xl md:text-5xl font-bold tracking-tight mb-2 text-white">{item.title}</h4>
                  </>
                ) : (
                  <>
                    <div className="text-[10px] font-['Space_Grotesk'] tracking-[0.2em] text-gray-400 mb-1">{item.date}</div>
                    <h4 className="text-lg md:text-3xl font-bold tracking-tight mb-1 text-white/90">{item.title}</h4>
                  </>
                )}
                <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT — image: full-width on mobile, half-width panel on desktop */}
        {/* Mobile / Tablet view */}
        <div className="lg:hidden w-full">
          <img
            src={`${base}bending.png`}
            alt=""
            className="w-full h-auto block"
          />
        </div>
        {/* Desktop view */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden min-h-[600px] lg:absolute lg:top-0 lg:right-0 lg:h-full">
          <img
            src={`${base}bending.png`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
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
              The masterminds behind the madness. Your questions, answered. Your support, delivered.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Raviru Rathnaweera", role: "President — ICTS" },
              { name: "Nuwan Konara", role: "CTF Coordinator" },
              { name: "Dulanga Perera", role: "Designathon Coord" },
              { name: "Yesith Hansana", role: "Hackathon Coord" },
              { name: "Ideathon Coordinator", role: "Ideathon Coord" }
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
           <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-500 mb-4">05 — Questions?</p>
           <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mb-10 md:mb-16 text-white">Got Questions? We've Got Answers.</h2>
           
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
          src={`${base}katana.png`}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-contain opacity-60 pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
            <div className="col-span-2">
              <div className="mb-4 md:mb-6">
                <img src={`${base}logos/Cybercon'26 Logo.png`} alt="CYBERCON'26" className="h-12 md:h-16 w-auto object-contain" />
              </div>
              <p className="text-gray-300 text-sm max-w-sm leading-relaxed font-light">
                Where innovation collides with ambition. Where Sri Lanka's brightest minds come to compete, inspire, and create magic together.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-gray-300 mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Event Overview</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">The Disciplines</a></li>
                <li><a href="#timeline" className="hover:text-white transition-colors">Timeline</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Team</a></li>
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
            <div>© 202.0 ICTS, ICT club of saegis campus. All rights reserved.</div>
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
