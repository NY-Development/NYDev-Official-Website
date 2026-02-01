
import React from 'react';

const WorkPage: React.FC = () => {
  return (
    <div className="contents">
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-10">
              Selected Case Studies
            </div>
            <h1 className="text-6xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Deploying impact at global scale.</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl">Explore our track record of engineering breakthroughs across fintech, autonomous systems, and digital enterprise.</p>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {[
              {
                title: 'Starlight Finance',
                subtitle: 'FinTech Optimization',
                desc: 'Re-engineering the core settlement engine for a leading neo-bank, reducing latency by 450% while scaling to 50k transactions per second.',
                metrics: ['450% Speed Increase', '0.001% Error Rate', 'Scales to 10M Users'],
                image: 'https://picsum.photos/id/201/1200/600',
                tags: ['Go', 'Rust', 'Kafka', 'PostgreSQL']
              },
              {
                title: 'Sentient Vision',
                subtitle: 'Autonomous Systems',
                desc: 'Developing an edge-computing vision platform for real-time object detection and spatial awareness in industrial robotics.',
                metrics: ['<15ms Inference Time', '99.8% Accuracy', 'Solar Powered Edge Nodes'],
                image: 'https://picsum.photos/id/180/1200/600',
                tags: ['Python', 'PyTorch', 'C++', 'Nvidia Orin']
              }
            ].map((work, i) => (
              <div key={i} className="group flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">
                <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">{work.subtitle}</p>
                  <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 group-hover:text-primary transition-colors">{work.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">{work.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-8 mb-10">
                    {work.metrics.map(m => (
                      <div key={m}>
                        <p className="text-slate-900 dark:text-white font-mono font-bold text-lg mb-1">{m.split(' ')[0]}</p>
                        <p className="text-slate-400 dark:text-slate-600 text-[9px] font-bold uppercase tracking-widest">{m.split(' ').slice(1).join(' ')}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded bg-slate-100 dark:bg-navy border border-slate-200 dark:border-card-border text-[10px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
                   <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity" />
                   <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 aspect-[16/9]">
                     <img src={work.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={work.title} />
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

export default WorkPage;
