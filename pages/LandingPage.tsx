
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="contents">
      {/* Hero Section */}
      <main className="pt-40 pb-20 relative px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-10">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             Now Accepting New Projects for Q4
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/60 mb-8 max-w-5xl">
            Engineering the Future <br className="hidden md:block" /> of Digital Systems
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
            We build scalable AI solutions and high-performance web applications for forward-thinking enterprises. Precision architecture meet cutting-edge intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
            <Link to="/login" className="h-14 px-10 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all shadow-[0_0_30px_rgba(31,105,255,0.4)] flex items-center gap-3 group">
              Start a Project
              <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
            <Link to="/services" className="h-14 px-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-base transition-all backdrop-blur-md flex items-center justify-center">
              Explore Services
            </Link>
          </div>

          <div className="w-full max-w-3xl pt-10 border-t border-slate-200 dark:border-white/5 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-8">Powered by Modern Stacks</p>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                {['Vercel', 'React', 'AWS', 'Python', 'OpenAI'].map(l => (
                  <div key={l} className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                    <span className="material-symbols-outlined text-primary">{l === 'AWS' ? 'cloud' : 'bolt'}</span>
                    {l}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <section className="max-w-7xl mx-auto py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'Artificial Intelligence', desc: 'LLM integration, predictive modeling, and fine-tuning for custom enterprise solutions.', icon: 'neurology' },
             { title: 'Web Engineering', desc: 'Next.js & React scalable architectures built for speed, SEO, and global performance.', icon: 'code_blocks' },
             { title: 'Cloud Infrastructure', desc: 'Serverless and edge computing architectures that scale automatically with demand.', icon: 'cloud_sync' },
             { title: 'Mobile Development', desc: 'Cross-platform native experiences using React Native and Flutter for iOS and Android.', icon: 'smartphone' },
           ].map((cap, i) => (
             <div key={i} className="group p-8 rounded-2xl bg-slate-50 dark:bg-navy/50 border border-slate-200 dark:border-card-border hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-navy/80 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                 <span className="material-symbols-outlined !text-3xl">{cap.icon}</span>
               </div>
               <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">{cap.title}</h3>
               <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">{cap.desc}</p>
             </div>
           ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
