import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300 relative overflow-hidden">
      
      {/* --- BACKGROUND GRID EFFECT --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT COLUMN: THE FORM --- */}
          <section className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Now Accepting New Projects
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Let’s Engineer <br />
                <span className="text-blue-600 dark:text-blue-500">The Future.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                Tell us about your vision. Our AI and Engineering teams are ready to deploy scalable, future-proof solutions.
              </p>
            </div>

            <form className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 md:p-10 space-y-6 shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Project Category</label>
                  <select className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-500">
                    <option>Select category...</option>
                    <option>AI / Machine Learning</option>
                    <option>Web Engineering</option>
                    <option>Cloud Architecture</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Estimated Budget</label>
                  <select className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-500">
                    <option>Select range...</option>
                    <option>$10k - $50k</option>
                    <option>$50k - $150k</option>
                    <option>$150k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
                <textarea rows={4} placeholder="Describe your vision, requirements, and timeline..." className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 group">
                Initialize Project 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>

              <div className="flex justify-center gap-8 pt-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-xs">lock</span> Encrypted Data
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-xs">verified_user</span> NDA Protected
                </div>
              </div>
            </form>
          </section>

          {/* --- RIGHT COLUMN: VISUAL PANEL --- */}
          <section className="lg:sticky lg:top-32 space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 aspect-square md:aspect-auto md:min-h-[600px] flex flex-col justify-end relative overflow-hidden group">
              
              {/* World Map Background (Matching image_333e71) */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80" 
                  alt="Global Map" 
                  className="w-full h-full object-cover grayscale brightness-50"
                />
                {/* Simulated Glowing Nodes */}
                <div className="absolute top-1/4 left-1/3 size-2 bg-blue-500 rounded-full blur-[2px] animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 size-2 bg-purple-500 rounded-full blur-[2px] animate-pulse delay-75"></div>
                <div className="absolute bottom-1/3 left-1/2 size-2 bg-blue-400 rounded-full blur-[2px] animate-pulse delay-150"></div>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Global Intelligence Grid</h2>
                    <p className="text-slate-400 text-sm">Connecting engineering talent across 5 continents.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10">
                      <span className="material-symbols-outlined text-sm">public</span>
                    </div>
                    <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10">
                      <span className="material-symbols-outlined text-sm">settings</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                    <div className="size-8 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">shield</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Security</p>
                      <p className="text-white text-xs font-bold">SOC2 Type II</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                    <div className="size-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">headset_mic</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Support</p>
                      <p className="text-white text-xs font-bold">24/7 Global</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Contact;