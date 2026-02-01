
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WizardReview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight flex flex-col font-display selection:bg-primary/30">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <header className="h-16 border-b border-white/5 bg-midnight/80 backdrop-blur-md flex items-center justify-between px-8 z-20">
         <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-widest">
           <span className="material-symbols-outlined !text-lg">home</span>
           <span>/</span>
           <span>Projects</span>
           <span>/</span>
           <span className="text-white">New Initialization</span>
        </div>
        <div className="flex items-center gap-8">
           <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white">Docs</a>
           <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white">API</a>
           <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-card-border" style={{ backgroundImage: 'url(https://picsum.photos/id/10/100/100)' }} />
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-8 flex flex-col gap-10 relative z-10">
         <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">Final Review</h1>
              <p className="text-slate-400 mt-1">Verify configuration manifest before system spawn.</p>
            </div>
            <div className="hidden md:flex items-center gap-4 bg-navy border border-card-border px-5 py-2.5 rounded-full">
               {[
                 { l: 'CONFIG', c: 'primary' },
                 { l: 'ARCH', c: 'primary' },
                 { l: 'RSRCS', c: 'primary' },
                 { l: 'LAUNCH', c: 'white' }
               ].map((s, i) => (
                 <React.Fragment key={s.l}>
                   <div className="flex items-center gap-2 opacity-50">
                     <div className={`size-2 rounded-full bg-${s.c}`} />
                     <span className="text-[10px] font-bold text-white tracking-widest">{s.l}</span>
                   </div>
                   {i < 3 && <div className="w-6 h-px bg-card-border" />}
                 </React.Fragment>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-4">
               <div className="bg-card-dark border border-card-border rounded-2xl overflow-hidden shadow-glass relative group">
                  <div className="bg-[#0b101a] border-b border-card-border px-6 py-3 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                           <div className="size-2.5 rounded-full bg-crimson-red/20 border border-crimson-red/50" />
                           <div className="size-2.5 rounded-full bg-warning/20 border border-warning/50" />
                           <div className="size-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">manifest.json</span>
                     </div>
                     <span className="material-symbols-outlined !text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">content_copy</span>
                  </div>
                  <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
                     <span className="text-slate-600 mr-6">01</span><span className="text-purple-400">"project_identity"</span>: <span className="text-white">{"{"}</span>{`
      `}<span className="text-slate-600 mr-6">02</span>  <span className="text-primary">"name"</span>: <span className="text-emerald-400">"Sentient-V1"</span>,{`
      `}<span className="text-slate-600 mr-6">03</span>  <span className="text-primary">"id"</span>: <span className="text-emerald-400">"proj_882_alpha"</span>,{`
      `}<span className="text-slate-600 mr-6">04</span>  <span className="text-primary">"owner"</span>: <span className="text-emerald-400">"dev_team_lead"</span>{`
      `}<span className="text-slate-600 mr-6">05</span><span className="text-white">{"},"}</span>{`

      `}<span className="text-slate-600 mr-6">06</span><span className="text-purple-400">"ai_parameters"</span>: <span className="text-white">{"{"}</span>{`
      `}<span className="text-slate-600 mr-6">07</span>  <span className="text-primary">"model_base"</span>: <span className="text-emerald-400">"LLaMA-3-70B-Optimized"</span>,{`
      `}<span className="text-slate-600 mr-6">08</span>  <span className="text-primary">"context_window"</span>: <span className="text-orange-400">128000</span>,{`
      `}<span className="text-slate-600 mr-6">09</span>  <span className="text-primary">"temperature"</span>: <span className="text-orange-400">0.7</span>,{`
      `}<span className="text-slate-600 mr-6">10</span>  <span className="text-primary">"safety_rails"</span>: <span className="text-purple-400">true</span>{`
      `}<span className="text-slate-600 mr-6">11</span><span className="text-white">{"},"}</span>{`

      `}<span className="text-slate-600 mr-6">12</span><span className="text-purple-400">"infrastructure"</span>: <span className="text-white">{"{"}</span>{`
      `}<span className="text-slate-600 mr-6">13</span>  <span className="text-primary">"region"</span>: <span className="text-emerald-400">"us-east-1"</span>,{`
      `}<span className="text-slate-600 mr-6">14</span>  <span className="text-primary">"gpu_nodes"</span>: <span className="text-orange-400">8</span>,{`
      `}<span className="text-slate-600 mr-6">15</span>  <span className="text-primary">"scaling_policy"</span>: <span className="text-emerald-400">"predictive_burst"</span>{`
      `}<span className="text-slate-600 mr-6">16</span><span className="text-white">{"}"}</span>
                  </div>
                  <button className="absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined !text-sm">edit</span>
                    Edit Config
                  </button>
               </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
               <div className="bg-card-dark border border-card-border p-6 rounded-2xl flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Configuration Valid</h4>
                    <p className="text-slate-500 text-xs mt-1">All dependencies resolved. No conflicts detected in schema.</p>
                  </div>
               </div>

               <div className="bg-card-dark border border-card-border p-6 rounded-2xl flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Est. Hourly Cost</h4>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-bold text-white font-mono">$4.20</span>
                      <span className="text-slate-500 text-[10px] font-bold">/ HOUR</span>
                    </div>
                    <p className="text-slate-500 text-[10px] mt-2 font-bold uppercase tracking-widest opacity-70">Based on 8x GPU nodes.</p>
                  </div>
               </div>

               <div className="mt-auto flex flex-col items-center gap-4">
                 <button onClick={() => navigate('/')} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-6 rounded-2xl transition-all shadow-[0_0_40px_rgba(31,105,255,0.4)] flex items-center justify-center gap-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="material-symbols-outlined !text-3xl">power_settings_new</span>
                    <span className="text-lg tracking-wider">INITIALIZE SYSTEM</span>
                 </button>
                 <div className="flex items-center gap-2">
                   <div className="size-1.5 rounded-full bg-warning animate-pulse" />
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Estimated build time: ~45s</p>
                 </div>
               </div>
            </div>
         </div>

         <div className="bg-black border border-card-border rounded-xl p-5 h-40 overflow-hidden font-mono text-[11px] text-slate-500 relative">
            <div className="absolute top-2 right-4 flex gap-2">
               <span className="material-symbols-outlined !text-sm cursor-pointer hover:text-white">minimize</span>
               <span className="material-symbols-outlined !text-sm cursor-pointer hover:text-white">close</span>
            </div>
            <div className="space-y-1">
               <p><span className="text-emerald-400">user@nydev:~$</span> verify --all --verbose</p>
               <p>[10:42:12] Checking permissions... <span className="text-emerald-400">OK</span></p>
               <p>[10:42:13] Validating model weights... <span className="text-emerald-400">OK</span> (checksum: a1b2...)</p>
               <p>[10:42:14] Pre-allocating IP addresses... <span className="text-emerald-400">Done</span></p>
               <p className="text-primary mt-2">&gt;&gt; System ready for initialization sequence.</p>
               <div className="w-2 h-4 bg-primary inline-block animate-pulse ml-1" />
            </div>
         </div>
      </main>
    </div>
  );
};

export default WizardReview;
