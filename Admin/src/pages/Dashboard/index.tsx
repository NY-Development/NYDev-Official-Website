import React, { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { getProjects } from '../../services/project.service';
import { getTeam } from '../../services/team.service';
import { getContentBlocks } from '../../services/content.service';
import { getUsers } from '../../services/user.service';
import type { Project } from '../../types/project';
import type { TeamMember } from '../../types/team';
import type { ContentBlock } from '../../types/content';
import type { AdminUser } from '../../types/user';

const buildWeeklyChart = (projects: Project[]) => {
  const weeks = Array.from({ length: 8 }, (_, index) => {
    const start = new Date();
    start.setDate(start.getDate() - index * 7);
    const startOfWeek = new Date(start);
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
  }).reverse();

  return weeks.map((weekStart, index) => {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 7);
    const weekProjects = projects.filter((project) => {
      const createdAt = new Date(project.createdAt);
      return createdAt >= weekStart && createdAt < weekEnd;
    });

    const published = weekProjects.filter((project) => project.status === 'published').length;
    const drafts = weekProjects.filter((project) => project.status === 'draft').length;
    return { name: `WK ${index + 1}`, published, drafts };
  });
};

const DashboardPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);

  useEffect(() => {
    Promise.all([getProjects(), getTeam(), getContentBlocks(), getUsers()])
      .then(([projectsData, teamData, contentData, userData]) => {
        setProjects(projectsData);
        setTeam(teamData);
        setContentBlocks(contentData);
        setUsers(userData);
      })
      .catch(() => {
        setProjects([]);
        setTeam([]);
        setContentBlocks([]);
        setUsers([]);
      });
  }, []);

  const publishedCount = projects.filter((project) => project.status === 'published').length;
  const draftCount = projects.filter((project) => project.status === 'draft').length;
  const activeTeams = team.filter((member) => member.status === 'active').length;
  const draftBlocks = contentBlocks.filter((block) => block.status === 'draft').length;

  const chartData = useMemo(() => buildWeeklyChart(projects), [projects]);

  const recentDeployments = projects.slice(0, 3).map((project) => ({
    id: project.slug,
    status: project.status,
    team: project.technologies?.[0] || 'Core',
    health: project.status === 'published' ? 98 : project.status === 'draft' ? 45 : 28,
  }));

  const alerts = [
    { title: 'Pending Approval', detail: `${draftBlocks} content blocks in draft`, color: 'text-amber-400' },
    { title: 'System Notice', detail: `${draftCount} projects waiting on publish`, color: 'text-primary' },
    { title: 'Deployment', detail: `${publishedCount} live deployments active`, color: 'text-emerald-400' },
  ];
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Total Projects', value: `${projects.length}`, change: `${publishedCount} published`, icon: 'analytics' },
          { label: 'Active Teams', value: `${activeTeams}`, change: `${team.length} total`, icon: 'diversity_3' },
          { label: 'Content Blocks', value: `${contentBlocks.length}`, change: `${draftBlocks} draft`, icon: 'view_quilt' },
          { label: 'Total Users', value: `${users.length}`, change: `${users.filter((user) => user.role === 'admin').length} admins`, icon: 'person_add' },
        ].map((card) => (
          <div key={card.label} className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-icons text-primary">{card.icon}</span>
              </div>
              <span className="text-xs font-medium text-emerald-400 flex items-center">
                <span className="material-icons text-[14px]">trending_up</span>
                {card.change}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{card.label}</h3>
            <p className="text-2xl font-bold mt-1 text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 rounded-xl min-h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold">Project Lifecycle Analysis</h2>
            <p className="text-sm text-slate-500">Comparing published vs draft metrics over the last 30 days</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-xs font-medium">Published</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-600"></span>
              <span className="text-xs font-medium">Drafts</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barGap={6} barSize={16}>
              <Bar dataKey="published" fill="#246bf9" radius={[6, 6, 0, 0]} />
              <Bar dataKey="drafts" fill="#475569" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-8">
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 className="font-bold">Active Deployments</h2>
            <button className="text-xs text-primary hover:underline font-medium">View detailed log</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-slate-500 bg-white/[0.02] uppercase tracking-wider">
                <th className="px-6 py-3 font-semibold">Instance ID</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Team</th>
                <th className="px-6 py-3 font-semibold">Health</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentDeployments.map((row) => (
                <tr key={row.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-sm">{row.id}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{row.team}</td>
                  <td className="px-6 py-4">
                    <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full" style={{ width: `${row.health}%` }}></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold">System Alerts</h2>
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{alerts.length} NEW</span>
            </div>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.title} className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary">
                  <p className={`text-xs font-bold uppercase tracking-tight ${alert.color}`}>{alert.title}</p>
                  <p className="text-sm font-medium mt-2">{alert.detail}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-slate-700 rounded-lg text-xs font-bold text-slate-500 hover:text-primary hover:border-primary transition-all uppercase tracking-widest">
              Clear All Notifications
            </button>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h2 className="font-bold mb-2">Team Velocity</h2>
            <p className="text-3xl font-bold">88%</p>
            <p className="text-xs text-slate-400 mt-1">Productivity is up 12% from last sprint</p>
            <div className="mt-6 w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[88%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
