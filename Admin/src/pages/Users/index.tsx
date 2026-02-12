import React, { useEffect, useState } from 'react';
import type { AdminUser, AuditLog } from '../../types/user';
import { getUsers, updateUserRole, getAuditLogs } from '../../services/user.service';
import Modal from '../../components/modals/Modal';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [selected, setSelected] = useState<AdminUser | null>(null);
  const [role, setRole] = useState<AdminUser['role']>('admin');

  useEffect(() => {
    getUsers().then(setUsers);
    getAuditLogs().then(setLogs);
  }, []);

  const handleRoleChange = async () => {
    if (!selected) return;
    const updated = await updateUserRole(selected.id, role);
    setUsers((prev) => prev.map((user) => (user.id === updated.id ? updated : user)));
    setSelected(null);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
            <span>System</span>
            <span className="material-icons text-[10px]">chevron_right</span>
            <span className="text-primary">User Management</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight">
            User Controls <span className="text-slate-500 font-light ml-2">{users.length}</span>
          </h1>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2">
          <span className="material-icons text-sm">person_add</span>
          Invite User
        </button>
      </div>

      <section className="glass-panel rounded-xl overflow-hidden border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-slate-900/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">User Identity</th>
              <th className="px-6 py-4">Access Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Active</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-900/60 transition-colors">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden"></div>
                    <div>
                      <p className="font-semibold text-sm">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border border-primary text-primary">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
                    <span className="text-xs font-medium">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-slate-500">{user.lastActiveAt || 'Just now'}</td>
                <td className="px-6 py-5 text-right">
                  <button onClick={() => { setSelected(user); setRole(user.role); }} className="text-slate-400 hover:text-primary mx-2">
                    <span className="material-icons text-xl">edit</span>
                  </button>
                  <button className="text-slate-400 hover:text-red-500 mx-2">
                    <span className="material-icons text-xl">block</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="material-icons text-primary text-xl">history</span>
            Administrative Audit Log
          </h3>
          <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">View All Events</button>
        </div>
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="bg-slate-900/60 p-4 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-sm">{log.action}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">{log.createdAt}</p>
              </div>
              <div className="text-[10px] font-mono text-slate-500">ID: {log.id}</div>
            </div>
          ))}
        </div>
      </section>

      <Modal
        open={Boolean(selected)}
        title="Change Role"
        onClose={() => setSelected(null)}
        footer={
          <div className="flex gap-3 justify-end">
            <button onClick={() => setSelected(null)} className="px-4 py-2 border border-slate-700 rounded-lg text-sm">Cancel</button>
            <button onClick={handleRoleChange} className="px-4 py-2 bg-primary rounded-lg text-sm">Update Role</button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-400">Assign a new role for {selected?.name}.</p>
          <select value={role} onChange={(event) => setRole(event.target.value as AdminUser['role'])} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="client">Client</option>
          </select>
        </div>
      </Modal>
    </div>
  );
};

export default UsersPage;
