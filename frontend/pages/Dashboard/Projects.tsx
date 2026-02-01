
import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Active Projects</h1>
          <p className="text-slate-400 mt-2">Manage ongoing development initiatives and monitor tech stack health across the org.</p>
        </div>
        <Link to="/wizard/identity" className="px-5 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-sm font-bold text-white shadow-neon-blue transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">add_circle</span>
          Create Project
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card-dark p-2 rounded-xl border border-card-border">
        <div className="flex gap-1 bg-midnight p-1 rounded-lg border border-card-border overflow-x-auto">
          {['All Projects', 'In Progress', 'Completed', 'On Hold'].map(f => (
            <button key={f} className={`px-4 py-1.5 text-xs font-bold rounded-md whitespace-nowrap ${f === 'All Projects' ? 'bg-card-border text-white' : 'text-slate-500 hover:text-white'}`}>{f}</button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
           <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">filter_list</span>
           <input className="w-full bg-midnight border border-card-border rounded-lg pl-10 pr-4 py-1.5 text-xs text-white focus:border-primary focus:outline-none" placeholder="Filter projects..." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Neural Engine v3', status: 'Running', type: 'AI CORE', color: 'primary', val: 72, stack: ['React', 'Node', 'AWS'], icon: 'neurology' },
          { name: 'FinTech Gateway', status: 'Live', type: 'SECURE', color: 'emerald-500', val: 100, stack: ['Go', 'SQL'], icon: 'payments' },
          { name: 'AR/VR Interface', status: 'Paused', type: 'R&D', color: 'warning', val: 45, stack: ['Unity', 'C#'], icon: 'vr180_create2d' },
          { name: 'Zero Trust Auth', status: 'Building', type: 'SECURITY', color: 'primary', val: 88, stack: ['Node', 'OAuth', 'K8s'], icon: 'security' },
          { name: 'E-Commerce Mobile', status: 'Active', type: 'RETAIL', color: 'purple', val: 92, stack: ['React Native', 'Firebase'], icon: 'shopping_cart' },
        ].map((p, i) => (
          <div key={i} className="bg-card-dark border border-card-border rounded-xl p-6 group hover:border-primary/50 transition-all relative">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className={`text-[9px] font-bold uppercase tracking-widest text-${p.color}`}>{p.status}</span>
              <div className={`size-1.5 rounded-full bg-${p.color} ${p.status !== 'Paused' ? 'animate-pulse' : ''}`} />
            </div>
            
            <div className={`size-12 rounded-lg bg-${p.color}/10 flex items-center justify-center text-${p.color} mb-4`}>
              <span className="material-symbols-outlined !text-3xl">{p.icon}</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{p.name}</h3>
            <p className="text-slate-400 text-xs mt-2 font-medium uppercase tracking-[0.2em]">{p.type}</p>

            <div className="mt-6 flex flex-wrap gap-2">
               {p.stack.map(s => (
                 <span key={s} className="px-2 py-1 rounded bg-midnight border border-card-border text-[9px] font-bold text-slate-500 uppercase tracking-widest">{s}</span>
               ))}
            </div>

            <div className="mt-8 space-y-2">
               <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                 <span>Development</span>
                 <span className="text-white">{p.val}%</span>
               </div>
               <div className="w-full h-1 bg-midnight rounded-full overflow-hidden">
                 <div className={`bg-${p.color} h-full rounded-full transition-all`} style={{ width: `${p.val}%` }} />
               </div>
            </div>

            <div className="mt-6 pt-4 border-t border-card-border flex items-center justify-between">
               <div className="flex -space-x-2">
                 {[1, 2, 3].map(m => (
                   <div key={m} className="size-7 rounded-full bg-cover bg-center ring-2 ring-card-dark" style={{ backgroundImage: `url(https://picsum.photos/id/${m+10}/50/50)` }} />
                 ))}
                 <div className="size-7 rounded-full bg-navy border border-card-border flex items-center justify-center text-[10px] font-bold text-slate-500">+2</div>
               </div>
               <button className="text-[10px] font-bold uppercase text-slate-500 hover:text-white tracking-widest transition-colors">Details →</button>
            </div>
          </div>
        ))}
        
        <div className="border-2 border-dashed border-card-border rounded-xl flex flex-col items-center justify-center p-8 group hover:border-primary/50 cursor-pointer transition-all min-h-[300px]">
           <div className="size-16 rounded-full bg-card-border/50 flex items-center justify-center text-slate-500 group-hover:bg-primary/20 group-hover:text-primary transition-all mb-4">
             <span className="material-symbols-outlined !text-4xl">add</span>
           </div>
           <h3 className="text-lg font-bold text-slate-300 group-hover:text-white">New Project</h3>
           <p className="text-slate-500 text-xs text-center mt-2 max-w-[180px]">Initialize a new repository and set up deployment pipelines.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
