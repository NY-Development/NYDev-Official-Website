import React, { useEffect, useMemo, useState } from 'react';
import { getPublicProjects } from '../../services/public.service';

const WorkPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getPublicProjects()
      .then((data) =>
        setProjects(
          data.map((project) => ({
            id: project.id,
            title: project.name,
            category: project.technologies[0] || 'Product',
            stat: project.status === 'published' ? 'LIVE PRODUCT' : 'IN DEVELOPMENT',
            desc: project.description,
            fullDesc: project.description,
            tags: project.technologies,
            link: '#',
            image:
              project.assets?.[0]?.url ||
              'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
          }))
        )
      )
      .catch(() => setProjects([]));
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050a15] text-slate-900 dark:text-white transition-colors duration-300 font-sans selection:bg-blue-500/30">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* --- PAGE HEADER --- */}
          <header className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Engineering Impact</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl font-light">
              Transforming industries through intelligent software and scalable AI infrastructure. Explore our latest technical breakthroughs.
            </p>
            
            {/* CATEGORY FILTER (Functioning) */}
            <div className="flex flex-wrap gap-3 mt-10">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                    activeFilter === cat 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-blue-500/50 hover:text-blue-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          {/* --- EXPANDED DETAIL VIEW --- */}
          {selectedProject && (
            <section className="mb-24 animate-in fade-in slide-in-from-top-10 duration-500">
              <div className="bg-white dark:bg-[#0b1221] border border-slate-200 dark:border-blue-500/30 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl dark:shadow-blue-500/10">
                <div className="lg:w-1/2 h-[400px] lg:h-auto">
                  <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                </div>
                <div className="lg:w-1/2 p-12 lg:p-16 relative">
                  <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                  <p className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">{selectedProject.category}</p>
                  <h2 className="text-4xl font-bold mb-6">{selectedProject.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">{selectedProject.fullDesc}</p>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded text-[10px] font-bold uppercase text-slate-700 dark:text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href={selectedProject.link} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all group shadow-lg shadow-blue-600/20">
                    View Project <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* --- GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => {
                    setSelectedProject(project);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-white dark:bg-[#0b1221] border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded text-[9px] font-bold uppercase tracking-widest border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
                    {project.category}
                  </div>
                  <img src={project.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0b1221] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-8 space-y-4">
                  <p className="text-blue-600 dark:text-blue-500 font-mono text-[10px] font-bold uppercase tracking-tighter">{project.stat}</p>
                  <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                  
                  {/* CONSTRASTING BORDERED TECH TAGS (image_32d999 style) */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
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