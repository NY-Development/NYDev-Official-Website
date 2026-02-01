
import React from 'react';

const InsightsPage: React.FC = () => {
  return (
    <div className="contents">
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-10">
              Engineering Insights
            </div>
            <h1 className="text-6xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Intelligence in practice.</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl">A technical exploration into AI architecture, distributed systems, and the future of software development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Optimizing LLaMA-3 for Edge Inference', date: 'Oct 12, 2024', tag: 'AI CORE', img: 'https://picsum.photos/id/1/600/400' },
              { title: 'The Fall of Monoliths: Micro-agent Architectures', date: 'Sep 28, 2024', tag: 'ARCH', img: 'https://picsum.photos/id/2/600/400' },
              { title: 'Next.js at 10M Concurrent Users', date: 'Sep 15, 2024', tag: 'WEB', img: 'https://picsum.photos/id/3/600/400' },
              { title: 'Rust vs Go in 2024: A Systems Comparison', date: 'Aug 22, 2024', tag: 'INFRA', img: 'https://picsum.photos/id/4/600/400' },
              { title: 'Zero-knowledge Proofs in FinTech', date: 'Aug 05, 2024', tag: 'SECURE', img: 'https://picsum.photos/id/5/600/400' },
              { title: 'Designing for Fault-tolerance on AWS', date: 'Jul 19, 2024', tag: 'CLOUD', img: 'https://picsum.photos/id/6/600/400' },
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 aspect-video mb-6">
                   <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={post.title} />
                   <div className="absolute top-4 left-4 px-3 py-1 bg-white/60 dark:bg-midnight/60 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-bold text-primary uppercase tracking-widest">{post.tag}</div>
                </div>
                <div className="space-y-3">
                   <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-widest">{post.date}</p>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                   <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                      Read Full Report
                      <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsightsPage;
