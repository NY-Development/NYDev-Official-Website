
import React from 'react';

const MissionControl: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Mission Control</h1>
          <p className="text-slate-400 mt-2">
            System operating at <span className="text-emerald-400 font-bold">99.9% efficiency</span>. 
            There are <span className="text-primary font-bold">3 pending deployments</span> requiring approval.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-lg bg-card-dark border border-card-border text-sm font-bold hover:border-slate-500 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-sm font-bold text-white shadow-neon-blue transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">add</span>
            New Project
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Commits', value: '1,284', trend: '+12%', icon: 'commit', color: 'text-primary' },
          { label: 'Active Issues', value: '23', trend: '+2%', icon: 'bug_report', color: 'text-crimson-red' },
          { label: 'Server Uptime', value: '99.98%', trend: 'Stable', icon: 'dns', color: 'text-emerald-400' },
          { label: 'API Calls', value: '8.5M', trend: '+5%', icon: 'api', color: 'text-purple' },
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-card-dark border border-card-border rounded-xl group hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1 font-mono">{stat.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400`}>
                {stat.trend}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">since last period</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-dark border border-card-border rounded-xl p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Project Velocity</h3>
              <p className="text-slate-400 text-sm">Code frequency and deployment rate over time.</p>
            </div>
            <div className="flex bg-midnight p-1 rounded-lg border border-card-border">
              {['30d', '90d', '1y'].map(d => (
                <button key={d} className={`px-3 py-1 text-xs font-bold rounded ${d === '30d' ? 'bg-card-border text-white' : 'text-slate-500'}`}>{d}</button>
              ))}
            </div>
          </div>
          <div className="relative flex-1 min-h-[300px] flex items-end">
             {/* Chart Placeholder SVG */}
             <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="chartGlow" x1="0" x2="0" y1="0" y2="1">
                   <stop offset="0%" stopColor="#1F69FF" stopOpacity="0.4" />
                   <stop offset="100%" stopColor="#1F69FF" stopOpacity="0" />
                 </linearGradient>
               </defs>
               <path d="M0,250 C150,230 300,100 450,150 S750,50 1000,80 V300 H0 Z" fill="url(#chartGlow)" />
               <path d="M0,250 C150,230 300,100 450,150 S750,50 1000,80" fill="none" stroke="#1F69FF" strokeWidth="3" />
             </svg>
             <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-500 font-mono pt-4">
               <span>AUG 01</span>
               <span>AUG 15</span>
               <span>SEP 01</span>
               <span>SEP 15</span>
               <span>TODAY</span>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card-dark border border-card-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">System Health</h3>
            <div className="space-y-6">
              {[
                { label: 'CPU Load (Core)', val: '42%', color: 'bg-primary' },
                { label: 'Memory Usage', val: '68%', color: 'bg-emerald-500' },
                { label: 'AI Inference Latency', val: '124ms', color: 'bg-orange-500' },
              ].map(h => (
                <div key={h.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">{h.label}</span>
                    <span className="text-white font-mono">{h.val}</span>
                  </div>
                  <div className="w-full bg-midnight h-1.5 rounded-full overflow-hidden">
                    <div className={`${h.color} h-full`} style={{ width: h.val === '124ms' ? '75%' : h.val }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card-dark border border-card-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Live Activity</h3>
            <div className="space-y-6 pl-4 border-l border-card-border">
               {[
                 { title: 'Deployment #v4.2.1 successful.', time: '2 mins ago', color: 'bg-emerald-500' },
                 { title: 'New commit to main branch.', time: '15 mins ago', color: 'bg-primary' },
                 { title: 'AI Model training paused.', time: '1 hr ago', color: 'bg-orange-500' },
               ].map((act, i) => (
                 <div key={i} className="relative">
                   <div className={`absolute -left-[21px] top-1 size-2.5 rounded-full ${act.color} ring-4 ring-card-dark`} />
                   <p className="text-sm font-medium text-slate-200">{act.title}</p>
                   <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{act.time}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionControl;
