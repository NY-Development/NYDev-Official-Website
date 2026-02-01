
import React, { useState } from 'react';
// Fix: Added Link to the imports from react-router-dom
import { useNavigate, Link } from 'react-router-dom';

const WizardStack: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['React', 'Next.js']);

  const toggle = (tech: string) => {
    setSelected(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };

  return (
    <div className="min-h-screen bg-midnight flex flex-col font-display selection:bg-primary/30">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 relative z-10 bg-midnight/80 backdrop-blur-md">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-widest">
           <span>Dashboard</span>
           <span className="material-symbols-outlined !text-sm">chevron_right</span>
           <span className="text-white">Stack Configuration</span>
        </div>
        <div className="flex items-center gap-4">
           <Link to="/" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white mr-6 transition-colors">Dashboard</Link>
           <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/10/100/100)' }} />
        </div>
      </header>

      <main className="flex-1 relative z-10 max-w-7xl mx-auto w-full p-8 flex flex-col gap-10">
         <nav className="flex items-center w-full max-w-3xl mx-auto px-4">
            {[1, 2, 3, 4].map(s => (
               <React.Fragment key={s}>
                 <div className={`size-10 rounded-full flex items-center justify-center border-2 transition-all ${s === 2 ? 'bg-primary/20 border-primary ring-2 ring-primary ring-offset-4 ring-offset-midnight shadow-neon-blue text-primary' : s < 2 ? 'bg-primary border-primary text-white' : 'bg-navy border-card-border text-slate-500'}`}>
                   {s < 2 ? <span className="material-symbols-outlined !text-sm">check</span> : <span className="text-xs font-bold">{s}</span>}
                 </div>
                 {s < 4 && <div className={`flex-1 h-[1px] mx-4 ${s < 2 ? 'bg-primary' : 'bg-card-border'}`} />}
               </React.Fragment>
            ))}
         </nav>

         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
           <div>
             <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Stack Configuration</h1>
             <p className="text-slate-400 mt-1">Select the core technologies for your new environment.</p>
           </div>
           <div className="relative w-full max-w-sm group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
              <input className="w-full bg-navy/50 border border-card-border rounded-xl pl-12 pr-12 py-3 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-slate-700" placeholder="Add Custom Tech or Search Stack" />
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-card-border text-[10px] text-slate-600 font-bold">⌘K</kbd>
           </div>
         </div>

         <div className="flex gap-2.5 overflow-x-auto pb-2">
            {['All', 'Frontend', 'Backend', 'AI/ML', 'DevOps', 'Database'].map(f => (
               <button key={f} className={`h-9 px-6 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${f === 'All' ? 'bg-primary text-white shadow-neon-blue' : 'bg-card-dark border border-card-border text-slate-500 hover:text-white hover:border-slate-500'}`}>{f}</button>
            ))}
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-40">
           {[
             { name: 'React', meta: 'Frontend Library • v18.2.0', icon: 'data_object', color: '#61DAFB' },
             { name: 'Next.js', meta: 'Framework • v14.0', icon: 'deployed_code', color: '#FFFFFF' },
             { name: 'Python', meta: 'Language • v3.11', icon: 'terminal', color: '#3776AB' },
             { name: 'TensorFlow', meta: 'AI / ML • v2.14', icon: 'neurology', color: '#FF6F00' },
             { name: 'AWS', meta: 'Cloud • Integrated', icon: 'cloud', color: '#FF9900' },
             { name: 'Docker', meta: 'DevOps • v24.0', icon: 'package_2', color: '#2496ED' },
             { name: 'PostgreSQL', meta: 'Database • v16', icon: 'database', color: '#336791' },
             { name: 'Redis', meta: 'Cache • v7.0', icon: 'memory', color: '#DC382D' },
           ].map(tech => {
             const isSel = selected.includes(tech.name);
             return (
               <div 
                 key={tech.name} 
                 onClick={() => toggle(tech.name)}
                 className={`p-6 rounded-2xl border transition-all cursor-pointer relative group ${isSel ? 'border-primary bg-primary/5 shadow-glass' : 'border-card-border bg-card-dark hover:border-white/20'}`}
               >
                 {isSel && <div className="absolute top-4 right-4 text-primary"><span className="material-symbols-outlined !text-xl">check_circle</span></div>}
                 <div className="size-14 rounded-xl bg-navy flex items-center justify-center mb-6" style={{ color: tech.color }}>
                   <span className="material-symbols-outlined !text-3xl">{tech.icon}</span>
                 </div>
                 <h3 className="text-white font-bold text-lg">{tech.name}</h3>
                 <p className="text-slate-500 text-xs mt-1 font-medium">{tech.meta}</p>
               </div>
             );
           })}
         </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 h-20 border-t border-white/5 bg-midnight/80 backdrop-blur-xl flex items-center px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
           <button onClick={() => navigate('/wizard/identity')} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em]">
             <span className="material-symbols-outlined !text-lg">arrow_back</span>
             Back
           </button>
           <div className="flex items-center gap-6">
             <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{selected.length} items selected</span>
             <button onClick={() => navigate('/wizard/config')} className="h-12 px-10 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-neon-blue flex items-center gap-3 group">
               Configure AI
               <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
             </button>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default WizardStack;
