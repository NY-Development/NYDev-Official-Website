
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WizardConfig: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight flex flex-col font-display selection:bg-primary/30">
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <header className="h-16 border-b border-white/5 bg-midnight/80 backdrop-blur-md flex items-center justify-between px-8 z-20">
         <div className="flex items-center gap-3 text-white">
           <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
             <span className="material-symbols-outlined !text-xl">code_blocks</span>
           </div>
           <h2 className="text-xl font-bold tracking-tight uppercase">NYDev</h2>
         </div>
         <div className="flex items-center gap-6">
           <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer">notifications</span>
           <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-card-border" style={{ backgroundImage: 'url(https://picsum.photos/id/10/100/100)' }} />
         </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-8 flex flex-col gap-10 relative z-10">
         {/* Stepper Progress */}
         <div className="w-full max-w-4xl mx-auto bg-card-dark border border-card-border p-4 rounded-xl flex items-center justify-center gap-2">
            {[
              { s: 1, label: 'Project Details' },
              { s: 2, label: 'Tech Stack' },
              { s: 3, label: 'AI & Cloud', active: true },
              { s: 4, label: 'Review' },
            ].map((step, i) => (
              <React.Fragment key={step.s}>
                <div className="flex items-center gap-2 px-4 py-1.5">
                   <div className={`size-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step.active ? 'bg-primary text-white shadow-neon-blue' : 'bg-white/5 text-slate-500'}`}>
                      {step.s < 3 ? <span className="material-symbols-outlined !text-xs">check</span> : step.s}
                   </div>
                   <span className={`text-[10px] font-bold uppercase tracking-widest ${step.active ? 'text-white' : 'text-slate-500'}`}>{step.label}</span>
                </div>
                {i < 3 && <div className="w-8 h-px bg-card-border" />}
              </React.Fragment>
            ))}
         </div>

         <div className="flex flex-col gap-2 max-w-4xl mx-auto w-full">
           <h1 className="text-4xl font-bold text-white tracking-tight">Configure Infrastructure</h1>
           <p className="text-slate-400">Step 3 of 4: Define your AI integration level and scaling strategy.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto w-full">
            <div className="lg:col-span-7 flex flex-col gap-8">
               <h3 className="text-lg font-bold text-white flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary">tune</span>
                 Core Settings
               </h3>

               <div className="space-y-4">
                  {[
                    { title: 'Enable AI Automation', desc: 'Auto-scale using predictive neural models', icon: 'psychology', active: true },
                    { title: 'Serverless Architecture', desc: 'Event-driven execution, pay-per-request', icon: 'cloud_upload', active: true },
                    { title: 'Edge Computing', desc: 'Distribute logic closer to end-users', icon: 'router', active: false },
                  ].map(toggle => (
                    <div key={toggle.title} className="bg-card-dark border border-card-border rounded-2xl p-6 flex items-center justify-between hover:border-white/10 transition-all group">
                       <div className="flex items-center gap-5">
                          <div className="size-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                             <span className="material-symbols-outlined !text-3xl">{toggle.icon}</span>
                          </div>
                          <div>
                            <p className="text-white font-bold leading-tight">{toggle.title}</p>
                            <p className="text-slate-500 text-xs mt-1">{toggle.desc}</p>
                          </div>
                       </div>
                       <button className={`w-14 h-8 rounded-full relative transition-all ${toggle.active ? 'bg-primary' : 'bg-card-border'}`}>
                         <div className={`absolute top-1 size-6 bg-white rounded-full transition-all ${toggle.active ? 'right-1' : 'left-1'}`} />
                       </button>
                    </div>
                  ))}
               </div>

               <div className="bg-card-dark border border-card-border rounded-2xl p-8 space-y-8">
                  <div className="flex justify-between items-center">
                    <div>
                       <h4 className="text-white font-bold">Expected Scale</h4>
                       <p className="text-slate-500 text-xs mt-1">Estimated user load and resource provisioning</p>
                    </div>
                    <span className="px-3 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">High Growth</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="h-2 w-full bg-gradient-to-r from-primary via-purple-500 to-crimson-red rounded-full relative">
                       <div className="absolute top-1/2 left-3/4 -translate-y-1/2 size-6 rounded-full bg-white border-2 border-primary shadow-lg cursor-pointer" />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                       <span>MVP / Prototype</span>
                       <span>Startup</span>
                       <span>Scale-up</span>
                       <span className="text-crimson-red">Global Enterprise</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
               <h3 className="text-lg font-bold text-white flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary">monitoring</span>
                 Impact Analysis
               </h3>

               <div className="flex-1 bg-card-dark border border-card-border rounded-2xl p-8 relative overflow-hidden flex flex-col gap-8 shadow-glass">
                  <div className="absolute top-0 right-0 size-64 bg-primary/10 blur-[80px] -z-10" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Est. Monthly Cost</p>
                      <h2 className="text-5xl font-bold text-white mt-1">$482<span className="text-xl text-slate-500 font-normal">/mo</span></h2>
                    </div>
                    <div className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 flex items-center gap-1">
                      <span className="material-symbols-outlined !text-sm">trending_up</span>
                      +12%
                    </div>
                  </div>

                  <div className="h-40 w-full relative flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                      <path d="M0,150 Q150,140 300,50 T600,100 T1000,20 V200 H0 Z" fill="rgba(31,105,255,0.1)" />
                      <path d="M0,150 Q150,140 300,50 T600,100 T1000,20" fill="none" stroke="#1F69FF" strokeWidth="3" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: 'Compute', v: '12 vCPUs', i: 'memory' },
                      { l: 'Storage', v: '500 GB', i: 'database' },
                      { l: 'Latency', v: '~24ms', i: 'bolt' },
                      { l: 'Nodes', v: '3 Regions', i: 'hub' },
                    ].map(m => (
                      <div key={m.l} className="p-4 rounded-xl bg-navy/50 border border-card-border">
                        <div className="flex items-center gap-2 text-slate-500 mb-1.5">
                          <span className="material-symbols-outlined !text-sm">{m.i}</span>
                          <span className="text-[9px] font-bold uppercase tracking-widest">{m.l}</span>
                        </div>
                        <p className="text-white font-mono text-lg">{m.v}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>

         <div className="flex items-center justify-between pt-10 border-t border-card-border mt-10">
            <button onClick={() => navigate('/wizard/stack')} className="h-12 px-8 rounded-xl bg-card-dark text-white font-bold text-sm uppercase tracking-widest hover:bg-navy transition-all">Back</button>
            <div className="flex gap-4">
              <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-all">Save Draft</button>
              <button onClick={() => navigate('/wizard/review')} className="h-12 px-10 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-widest transition-all shadow-neon-blue flex items-center gap-3 group">
                Continue to Review
                <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
         </div>
      </main>
    </div>
  );
};

export default WizardConfig;
