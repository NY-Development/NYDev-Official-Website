
import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Instances', val: '482', sub: '+12', icon: 'memory', color: 'bg-primary' },
          { label: 'Global Latency', val: '24ms', sub: '-2ms', icon: 'speed', color: 'bg-emerald-500' },
          { label: 'Throughput', val: '12.5GB/s', sub: 'Stable', icon: 'swap_calls', color: 'bg-purple-500' },
          { label: 'Error Rate', val: '0.02%', sub: 'Normal', icon: 'warning', color: 'bg-crimson-red' },
        ].map((stat, i) => (
          <div key={i} className="p-5 bg-card-dark border border-card-border rounded-xl">
             <div className="flex justify-between items-start mb-2">
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
               <span className="material-symbols-outlined text-slate-500 !text-xl">{stat.icon}</span>
             </div>
             <div className="flex items-baseline gap-2">
               <h3 className="text-2xl font-bold font-mono text-white">{stat.val}</h3>
               <span className="text-[10px] font-bold text-emerald-400 uppercase">{stat.sub}</span>
             </div>
             <div className="w-full bg-midnight h-1 rounded-full mt-3 overflow-hidden">
               <div className={`${stat.color} h-full w-[70%]`} />
             </div>
          </div>
        ))}
      </div>

      {/* Network Topology Map */}
      <div className="bg-card-dark border border-card-border rounded-xl p-8 relative min-h-[500px] flex items-center justify-center overflow-hidden shadow-glass">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,105,255,0.05),transparent_70%)]" />
        <div className="absolute top-6 left-6 flex flex-col gap-1">
          <h3 className="text-white font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">hub</span>
            Live Architecture Map
          </h3>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Multi-cloud mesh network topology</p>
        </div>

        {/* Abstract Map Nodes */}
        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
           {/* Center Gateway */}
           <div className="z-10 flex flex-col items-center">
             <div className="size-24 rounded-full border-2 border-primary bg-navy shadow-[0_0_30px_rgba(31,105,255,0.3)] flex items-center justify-center relative">
               <div className="absolute inset-0 border border-primary rounded-full animate-ping opacity-20" />
               <span className="material-symbols-outlined !text-4xl text-primary">router</span>
             </div>
             <div className="mt-4 px-4 py-2 rounded-lg bg-navy/80 border border-card-border text-center backdrop-blur-md">
               <p className="text-white text-xs font-bold">Global Gateway</p>
               <p className="text-emerald-400 text-[10px] font-mono">100% UPTIME</p>
             </div>
           </div>

           {/* Cloud Providers */}
           {[
             { name: 'AWS', loc: 'us-east-1', pos: 'top-[10%] left-[15%]', color: 'text-orange-400' },
             { name: 'GCP', loc: 'europe-west3', pos: 'top-[10%] right-[15%]', color: 'text-blue-400' },
             { name: 'AZR', loc: 'asia-east', pos: 'bottom-[10%] right-[15%]', color: 'text-cyan-400' },
             { name: 'CloudFlare', loc: 'CDN Active', pos: 'bottom-[10%] left-[15%]', icon: 'public', color: 'text-purple-400' },
           ].map(node => (
             <div key={node.name} className={`absolute ${node.pos} flex flex-col items-center`}>
               <div className={`size-14 rounded-xl bg-card-dark border border-card-border hover:border-primary transition-all flex items-center justify-center ${node.color} shadow-lg cursor-pointer`}>
                 {node.icon ? <span className="material-symbols-outlined">{node.icon}</span> : <span className="font-bold text-sm">{node.name}</span>}
               </div>
               <div className="mt-3 text-center">
                 <p className="text-white text-[10px] font-bold uppercase tracking-widest">{node.loc}</p>
                 <div className="flex items-center gap-1.5 justify-center mt-1">
                   <div className="size-1.5 rounded-full bg-emerald-500" />
                   <span className="text-slate-500 text-[9px] uppercase font-bold">Healthy</span>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card-dark border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm">Server Health</h3>
            <button className="text-primary text-[10px] font-bold uppercase hover:underline">View All</button>
          </div>
          <div className="space-y-5">
            {[
              { label: 'Kubernetes Master', val: '12% CPU', color: 'bg-emerald-500' },
              { label: 'Worker Nodes (Avg)', val: '68% CPU', color: 'bg-warning' },
              { label: 'Inference Clusters', val: '84% GPU', color: 'bg-primary' },
            ].map(s => (
              <div key={s.label}>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">
                  <span>{s.label}</span>
                  <span className="text-white font-mono">{s.val}</span>
                </div>
                <div className="w-full bg-midnight h-1 rounded-full overflow-hidden">
                  <div className={`${s.color} h-full`} style={{ width: s.val.split('%')[0] + '%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-dark border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm">Database Clusters</h3>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-widest border border-emerald-500/20">All Healthy</span>
          </div>
          <div className="space-y-3">
             {[
               { name: 'PostgreSQL Primary', meta: 'db-prod-01 • 142 connections', v: 'v14.2' },
               { name: 'Redis Cache', meta: 'cache-main • 89% Hit rate', v: 'v6.0' },
               { name: 'Mongo Atlas', meta: 'Analytics Store • Replicating', v: 'v5.0' },
             ].map(db => (
               <div key={db.name} className="flex items-center justify-between p-2.5 rounded-lg bg-midnight border border-card-border">
                 <div className="flex items-center gap-3">
                   <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                   <div>
                     <p className="text-white text-xs font-bold leading-tight">{db.name}</p>
                     <p className="text-slate-500 text-[10px] mt-0.5">{db.meta}</p>
                   </div>
                 </div>
                 <span className="text-slate-500 text-[10px] font-mono">{db.v}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="bg-card-dark border border-card-border rounded-xl p-6">
           <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm">Edge Status</h3>
            <button className="text-primary text-[10px] font-bold uppercase hover:underline">Map View</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { region: 'North America', lat: '12ms', status: 'text-emerald-400' },
              { region: 'Europe', lat: '28ms', status: 'text-emerald-400' },
              { region: 'Asia Pacific', lat: '142ms', status: 'text-warning' },
              { region: 'South America', lat: '89ms', status: 'text-emerald-400' },
            ].map(r => (
              <div key={r.region} className="p-3 rounded-lg bg-midnight border border-card-border text-center">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{r.region}</p>
                <p className={`text-sm font-bold font-mono mt-1 ${r.status}`}>{r.lat}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 justify-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live RUM Data
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
