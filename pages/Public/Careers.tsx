
import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="contents">
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-10">
              Careers at NYDev
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">Join the Vanguard of Engineering.</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">We are looking for engineers who are obsessed with precision, scalability, and the future of artificial intelligence.</p>
          </div>

          <div className="space-y-4 mb-32">
             <div className="flex items-center justify-between px-10 py-4 border-b border-slate-200 dark:border-white/5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
               <span>Open Role</span>
               <div className="flex gap-20">
                 <span className="w-32">Location</span>
                 <span className="w-32">Department</span>
               </div>
             </div>
             {[
               { title: 'Senior AI Infrastructure Engineer', loc: 'Remote / NYC', dept: 'AI CORE' },
               { title: 'Full Stack Product Engineer', loc: 'Remote', dept: 'PLATFORM' },
               { title: 'Security Architect (Zero-Trust)', loc: 'Remote / London', dept: 'SECURE' },
               { title: 'Distributed Systems Lead', loc: 'Remote', dept: 'INFRA' },
               { title: 'MLOps Automation Specialist', loc: 'Remote / NYC', dept: 'AI CORE' }
             ].map((job, i) => (
               <div key={i} className="group flex items-center justify-between px-10 py-8 rounded-2xl bg-slate-50 dark:bg-navy/30 border border-slate-200 dark:border-card-border hover:bg-primary/5 hover:border-primary/40 transition-all cursor-pointer">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex gap-20 items-center">
                    <span className="w-32 text-slate-500 dark:text-slate-400 text-sm">{job.loc}</span>
                    <span className="w-32 text-slate-500 dark:text-slate-400 text-sm">{job.dept}</span>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-slate-50 dark:bg-navy/50 border border-slate-200 dark:border-card-border rounded-3xl p-16 flex flex-col items-center text-center gap-8 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Don't see a role for you?</h2>
             <p className="text-slate-500 dark:text-slate-500 max-w-xl">If you are a world-class engineer with a passion for building high-scale systems, send us a pitch for why you belong at NYDev.</p>
             <button className="px-10 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/10 transition-all">Submit General Application</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareersPage;
