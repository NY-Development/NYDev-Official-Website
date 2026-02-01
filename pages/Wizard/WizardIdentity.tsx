
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WizardIdentity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight flex flex-col font-display selection:bg-primary/30">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 relative z-10 bg-midnight/80 backdrop-blur-md">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-widest">
           <span>Projects</span>
           <span className="material-symbols-outlined !text-sm">chevron_right</span>
           <span className="text-white">New Project Wizard</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer">notifications</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer">help</span>
        </div>
      </header>

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-6">
         <div className="w-full max-w-3xl flex flex-col gap-10">
            {/* Stepper */}
            <div className="flex items-center justify-between px-12 relative">
               <div className="absolute left-12 right-12 top-5 h-[1px] bg-card-border" />
               
               {[
                 { step: 1, label: 'Identity', icon: 'fingerprint', active: true },
                 { step: 2, label: 'Config', icon: 'settings', active: false },
                 { step: 3, label: 'Data', icon: 'database', active: false },
                 { step: 4, label: 'Review', icon: 'verified', active: false },
               ].map(s => (
                 <div key={s.step} className="relative z-10 flex flex-col items-center gap-3">
                   <div className={`size-10 rounded-full flex items-center justify-center border-2 transition-all ${s.active ? 'bg-primary border-primary shadow-neon-blue text-white' : 'bg-navy border-card-border text-slate-500'}`}>
                      {s.active ? <span className="material-symbols-outlined !text-lg">{s.icon}</span> : <span className="text-xs font-bold">{s.step}</span>}
                   </div>
                   <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${s.active ? 'text-primary' : 'text-slate-600'}`}>{s.label}</span>
                 </div>
               ))}
            </div>

            <div className="bg-card-dark border border-card-border rounded-2xl p-10 flex flex-col items-center gap-10 shadow-glass">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Initialize New Project</h2>
                <p className="text-slate-500 text-sm">Define the core parameters and mission statement for your new AI instance.</p>
              </div>

              <div className="w-full space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Project Codename</label>
                    <div className="relative group">
                       <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">label</span>
                       <input className="w-full bg-navy/50 border border-card-border rounded-xl pl-12 pr-4 py-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-slate-700" placeholder="e.g. Project Chimera" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Target Industry</label>
                    <div className="relative group">
                       <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">domain</span>
                       <select className="w-full bg-navy/50 border border-card-border rounded-xl pl-12 pr-4 py-4 text-sm text-white focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                         <option>Select Sector...</option>
                         <option>Healthcare</option>
                         <option>FinTech</option>
                         <option>Retail</option>
                       </select>
                       <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Mission Brief (Description)</label>
                  <div className="relative">
                    <textarea className="w-full bg-navy/50 border border-card-border rounded-xl p-4 text-sm text-white focus:border-primary outline-none transition-all h-40 resize-none" placeholder="Describe the core objective of the AI system..." />
                    <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-600">0 / 500</div>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between pt-10 border-t border-white/5">
                 <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                   <span className="material-symbols-outlined !text-lg">close</span>
                   Cancel Setup
                 </button>
                 <button onClick={() => navigate('/wizard/stack')} className="h-14 px-10 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-widest transition-all shadow-neon-blue flex items-center gap-3 group">
                   Continue to Config
                   <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                 </button>
              </div>
            </div>
            
            <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">Step 1 of 4 — Identity Setup</p>
         </div>
      </main>
    </div>
  );
};

export default WizardIdentity;
