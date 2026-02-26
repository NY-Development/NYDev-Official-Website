import React, { useEffect, useState } from 'react';
import Modal from '../../components/modals/Modal';
import FileUpload from '../../components/forms/FileUpload';
import Button from '../../components/ui/Button';
import { createTeamMember, getTeam, updateTeamMember } from '../../services/team.service';
import type { TeamMember } from '../../types/team';
import { uploadAsset } from '../../services/upload.service';

const emptyForm: TeamMember = {
  id: '',
  name: '',
  role: '',
  desc: '',
  image: '',
  links: {},
  createdAt: '',
  updatedAt: '',
};

const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [form, setForm] = useState<TeamMember>(emptyForm);
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    getTeam().then(setTeam).catch(() => setTeam([]));
  }, []);

  const openCreate = () => {
    setSelected(null);
    setForm({ ...emptyForm, id: '' });
    setOpen(true);
  };

  const openEdit = (member: TeamMember) => {
    setSelected(member);
    setForm({ ...member, links: member.links || {} });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveError(null);
    try {
      if (selected) {
        const updated = await updateTeamMember(selected.id, form);
        setTeam((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
      } else {
        // Remove 'id' from payload for new team member
        const { id, ...createPayload } = form;
        const created = await createTeamMember(createPayload);
        setTeam((prev) => [created, ...prev]);
      }
      closeModal();
    } catch (error: any) {
      setSaveError(error?.response?.data?.message || 'Failed to save team member.');
    } finally {
      setSaving(false);
    }
  };

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      const result = await uploadAsset(files[0]);
      setForm((prev) => ({ ...prev, image: result.url }));
    } catch (error) {
      return;
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="flex-1">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
            <p className="text-slate-500 mt-1">Manage permissions and roles for your engineering team.</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={openCreate}>+ Add Member</Button>
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
                  <img className="relative w-24 h-24 rounded-full border-2 border-primary object-cover" src={member.image} alt={member.name} />
                  <div className={`absolute bottom-1 right-1 w-5 h-5 ${member.status === 'active' ? 'bg-green-500' : 'bg-slate-600'} border-4 border-[#0f1623] rounded-full`}></div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => openEdit(member)} className="p-2 bg-[#0f1623]/80 backdrop-blur rounded-lg border border-slate-800 hover:text-primary transition-colors">
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

      <Modal
        open={open}
        title={selected ? `Edit ${selected.name}` : 'Add Team Member'}
        onClose={closeModal}
        footer={
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <span className="material-icons text-xs">info</span>
              Provide a short bio and social links
            </span>
            <div className="flex items-center gap-4">
              <Button variant="danger" onClick={closeModal} disabled={saving}>Discard</Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : 'Save Member'}
              </Button>
            </div>
          </div>
        }
      >
        {saveError && (
          <div className="mb-4 text-xs text-red-500 font-semibold">{saveError}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
              <input
                value={form.role}
                onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                placeholder="Role or title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Image Path</label>
              <input
                value={form.image}
                onChange={(event) => setForm((prev) => ({ ...prev, image: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                placeholder="/team/member.jpg"
              />
              <div className="mt-4">
                <FileUpload onFilesSelected={handleUpload} accept="image/*" />
                {uploading && <p className="mt-2 text-xs text-slate-500">Uploading image...</p>}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
              <textarea
                value={form.desc}
                onChange={(event) => setForm((prev) => ({ ...prev, desc: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-none"
                rows={6}
                placeholder="Short team bio"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium text-slate-300 mb-4">Social Links</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: 'github', label: 'GitHub' },
              { key: 'linkedin', label: 'LinkedIn' },
              { key: 'instagram', label: 'Instagram' },
              { key: 'telegram', label: 'Telegram' },
              { key: 'x', label: 'X' },
              { key: 'twitter', label: 'Twitter' },
              { key: 'website', label: 'Website' },
              { key: 'youtube', label: 'YouTube' },
              { key: 'leetcode', label: 'LeetCode' },
            ].map((item) => (
              <input
                key={item.key}
                value={form.links?.[item.key as keyof TeamMember['links']] || ''}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    links: { ...prev.links, [item.key]: event.target.value },
                  }))
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm"
                placeholder={item.label}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamPage;
