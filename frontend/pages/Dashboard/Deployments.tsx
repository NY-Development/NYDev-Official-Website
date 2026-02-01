
import React from 'react';

const Deployments: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Deployments Pipeline</h1>
          <p className="text-slate-400 mt-1">Real-time status of your deployment workflows across <span className="text-emerald-400 font-bold">Production</span> and <span className="text-primary font-bold">Staging</span>.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-lg bg-card-dark border border-card-border text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:border-slate-500 transition-all">
            <span className="material-symbols-outlined !text-lg">filter_list</span>
            Filter
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-crimson-red hover:bg-red-700 text-xs font-bold uppercase tracking-widest text-white shadow-neon-red transition-all flex items-center gap-2">
            <span className="material-symbols-outlined !text-lg">play_arrow</span>
            Trigger New Build
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Success Rate', val: '98.5%', icon: 'check_circle', color: 'text-emerald-400' },
          { label: 'Avg Duration', val: '4m 12s', icon: 'timer', color: 'text-primary' },
          { label: 'Active Builds', val: '3', icon: 'construction', color: 'text-purple' },
          { label: 'Total Deploys', val: '1,240', icon: 'history', color: 'text-slate-400' },
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-card-dark border border-card-border rounded-xl flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold text-white mt-1 font-mono">{stat.val}</p>
            </div>
            <div className={`p-2 rounded-full bg-white/5 ${stat.color}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 relative pl-10">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-card-border via-card-border to-transparent" />
        
        {/* Active Build */}
        <div className="relative group">
           <div className="absolute -left-[30px] top-6 size-10 rounded-full bg-navy border border-primary shadow-[0_0_15px_rgba(31,105,255,0.4)] flex items-center justify-center z-10">
             <span className="material-symbols-outlined text-primary !text-lg animate-spin">sync</span>
           </div>
           <div className="bg-card-dark border border-primary/30 rounded-xl p-6 shadow-glass hover:border-primary/60 transition-all">
             <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                   <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                     <span className="material-symbols-outlined !text-2xl">smart_toy</span>
                   </div>
                   <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">Neural Net Inference Engine</h3>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest border border-primary/20">In Progress</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">Build #4829 • Started by <span className="text-white font-bold">Alex Chen</span></p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Duration</p>
                    <p className="text-white font-mono text-sm">00:02:14</p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all">Cancel</button>
                  <button className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold shadow-neon-blue">View Logs</button>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-card-border">
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="material-symbols-outlined !text-sm">call_split</span>
                  <span className="text-xs font-mono">feature/transformer-opt</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="material-symbols-outlined !text-sm">commit</span>
                  <span className="text-xs font-mono">8a2b9d1</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="material-symbols-outlined !text-sm">cloud_done</span>
                  <span className="text-xs uppercase font-bold tracking-widest">Staging Environment</span>
                </div>
             </div>
             <div className="mt-6 w-full h-1 bg-midnight rounded-full overflow-hidden">
               <div className="bg-primary h-full rounded-full relative" style={{ width: '65%' }}>
                 <div className="absolute inset-0 bg-white/20 animate-pulse" />
               </div>
             </div>
           </div>
        </div>

        {/* Successful Build */}
        <div className="relative group">
           <div className="absolute -left-[30px] top-6 size-10 rounded-full bg-navy border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] flex items-center justify-center z-10 group-hover:scale-110 transition-all">
             <span className="material-symbols-outlined text-emerald-500 !text-lg">check</span>
           </div>
           <div className="bg-card-dark border border-card-border rounded-xl p-6 hover:border-white/10 transition-all opacity-80 hover:opacity-100">
             <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
                <div className="flex items-start gap-4">
                   <div className="size-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                     <span className="material-symbols-outlined !text-2xl">dashboard</span>
                   </div>
                   <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">Client Dashboard UI</h3>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase tracking-widest border border-emerald-500/20">Successful</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">Build #4828 • 15 minutes ago</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Duration</p>
                  <p className="text-white font-mono text-sm">00:04:12</p>
                </div>
             </div>
           </div>
        </div>

        {/* Failed Build */}
        <div className="relative group">
           <div className="absolute -left-[30px] top-6 size-10 rounded-full bg-navy border border-crimson-red shadow-[0_0_10px_rgba(220,20,60,0.3)] flex items-center justify-center z-10">
             <span className="material-symbols-outlined text-crimson-red !text-lg">priority_high</span>
           </div>
           <div className="bg-card-dark border border-crimson-red/20 rounded-xl p-6 hover:border-crimson-red/40 transition-all">
             <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                   <div className="size-12 rounded-lg bg-crimson-red/10 flex items-center justify-center text-crimson-red">
                     <span className="material-symbols-outlined !text-2xl">cloud_sync</span>
                   </div>
                   <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">Data Ingestion Service</h3>
                        <span className="px-2 py-0.5 rounded bg-crimson-red/10 text-crimson-red text-[9px] font-bold uppercase tracking-widest border border-crimson-red/20">Failed</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">Build #4827 • 2 hours ago</p>
                   </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-crimson-red text-white text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg">replay</span>
                  Retry Build
                </button>
             </div>
             <div className="p-4 rounded-lg bg-midnight border border-crimson-red/20 text-xs font-mono text-crimson-red/80">
                <span className="font-bold mr-2 uppercase text-[10px]">Error:</span> Connection timeout to Kafka broker at 10.0.2.15:9092. Check network policies.
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Deployments;
