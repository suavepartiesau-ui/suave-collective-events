import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Zap,
  Heart,
  Globe,
  Music,
  Briefcase,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const SuaveSponsorship = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('corporate'); // 'corporate' or 'community'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data Structure
  const content = {
    corporate: {
      headline: "Corporate Dominance",
      subheadline: "Stop buying logo placements. Start building cultural capital.",
      stats: [
        { label: "Return on Investment", value: "350%", icon: TrendingUp },
        { label: "Total Audience Reach", value: "5.6M", icon: Users },
        { label: "VIP Guests Hosted", value: "12k", icon: Award },
        { label: "Brand Activations", value: "45+", icon: Zap }
      ]
    },
    community: {
      headline: "Community Impact",
      subheadline: "We don't just host events. We feed the ecosystem.",
      stats: [
        { label: "Artists Supported", value: "150+", icon: Heart },
        { label: "Cultural Export Value", value: "$2.4M", icon: Globe },
        { label: "Hours of Live Music", value: "850+", icon: Music },
        { label: "Youth Pathways", value: "120", icon: Briefcase }
      ]
    }
  };

  const opportunities = [
    {
      title: 'Hyper-Targeted Activation',
      desc: 'Direct access to high-net-worth individuals and cultural tastemakers in an environment they trust.',
      icon: Zap
    },
    {
      title: 'Content & Digital dominance',
      desc: 'Your brand woven into our cinematic recap reels and viral social campaigns.',
      icon: TrendingUp
    },
    {
      title: 'VIP Hospitality & Networking',
      desc: 'Exclusive tables and backstage access for your key stakeholders and clients.',
      icon: Award
    }
  ];

  const communityPillars = [
    {
      title: 'Artist Development',
      desc: 'Providing platforms for local talent to share stages with international headliners.',
      icon: Music
    },
    {
      title: 'Youth Pathways',
      desc: 'Mentorship and stage time for emerging talent pipelines.',
      icon: Users
    },
    {
      title: 'Cultural Accessibility',
      desc: 'Subsidized tickets ensuring art remains accessible to everyone.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white">

      {/* Slimline Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-white/10 ${scrolled ? 'bg-black py-4' : 'bg-black/90 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo Integration */}
          <div className="flex items-center space-x-4">
             <div className="h-10 w-10">
                <img 
                    src="/logo.png" 
                    alt="Suave Collective" 
                    className="h-full w-full object-contain" 
                />
             </div>
             <span className="font-serif text-xl tracking-wide font-bold hidden md:block">THE SUAVE COLLECTIVE</span>
          </div>

          {/* Desktop Links - Minimalist */}
          <div className="hidden md:flex items-center space-x-12">
            {['Manifesto', 'Events', 'Talent'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
            <button className="text-xs uppercase tracking-[0.2em] font-bold border-b border-white pb-1 hover:text-pink-500 hover:border-pink-500 transition-all">
              Partner Access
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
           <div className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 py-8 px-6 flex flex-col space-y-6 md:hidden">
              {['Manifesto', 'Events', 'Talent'].map((item) => (
                <a key={item} href="#" className="text-lg font-serif tracking-wide text-white/80">{item}</a>
              ))}
           </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block border border-pink-500/50 rounded-full px-4 py-1 mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-pink-500">2026 Season</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif mb-8 tracking-tighter leading-none">
            Culture <br />
            <span className="italic text-zinc-500">Curated.</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed tracking-wide mb-10">
            We bridge the gap between premium brand strategy and authentic community impact. No fluff. Just results.
          </p>
          
          <button className="group relative px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all hover:bg-pink-500 hover:text-white">
            <span className="relative z-10 flex items-center gap-2">
              Explore Opportunities <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </section>

      {/* Director Portrait Section */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2">
               {/* Image Column */}
               <div className="relative h-[600px] md:h-auto w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="/profile1.jpg" 
                    alt="Director Portrait" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                     <p className="text-xs font-bold tracking-[0.2em] uppercase text-pink-500 mb-2">The Founder</p>
                     <h3 className="text-3xl font-serif text-white">Jevon Santoso</h3>
                  </div>
               </div>

               {/* Text Column */}
               <div className="flex flex-col justify-center p-8 md:p-16 bg-black border-l border-white/5">
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                     "We don't just occupy space. <br/> <span className="text-zinc-500 italic">We define it.</span>"
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                     The Suave Collective was born from a refusal to accept the mediocre. In a city teeming with potential, we saw a gap between raw talent and world-class execution.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                     We operate at the intersection of nightlife, corporate precision, and artistic chaos. Our mission is simple: to build platforms where brands don't just advertise—they become part of the cultural fabric.
                  </p>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-pink-500 pl-6 italic">
                     When you partner with us, you aren't hiring an agency. You are joining a movement that is reshaping the identity of South Australia.
                  </p>
                  
                  <div className="mt-12">
                     <img src="/logo.png" alt="Signature" className="h-12 opacity-50 invert" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 mb-16 border-b border-white/10 pb-4">
             <button 
                onClick={() => setActiveTab('corporate')}
                className={`text-xs uppercase tracking-[0.2em] pb-4 transition-all ${activeTab === 'corporate' ? 'text-white border-b border-pink-500' : 'text-zinc-600 hover:text-white'}`}
             >
                Corporate Strategy
             </button>
             <button 
                onClick={() => setActiveTab('community')}
                className={`text-xs uppercase tracking-[0.2em] pb-4 transition-all ${activeTab === 'community' ? 'text-white border-b border-pink-500' : 'text-zinc-600 hover:text-white'}`}
             >
                Community Impact
             </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
             <div>
                <h2 className="text-5xl md:text-7xl font-serif mb-6">{content[activeTab].headline}</h2>
                <p className="text-xl text-gray-400 font-light">{content[activeTab].subheadline}</p>
             </div>
             
             <div className="grid grid-cols-2 gap-8">
                {content[activeTab].stats.map((stat, index) => (
                   <div key={index} className="border border-white/10 p-8 hover:bg-white/5 transition-all group">
                      <stat.icon className="w-6 h-6 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* The Offering */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20 border-l-2 border-pink-500 pl-6">
               <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 block">The Partnership</span>
               <h2 className="text-5xl font-serif">How we dominate.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {(activeTab === 'corporate' ? opportunities : communityPillars).map((opp, i) => (
                  <div key={i} className="group p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500">
                     <opp.icon className="w-8 h-8 text-zinc-600 group-hover:text-pink-500 mb-6 transition-colors" />
                     <h3 className="text-xl font-serif mb-4">{opp.title}</h3>
                     <p className="text-sm text-gray-400 leading-relaxed">{opp.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
         <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            © 2026 The Suave Collective. Adelaide, Australia.
         </p>
      </footer>

    </div>
  );
};

export default SuaveSponsorship;
