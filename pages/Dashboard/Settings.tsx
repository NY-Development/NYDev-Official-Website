
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your account preferences, API keys, and security configuration.</p>
      </div>

      <div className="border-b border-card-border">
        <nav className="flex gap-8">
          {['Account', 'Team', 'API Keys', 'Security'].map(tab => (
            <button key={tab} className={`pb-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${tab === 'Account' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-white'}`}>{tab}</button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Public Profile</h3>
          <p className="text-sm text-slate-500">This information will be displayed publicly on the team page.</p>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="size-24 rounded-full bg-cover bg-center ring-4 ring-navy" style={{ backgroundImage: 'url(https://picsum.photos/id/64/200/200)' }} />
              <button className="absolute bottom-0 right-0 size-8 rounded-full bg-primary text-white flex items-center justify-center border-4 border-midnight hover:bg-blue-600 shadow-lg">
                <span className="material-symbols-outlined !text-sm">edit</span>
              </button>
            </div>
            <div>
              <button className="px-4 py-2 rounded-lg bg-card-dark border border-card-border text-xs font-bold uppercase tracking-widest text-white hover:border-slate-500 transition-all">Change Avatar</button>
              <p className="text-[10px] text-slate-600 mt-2 font-bold uppercase tracking-widest">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">First name</label>
              <input className="w-full bg-navy/50 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all" defaultValue="Alex" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last name</label>
              <input className="w-full bg-navy/50 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all" defaultValue="Chen" />
            </div>
            <div className="col-span-2 space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Username</label>
              <div className="flex">
                <div className="px-4 py-3 bg-card-dark border border-r-0 border-card-border rounded-l-lg text-sm text-slate-500">nydev.ai/</div>
                <input className="flex-1 bg-navy/50 border border-card-border rounded-r-lg px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all" defaultValue="alex_chen" />
              </div>
            </div>
            <div className="col-span-2 space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Bio</label>
              <textarea className="w-full bg-navy/50 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all h-32 resize-none" defaultValue="Senior Full Stack Engineer passionate about AI infrastructure and scalable systems." />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-card-border w-full" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Contact Info</h3>
          <p className="text-sm text-slate-500">Manage your email and communication preferences.</p>
        </div>
        <div className="md:col-span-2 space-y-8">
           <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email address</label>
              <input className="w-full bg-navy/50 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all" defaultValue="alex@nydev.ai" />
           </div>
           
           <div className="space-y-6">
              {[
                { title: 'Email Notifications', desc: 'Receive weekly digests and deployment alerts.', active: true },
                { title: 'Marketing Emails', desc: 'Receive news about new features and products.', active: false },
              ].map(pref => (
                <div key={pref.title} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{pref.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{pref.desc}</p>
                  </div>
                  <button className={`w-11 h-6 rounded-full relative transition-all ${pref.active ? 'bg-primary' : 'bg-card-border'}`}>
                    <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${pref.active ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-10">
        <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-all">Cancel</button>
        <button className="px-8 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-sm font-bold text-white shadow-neon-blue uppercase tracking-widest transition-all">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
