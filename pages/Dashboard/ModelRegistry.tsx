
import React from 'react';

const ModelRegistry: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined !text-sm">auto_awesome</span>
            AI & Machine Learning
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Model Registry</h1>
          <p className="text-slate-400 max-w-xl">
            Manage your fine-tuned models and monitor inference performance. 
            Cluster efficiency is at <span className="text-emerald-400 font-bold">96%</span> with 12 active nodes.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-lg bg-card-dark border border-card-border text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:border-slate-500 transition-all">
            <span className="material-symbols-outlined !text-lg">upload</span>
            Import Weights
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-xs font-bold uppercase tracking-widest text-white shadow-neon-blue transition-all flex items-center gap-2">
            <span className="material-symbols-outlined !text-lg">add_circle</span>
            Train New Model
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Inferences', val: '2.4M', change: '+8%', icon: 'query_stats', trend: 'up' },
          { label: 'Avg. Confidence', val: '94.2%', change: 'Stable', icon: 'verified', trend: 'stable' },
          { label: 'GPU Utilization', val: '78%', change: 'High Load', icon: 'memory', trend: 'warning' },
          { label: 'Model Drift', val: '0.03', change: 'Normal', icon: 'difference', trend: 'stable' },
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-card-dark border border-card-border rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1 font-mono">{stat.val}</h3>
              </div>
              <div className="p-2 rounded-lg bg-white/5 text-primary">
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
               <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/5 ${stat.trend === 'warning' ? 'text-warning' : 'text-emerald-400'}`}>
                 {stat.change}
               </span>
               <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Across all models</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card-dark border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-bold flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary" />
              Inference Latency
            </h3>
            <div className="flex bg-midnight p-1 rounded-lg border border-card-border">
              <button className="px-3 py-1 text-xs font-bold rounded bg-card-border text-white">1h</button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500">24h</button>
            </div>
          </div>
          <div className="h-40 flex items-end justify-between gap-1 px-4">
             {/* Simple Sparkline Bars */}
             {Array.from({ length: 40 }).map((_, i) => (
               <div key={i} className="bg-primary/30 w-full rounded-t-sm hover:bg-primary transition-all cursor-pointer" style={{ height: `${Math.random() * 80 + 20}%` }} />
             ))}
          </div>
        </div>

        <div className="bg-card-dark border border-card-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-bold flex items-center gap-2">
              <div className="size-2 rounded-full bg-purple" />
              Accuracy
            </h3>
            <div className="flex bg-midnight p-1 rounded-lg border border-card-border">
              <button className="px-3 py-1 text-xs font-bold rounded bg-card-border text-white">1h</button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500">24h</button>
            </div>
          </div>
          <div className="h-40 flex items-end justify-between gap-1 px-4">
             {/* Simple Sparkline Bars */}
             {Array.from({ length: 40 }).map((_, i) => (
               <div key={i} className="bg-purple/30 w-full rounded-t-sm hover:bg-purple transition-all cursor-pointer" style={{ height: `${Math.random() * 40 + 60}%` }} />
             ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Deployed Models</h3>
          <div className="flex gap-2">
             <button className="px-3 py-1.5 rounded-lg bg-card-dark border border-card-border text-xs font-bold text-slate-400 hover:text-white transition-all flex items-center gap-2">
               <span className="material-symbols-outlined !text-sm">filter_list</span>
               Filter
             </button>
             <button className="px-3 py-1.5 rounded-lg bg-card-dark border border-card-border text-xs font-bold text-slate-400 hover:text-white transition-all flex items-center gap-2">
               <span className="material-symbols-outlined !text-sm">sort</span>
               Sort
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Llama-3 FT', meta: 'NLP • v2.1.0', lat: '45ms', acc: '96.8%', status: 'Live', color: 'bg-indigo-500' },
            { name: 'Vision Pro', meta: 'CV • v4.0.2', lat: '120ms', acc: '99.1%', status: 'Live', color: 'bg-blue-500' },
            { name: 'FraudGuard', meta: 'Tabular • v1.5', lat: '12ms', acc: '92.4%', status: 'Retraining', color: 'bg-orange-500' },
          ].map((model, i) => (
            <div key={i} className="bg-card-dark border border-card-border rounded-xl p-5 hover:border-primary/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-lg ${model.color}/20 flex items-center justify-center text-white border border-${model.color}/10`}>
                    <span className="material-symbols-outlined">{model.name.includes('FT') ? 'chat' : model.name.includes('Vision') ? 'visibility' : 'security'}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold leading-tight">{model.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{model.meta}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${model.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-warning/10 text-warning'} border border-white/5`}>
                  {model.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-midnight border border-card-border">
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mb-1">Latency</p>
                  <p className="text-white font-mono text-sm">{model.lat}</p>
                </div>
                <div className="p-3 rounded-lg bg-midnight border border-card-border">
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mb-1">Accuracy</p>
                  <p className="text-white font-mono text-sm">{model.acc}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-card-border flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                   <div className="w-8 h-4 rounded-full bg-primary relative">
                     <div className="absolute right-0.5 top-0.5 size-3 bg-white rounded-full shadow-sm" />
                   </div>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active</span>
                </label>
                <button className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelRegistry;
