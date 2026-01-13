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
      subhead: "No need to keep buying e-commerce real-estate online. Start building cultural capital togther, to scale collectively.",
      stats: [
        { number: '10x your time', label: 'Return on Investment' },
        { number: 'Aim high. 1B+ views across accounts', label: 'Total Audience Reach' },
        { number: '1000-5000', label: 'VIP Guests Hosted' },
        { number: '100+', label: 'Brand Advocate Activations' }
      ],
      benefits: [
        {
          title: 'Hyper-Targeted Activation',
          desc: 'Bespoke assistance that forces enduring engagement and drives social collaboration, with sharing across social accounts.',
          icon: Zap
        },
        {
          title: 'Executive Hospitality',
          desc: 'The ideal deal-closing environment is networking through VIP experiences at a sold-out shows.',
          icon: Briefcase
        },
        {
          title: 'Data-Backed Strategy',
          desc: 'Detailed audience analytics and post-campaign impact reports.',
          icon: TrendingUp
        }
      ]
    },
    community: {
      headline: "Community Impact",
      subhead: "Directly fund the artists, spaces, and voices that make the entertainment industry vibrant.",
      stats: [
        { number: '10', label: 'Direct Artist Grants' },
        { number: '?', label: 'Local Jobs Created' },
        { number: '95%', label: 'Diverse Talent Representation' },
        { number: 'Free Business and Finance Strategy Workshop for Unique Individuals', label: 'Public Workshops' }
      ],
      benefits: [
        {
          title: 'Direct Artist Support',
          desc: 'Commissioning new virtual/digital and physical/in-person work in order for artists to get paid fair remuneration.',
          icon: Music
        },
        {
          title: 'Youth Pathways',
          desc: 'Mentorship and stage time for emerging talent pipelines.',
          icon: Users
        },
        {
          title: 'Cultural Accessibility',
          desc: 'Subsidised tickets ensuring art remains accessible to everyone.',
          icon: Globe
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Slimline Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b border-white/10 ${scrolled ? 'bg-black py-4' : 'bg-black/90 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Integration - INCREASED SIZE 100% */}
          <div className="flex items-center gap-6">
             {/* Mobile: h-24 (Big), Desktop: h-32 (Huge) to ensure visibility */}
             <img 
               src="/logo.png" 
               alt="Suave Collective Logo" 
               className="h-24 md:h-32 w-auto object-contain" 
             />
             <span className="font-serif text-xl md:text-2xl tracking-wide font-bold hidden md:block">THE SUAVE COLLECTIVE</span>
          </div>

          {/* Desktop Links - Minimalist */}
          <div className="hidden md:flex items-center space-x-12">
            {['Events', 'Talent'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
            <button className="text-xs uppercase tracking-[0.2em] font-bold border-b border-white pb-1 hover:text-pink-500 hover:border-pink-500 transition-all">
              Partner Access
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-28 px-6 md:hidden animate-in slide-in-from-top-10">
          <div className="flex flex-col space-y-8">
            {['Events', 'Talent', 'Partner Access'].map((item) => (
              <a key={item} href="#" className="text-3xl font-serif text-white border-b border-white/10 pb-4">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-block mb-6">
                 <span className="text-xs font-bold text-pink-500 tracking-[0.2em] uppercase border border-pink-500/30 px-3 py-1 rounded-sm">2026 Season</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] mb-8 text-white">
                Culture <br />
                Curated.
              </h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed border-l border-pink-500 pl-6">
                We bridge the gap between premium brand strategy and authentic community impact. No fluff. Just results.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
               <button className="w-full md:w-auto bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors flex items-center justify-between group">
                 <span>Explore Opportunities</span>
                 <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP / ABOUT SECTION - Integrated with Photo */}
      <section className="py-0 border-b border-white/10 bg-zinc-950">
         <div className="grid md:grid-cols-2">
            {/* Image Column - FULL VISIBILITY FIX */}
            <div className="relative h-[600px] md:h-auto w-full overflow-hidden bg-black/50">
               <img 
                 src="/profile1.jpg" 
                 alt="Rahul Reddy - Creative Managing Partner" 
                 className="absolute inset-0 w-full h-full object-contain" // Changed to object-contain to ensure WHOLE photo is visible
               />
               {/* Reduced opacity of gradient so photo is clearer */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
               <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500 mb-2">The Founder</div>
                  <h3 className="text-3xl font-serif text-white">Rahul Reddy</h3>
               </div>
            </div>

            {/* Content Column */}
            <div className="p-10 md:p-20 flex flex-col justify-center">
               <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  "We don't just occupy space. We define it."
               </h2>
               <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                  <p>
                     The Suave Collective was born with the ideology that good, and average are the enemy of great. In a world teeming with potential, we saw a gap between raw talent and world-class execution.
                  </p>
                  <p>
                     We operate at the intersection of nightlife, corporate precision, and artistic chaos. Our mission is simple: to build platforms where brands don't just advertise—they become part of the cultural fabric.
                  </p>
                  <p>
                     When you contract with us, you aren't part of anything but a collective that cares. You are joining a cultural movement that is reshaping the identity of Australia and International Artists from all walks of life.
                  </p>
               </div>
               <div className="mt-12">
                  {/* Signature Slot - Currently holding Logo as Placeholder */}
                  <img 
                     src="signature.png" 
                     alt="Signature Placeholder"
                     className="h-16 object-contain opacity-80"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Tabbed Interface */}
      <section className="sticky top-20 z-40 bg-black/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setActiveTab('corporate')}
              className={`py-6 text-sm uppercase tracking-[0.15em] transition-all whitespace-nowrap ${activeTab === 'corporate' ? 'text-white border-b-2 border-pink-500' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Corporate Strategy
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`py-6 text-sm uppercase tracking-[0.15em] transition-all whitespace-nowrap ${activeTab === 'community' ? 'text-white border-b-2 border-amber-500' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Community Impact
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <section className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-700 key={activeTab}">
          
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">{content[activeTab].headline}</h2>
            <p className="text-xl text-gray-400 max-w-2xl">{content[activeTab].subhead}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {content[activeTab].stats.map((stat, idx) => (
              <div key={idx} className="py-10 border-b border-white/10 md:border-b-0 md:border-r border-white/10 md:last:border-r-0 pr-6">
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-white/10">
            {content[activeTab].benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="group flex flex-col md:flex-row md:items-center py-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className={`w-12 h-12 flex items-center justify-center border border-white/20 rounded-full ${activeTab === 'corporate' ? 'text-pink-500' : 'text-amber-500'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <h3 className="text-2xl font-serif mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">{benefit.desc}</p>
                  </div>
                  <div className="md:w-1/4 flex justify-end">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 relative h-[400px] w-full overflow-hidden group cursor-pointer">
             <div className={`absolute inset-0 bg-gradient-to-r ${activeTab === 'corporate' ? 'from-pink-900/40 to-black' : 'from-amber-900/40 to-black'}`}></div>
             <div className="absolute inset-0 border border-white/10"></div>
             
             <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
               <div className="flex items-end justify-between">
                 <div>
                   <div className="text-xs uppercase tracking-widest mb-4 text-white/60">Next Steps</div>
                   <h3 className="text-3xl md:text-5xl font-serif">
                     {activeTab === 'corporate' ? 'Download Corporate Deck' : 'View Impact Report'}
                   </h3>
                 </div>
                 <button className={`hidden md:flex px-8 py-3 border ${activeTab === 'corporate' ? 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white' : 'border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white'} text-xs font-bold uppercase tracking-[0.2em] transition-all`}>
                   Access File
                 </button>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="border-t border-white/10 bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <span className="font-serif text-2xl font-bold block mb-6">SUAVE.</span>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Adelaide based. Globally connected.<br/>
                We build culture, not just events.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Socials</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Spotify</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Legal</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
             <p>© 2026 The Suave Collective.</p>
             <p>Designed lovingly, created with care and developed with due diligence in South Australia.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SuaveSponsorship;
