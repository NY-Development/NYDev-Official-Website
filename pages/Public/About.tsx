import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* --- HERO SECTION --- */}
          <section className="text-center mb-32">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Our Mission
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Architecting the <br /> Future of Intelligence
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              NYDev is at the forefront of AI and software engineering, building the digital nervous systems of tomorrow's enterprises. We don't just write code; we engineer intelligence.
            </p>
          </section>

          {/* --- JOURNEY / TIMELINE SECTION --- */}
          <section className="mb-40">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Our Journey</h2>
              <p className="text-slate-500 text-sm">From inception to AGI research</p>
            </div>
            
            <div className="max-w-3xl mx-auto relative border-l border-blue-500/20 ml-4 md:ml-auto">
              {[
                { year: '2020', title: 'Founding', desc: 'Established in NYC with a vision to merge traditional software engineering principles with emerging deep learning technologies.', icon: 'flag' },
                { year: '2021', title: 'First AI Model Launch', desc: 'Deployed our proprietary neural network architecture, Cortex-7, for enterprise data processing.', icon: 'memory' },
                { year: '2023', title: 'Global Expansion', desc: 'Opened research hubs in London and Tokyo, scaling our infrastructure to support multi-regional deployment.', icon: 'public' },
                { year: '2025', title: 'Future Goals: AGI Research', desc: 'Dedicating resources to generalize our models for broader cognitive tasks and autonomous problem solving.', icon: 'hub' },
              ].map((item, idx) => (
                <div key={idx} className="mb-12 ml-8 relative group">
                  <div className="absolute -left-[41px] top-1 size-5 rounded-full bg-white dark:bg-[#050a15] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <span className="material-symbols-outlined text-[10px] text-blue-500 dark:text-blue-400">{item.icon}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <span className="text-blue-600 dark:text-blue-500 font-mono text-sm">{item.year}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- ENGINEERING PRINCIPLES --- */}
          <section className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Engineering <br /><span className="text-blue-600 dark:text-blue-500">Principles</span></h2>
              <div className="w-12 h-1 bg-blue-600 mb-8"></div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our foundation is built on four pillars that drive every line of code we write. We believe in systems that are as beautiful as they are functional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Innovation', icon: 'lightbulb', desc: 'Pushing boundaries with bleeding-edge AI and novel architectures.' },
                { title: 'Precision', icon: 'biotech', desc: 'Pixel-perfect execution in every module. Zero tolerance for bloat.' },
                { title: 'Security', icon: 'shield', desc: 'Fortress-level protection for data integrity and user privacy.' },
                { title: 'Scalability', icon: 'show_chart', desc: 'Systems built to handle planetary scale without compromising latency.' }
              ].map((p, i) => (
                <div key={i} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-xl">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 mb-4">{p.icon}</span>
                  <h4 className="font-bold mb-2">{p.title}</h4>
                  <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- TEAM SECTION --- */}
          <section className="mb-40">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">The Architects</h2>
              <p className="text-slate-500 text-sm">Meet the minds building the infrastructure of the future.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Alex Chen', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
                { name: 'Sarah Jenkins', role: 'Chief Technology Officer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop' },
                { name: 'Marcus Thorne', role: 'Lead AI Engineer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop' },
                { name: 'Emily Zhao', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop' }
              ].map((member, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <img src={member.img} alt={member.name} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{member.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- CALL TO ACTION --- */}
          <div className="text-center bg-gradient-to-b from-transparent to-blue-600/5 dark:to-blue-900/10 py-20 rounded-[3rem] border border-slate-200 dark:border-white/5">
             <h2 className="text-4xl font-bold mb-4">Ready to build the future?</h2>
             <p className="text-slate-500 dark:text-slate-400 mb-10">Join us in creating the next generation of intelligent systems.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/careers" className="px-10 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg">View Careers</Link>
               <Link to="/contact" className="px-10 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-white/10 transition-all">Contact Us</Link>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;