
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="contents">
      <main className="pt-40 pb-20 relative px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-10">
             Specialized Services
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Advanced Engineering <br /> for AI Systems</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mb-24">Precision-crafted solutions across AI integration, cloud native architecture, and high-performance product engineering.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
             {[
               {
                 category: 'AI Systems',
                 title: 'Neural Architectures',
                 desc: 'Custom LLM fine-tuning, retrieval augmented generation (RAG) pipelines, and predictive analytics engines.',
                 items: ['Fine-tuning & LoRA', 'Semantic Search', 'Agentic Workflows', 'Model Registry'],
                 icon: 'psychology'
               },
               {
                 category: 'Infrastructure',
                 title: 'Cloud Native Core',
                 desc: 'High-availability kubernetes clusters, serverless orchestration, and edge deployment strategies.',
                 items: ['Kubernetes & Docker', 'Multi-cloud Strategy', 'CI/CD Pipelines', 'Real-time Monitoring'],
                 icon: 'dns'
               },
               {
                 category: 'Product',
                 title: 'High-Scale Platforms',
                 desc: 'Enterprise-grade web and mobile applications designed for millions of concurrent users.',
                 items: ['React & Next.js', 'Go & Rust Backend', 'PostgreSQL Scale', 'API Design'],
                 icon: 'deployed_code'
               }
             ].map((svc, i) => (
               <div key={i} className="bg-slate-50 dark:bg-navy/50 border border-slate-200 dark:border-card-border p-10 rounded-3xl hover:bg-slate-100 dark:hover:bg-navy transition-all duration-500 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-10 text-primary opacity-10 group-hover:opacity-100 transition-opacity">
                   <span className="material-symbols-outlined !text-9xl">{svc.icon}</span>
                 </div>
                 <div className="relative z-10">
                   <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">{svc.category}</p>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{svc.title}</h3>
                   <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed mb-10">{svc.desc}</p>
                   <ul className="space-y-4">
                     {svc.items.map(item => (
                       <li key={item} className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs font-medium">
                         <div className="size-1 rounded-full bg-primary" />
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
