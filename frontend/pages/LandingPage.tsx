import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPublicContent } from '../services/public.service';

const LandingPage: React.FC = () => {
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    getPublicContent()
      .then((blocks) =>
        setContent(
          blocks.reduce((acc, block) => {
            acc[block.key] = block.value;
            return acc;
          }, {} as Record<string, string>)
        )
      )
      .catch(() => setContent({}));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] text-slate-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
      {/* Hero Section */}
      <main className="pt-32 pb-20 relative px-6 overflow-hidden">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/5 dark:from-blue-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 -right-20 size-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-md">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             {content['home.hero.badge'] || 'Now Accepting New Projects for Q4'}
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-8 max-w-5xl bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            {(content['home.hero.title'] || 'NY Development').split('|')[0]}{' '}
            <br className="hidden md:block" />
            {(content['home.hero.title'] || 'NY Development | Turning Problems into Products').split('|')[1] || 'Turning Problems into Products'}
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
            {content['home.hero.description'] ||
              'We partner with ambitious teams to turn complex operational pain into shipping software. From strategy to build to scale, we deliver products that earn revenue and loyalty.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
            <Link to="/contact" className="h-14 px-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg dark:shadow-[0_0_30px_rgba(31,105,255,0.3)] flex items-center justify-center">
              Start a Project
            </Link>
            <Link to="/services" className="h-14 px-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm transition-all backdrop-blur-md flex items-center justify-center">
              Explore Services
            </Link>
          </div>

          {/* Tech Stack Section */}
          <div className="w-full max-w-4xl pt-10 border-t border-slate-200 dark:border-white/5">
             <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-10">Powered by Modern Stacks</p>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                {['Vercel', 'React', 'AWS', 'Python', 'OpenAI'].map(l => (
                  <div key={l} className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg grayscale hover:grayscale-0 transition-all cursor-default group">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">{l === 'AWS' ? 'cloud' : 'bolt'}</span>
                    {l}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <section className="max-w-7xl mx-auto py-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Product-First Engineering</h2>
              <p className="text-slate-500 text-sm">We move from problem discovery to product delivery with senior, hands-on teams.</p>
            </div>
            <Link to="/services" className="text-blue-600 dark:text-blue-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View all services <span className="material-symbols-outlined !text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Problem Discovery', desc: 'Rapid alignment workshops to define outcomes, constraints, and the smartest product path.', icon: 'search' },
              { title: 'Product Design', desc: 'UX flows and prototypes that translate user pain into measurable product value.', icon: 'draw' },
              { title: 'Full-Stack Build', desc: 'React, Node, and cloud-native delivery with clean architecture and fast iteration.', icon: 'terminal' },
              { title: 'AI & Automation', desc: 'LLM-powered workflows and intelligent automation that remove bottlenecks.', icon: 'data_object' },
            ].map((cap, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-blue-600/50 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-500 mb-6 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined !text-2xl">{cap.icon}</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">{cap.title}</h3>
                <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Optimized for Speed Section */}
        <section className="max-w-7xl mx-auto py-20 px-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">From Problem to Product, <br />Fast and Reliable</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Our delivery model keeps risk low and momentum high. We prioritize clear milestones, clean code, and production readiness from the first sprint.
              </p>
              <ul className="space-y-4">
                {[
                  'Discovery to MVP in weeks',
                  'Senior engineers on every build',
                  'Security and performance baked in'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 !text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet Visual */}
            <div className="bg-slate-900 dark:bg-[#0b1221] rounded-2xl border border-slate-700 dark:border-white/10 p-6 shadow-2xl font-mono text-xs leading-relaxed group">
              <div className="flex gap-1.5 mb-6">
                <div className="size-2.5 rounded-full bg-red-500/50" />
                <div className="size-2.5 rounded-full bg-yellow-500/50" />
                <div className="size-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-1">
                <p><span className="text-purple-400">import</span> &#123; <span className="text-yellow-200">NextResponse</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-400">'next/server'</span>;</p>
                <p><span className="text-purple-400">export async function</span> <span className="text-blue-400">GET</span>() &#123;</p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-200">NextResponse</span>.<span className="text-blue-400">json</span>(&#123;</p>
                <p className="pl-8">status: <span className="text-green-400">'Operational'</span>,</p>
                <p className="pl-8">latency: <span className="text-orange-400">12ms</span></p>
                <p className="pl-4">&#125;);</p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;