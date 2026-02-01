
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="contents">
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-40">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-10">
                Our Mission
              </div>
              <h1 className="text-6xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Architecting the Nervous Systems of the Future.</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl leading-relaxed mb-12">
                NYDev was founded on the principle that precision engineering is the only way to navigate the complexities of the AI era. We don't just build apps; we architect intelligence.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                   <h4 className="text-slate-900 dark:text-white font-bold text-2xl mb-2">2018</h4>
                   <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest">Founded in NYC</p>
                </div>
                <div>
                   <h4 className="text-slate-900 dark:text-white font-bold text-2xl mb-2">120+</h4>
                   <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest">Engineers Globally</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-primary/10 blur-[120px]" />
               <img src="https://picsum.photos/id/10/800/800" className="rounded-3xl border border-slate-200 dark:border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700" alt="About NYDev" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
             {[
               { title: 'Radical Precision', desc: 'Every line of code is intentional. We prioritize performance over quick hacks.', icon: 'center_focus_strong' },
               { title: 'AI Native', desc: 'Artificial intelligence is not an add-on; it is at the core of our architectural philosophy.', icon: 'auto_awesome' },
               { title: 'Global Resilience', desc: 'Systems we build are distributed, fault-tolerant, and designed to never go down.', icon: 'public' }
             ].map((val, i) => (
               <div key={i} className="bg-slate-50 dark:bg-navy/50 border border-slate-200 dark:border-card-border p-10 rounded-3xl">
                 <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                   <span className="material-symbols-outlined">{val.icon}</span>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{val.title}</h3>
                 <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{val.desc}</p>
               </div>
             ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Ready to build the future?</h2>
             <p className="text-slate-500 dark:text-slate-400 text-lg mb-12">We are always looking for visionary partners and world-class engineers to join our mission.</p>
             <div className="flex justify-center gap-4">
               <Link to="/login" className="px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm uppercase tracking-widest shadow-neon-blue">Contact Us</Link>
               <Link to="/careers" className="px-8 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest border border-slate-200 dark:border-white/10">View Careers</Link>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
