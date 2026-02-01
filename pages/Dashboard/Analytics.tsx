
import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Detailed Analytics</h1>
          <p className="text-slate-400 mt-1">Deep dive into <span className="text-primary font-bold">user growth</span>, API usage spikes, and resource consumption.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-card-dark p-1 rounded-lg border border-card-border">
            {['7D', '30D', '90D', 'Custom'].map(d => (
              <button key={d} className={`px-4 py-1.5 text-xs font-bold rounded ${d === '30D' ? 'bg-primary text-white shadow-neon-blue' : 'text-slate-500 hover:text-white'}`}>{d}</button>
            ))}
          </div>
          <button className="px-5 py-2 rounded-lg bg-navy border border-card-border text-xs font-bold flex items-center gap-2 hover:border-slate-500 transition-all">
            <span className="material-symbols-outlined !text-lg">file_download</span>
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: 'Total Users', val: '14,203', trend: '+18%', sub: 'vs previous period', icon: 'groups', color: 'text-primary' },
           { label: 'API Requests', val: '28.5M', trend: '5.4%', sub: 'all-time high', icon: 'cloud_sync', color: 'text-purple' },
           { label: 'Avg Latency', val: '42ms', trend: '-12ms', sub: 'improvement', icon: 'speed', color: 'text-emerald-400' },
           { label: 'Error Rate', val: '0.04%', trend: 'Stable', sub: 'last 24h', icon: 'error_med', color: 'text-crimson-red' },
         ].map((stat, i) => (
           <div key={i} className="p-6 bg-card-dark border border-card-border rounded-xl hover:border-white/20 transition-all cursor-default">
             <div className="flex justify-between items-start mb-4">
               <div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                 <h3 className="text-2xl font-bold text-white mt-1 font-mono">{stat.val}</h3>
               </div>
               <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                 <span className="material-symbols-outlined">{stat.icon}</span>
               </div>
             </div>
             <div className="flex items-center gap-2">
               <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-primary'}`}>
                 {stat.trend}
               </span>
               <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">{stat.sub}</span>
             </div>
           </div>
         ))}
      </div>

      <div className="bg-card-dark border border-card-border rounded-xl p-8 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Traffic vs. System Load</h3>
            <p className="text-slate-400 text-sm mt-1">Correlation between active users and API endpoint consumption.</p>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <div className="size-3 rounded-full bg-primary" />
               <span className="text-[10px] font-bold text-slate-400 uppercase">Active Users</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="size-3 rounded-full bg-purple" />
               <span className="text-[10px] font-bold text-slate-400 uppercase">API Calls (x1000)</span>
             </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full flex items-end">
           <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path d="M0,350 Q100,340 200,200 T400,250 T600,100 T800,150 L1000,50 V400 H0 Z" fill="rgba(31,105,255,0.1)" />
              <path d="M0,350 Q100,340 200,200 T400,250 T600,100 T800,150 L1000,50" fill="none" stroke="#1F69FF" strokeWidth="3" />
              <path d="M0,380 Q150,370 300,280 T600,200 T900,100 L1000,80" fill="none" stroke="#A855F7" strokeWidth="2" strokeDasharray="6 4" />
           </svg>
           <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-600 font-mono pt-6">
             <span>00:00</span>
             <span>04:00</span>
             <span>08:00</span>
             <span>12:00</span>
             <span>16:00</span>
             <span>20:00</span>
             <span>NOW</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-dark border border-card-border rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-card-border flex justify-between items-center">
            <h3 className="text-white font-bold">Recent High-Volume Consumers</h3>
            <button className="text-primary text-[10px] font-bold uppercase hover:underline">View All Logs</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-midnight/50">
                <tr className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <th className="px-6 py-4">Client / Org</th>
                  <th className="px-6 py-4">Primary Endpoint</th>
                  <th className="px-6 py-4">Load (RPM)</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {[
                  { name: 'Tesla Inc.', id: 'org_882910', ep: '/v1/inference/chat', rpm: 2450, status: 'Allowed', c: 'text-emerald-400' },
                  { name: 'OpenAI Connect', id: 'org_112003', ep: '/v1/data/sync', rpm: 1120, status: 'Throttled', c: 'text-warning' },
                  { name: 'NVIDIA Research', id: 'org_551029', ep: '/v1/image/gen', rpm: 950, status: 'Allowed', c: 'text-emerald-400' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors text-sm">
                    <td className="px-6 py-4">
                      <div className="font-bold text-white">{row.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">{row.id}</div>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">{row.ep}</td>
                    <td className="px-6 py-4 font-mono font-bold text-white">{row.rpm}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-full bg-white/5 ${row.c} text-[9px] font-bold uppercase tracking-widest border border-white/5`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card-dark border border-card-border rounded-xl p-6 flex flex-col">
          <h3 className="text-white font-bold mb-6">Top API Endpoints</h3>
          <div className="space-y-6 flex-1">
            {[
              { ep: '/v1/inference/chat', pct: 42, req: '12M', lat: '150ms' },
              { ep: '/v2/auth/verify', pct: 28, req: '8M', lat: '45ms' },
              { ep: '/v1/data/sync', pct: 15, req: '4.2M', lat: '520ms' },
              { ep: '/v1/image/gen', pct: 12, req: '3.5M', lat: '1.2s' },
            ].map(ep => (
              <div key={ep.ep} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-400">{ep.ep}</span>
                  <span className="text-white font-bold">{ep.pct}%</span>
                </div>
                <div className="w-full bg-midnight h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: `${ep.pct}%` }} />
                </div>
                <div className="flex gap-3 text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                   <span>{ep.req} Requests</span>
                   <span>{ep.lat} Avg Latency</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
