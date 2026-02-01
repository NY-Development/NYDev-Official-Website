import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050a15] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* --- HERO SECTION --- */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">JOIN THE FUTURE</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
              Building the intelligence of tomorrow, today. We're looking for visionaries ready to shape the next era of AI and software engineering. Find your place at NYDev.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
              </div>
              <input 
                type="text" 
                placeholder="Search for roles (e.g. AI Engineer, Designer)..." 
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-32 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 rounded-lg text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all">
                Search
              </button>
            </div>
          </div>

          {/* --- FILTERS BAR --- */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 border-y border-slate-200 dark:border-white/5 mb-12">
            <div className="flex gap-4">
              <select className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2 text-xs text-slate-600 dark:text-slate-300 focus:outline-none">
                <option>All Departments</option>
              </select>
              <select className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2 text-xs text-slate-600 dark:text-slate-300 focus:outline-none">
                <option>All Locations</option>
              </select>
            </div>
            <p className="text-slate-500 text-xs mt-4 md:mt-0">Showing <span className="text-slate-900 dark:text-white font-bold">12</span> open roles</p>
          </div>

          {/* --- MAIN CONTENT GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-500">work</span>
                <h2 className="text-xl font-bold">Open Roles</h2>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Senior AI Engineer', dept: 'Engineering', loc: 'New York, NY (Hybrid)', type: 'Full-time', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
                  { title: 'Product Designer', dept: 'Design', loc: 'Remote', type: 'Full-time', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
                  { title: 'ML Ops Specialist', dept: 'Infrastructure', loc: 'London, UK', type: 'Full-time', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
                  { title: 'Frontend Developer', dept: 'Engineering', loc: 'New York, NY', type: 'Contract', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' }
                ].map((job, i) => (
                  <div key={i} className="group p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold mb-3">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className={`px-2 py-1 rounded-md font-bold uppercase tracking-tighter ${job.color}`}>{job.dept}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> {job.loc}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {job.type}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 rounded-lg border border-slate-300 dark:border-white/10 text-xs font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                      Join Us
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-purple-600 dark:text-purple-500">groups</span>
                <h2 className="text-xl font-bold">Life at NYDev</h2>
              </div>

              <div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-[#050a15] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="font-bold text-white mb-1">Relentless Innovation</h4>
                  <p className="text-slate-300 text-[11px]">Pushing boundaries in our R&D labs every single day.</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-indigo-600/5 dark:bg-indigo-600/10 border border-indigo-500/20">
                <div className="size-10 rounded-lg bg-indigo-600 flex items-center justify-center mb-6 text-white">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h4 className="font-bold mb-4">High-Tech Environment</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Our workspaces are designed for deep focus and collaborative breakthroughs.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                  Read about our stack <span className="material-symbols-outlined text-xs">north_east</span>
                </button>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <h4 className="font-bold mb-6">Perks & Benefits</h4>
                <ul className="space-y-4">
                  {[
                    '100% Remote-first options',
                    'Competitive Equity Packages',
                    'Comprehensive Health & Wellness',
                    'Annual Tech Stipend'
                  ].map((perk, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareersPage;