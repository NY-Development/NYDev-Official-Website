import React, { useEffect, useState } from 'react';
import { getTeam } from '../../services/team.service';
import type { TeamMember } from '../../types/team';

const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    getTeam().then(setTeam).catch(() => setTeam([]));
  }, []);

  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="flex-1">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
            <p className="text-slate-500 mt-1">Manage permissions and roles for your engineering team.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg hover:bg-white/5 transition-all text-sm">
              <span className="material-icons text-sm">filter_list</span> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg hover:bg-white/5 transition-all text-sm">
              <span className="material-icons text-sm">download</span> Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="group relative bg-white/5 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute -inset-1 bg-primary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img className="relative w-24 h-24 rounded-full border-2 border-primary object-cover" src={member.avatarUrl} alt={member.name} />
                  <div className={`absolute bottom-1 right-1 w-5 h-5 ${member.status === 'active' ? 'bg-green-500' : 'bg-slate-600'} border-4 border-[#0f1623] rounded-full`}></div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.title}</p>
                <div className="mt-4 flex gap-2 flex-wrap justify-center">
                  {member.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-wider font-bold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-[#0f1623]/80 backdrop-blur rounded-lg border border-slate-800 hover:text-primary transition-colors">
                  <span className="material-icons text-sm">edit</span>
                </button>
                <button className="p-2 bg-[#0f1623]/80 backdrop-blur rounded-lg border border-slate-800 hover:text-red-500 transition-colors">
                  <span className="material-icons text-sm">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="w-full xl:w-[360px] glass-panel rounded-2xl border border-slate-800 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Edit Member</h2>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Member Bio</label>
            <textarea className="w-full bg-white/5 border border-slate-800 rounded-lg p-3 text-sm resize-none" rows={4} placeholder="Write a short biography..."></textarea>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Role Assignment</label>
            <select className="w-full bg-white/5 border border-slate-800 rounded-lg p-3 text-sm">
              <option>Lead Developer</option>
              <option>Senior Architect</option>
              <option>UX Designer</option>
              <option>Fullstack Engineer</option>
              <option>DevOps Specialist</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Social Profiles</label>
            <input className="w-full bg-white/5 border border-slate-800 rounded-lg p-2 text-sm" placeholder="github.com/" />
            <input className="w-full bg-white/5 border border-slate-800 rounded-lg p-2 text-sm" placeholder="linkedin.com/in/" />
            <input className="w-full bg-white/5 border border-slate-800 rounded-lg p-2 text-sm" placeholder="twitter.com/" />
          </div>
          <div className="pt-4 border-t border-slate-800">
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="sr-only" type="checkbox" defaultChecked />
              <div className="w-10 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">Two-Factor Authentication Required</span>
            </label>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="px-4 py-2 border border-slate-700 rounded-lg hover:bg-white/5 transition-all text-sm">Cancel</button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:brightness-110 transition-all text-sm shadow-lg shadow-primary/20">
            Save Changes
          </button>
        </div>
      </aside>
    </div>
  );
};

export default TeamPage;
