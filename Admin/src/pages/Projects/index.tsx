import React, { useEffect, useState } from 'react';
import DataTable from '../../components/tables/DataTable';
import Modal from '../../components/modals/Modal';
import FileUpload from '../../components/forms/FileUpload';
import TagSelector from '../../components/forms/TagSelector';
import Button from '../../components/ui/Button';
import type { Project } from '../../types/project';
import { getProjects, toggleProjectStatus } from '../../services/project.service';

const techOptions = ['React', 'Next.js', 'NodeJS', 'GraphQL', 'AWS', 'Python', 'Tailwind', 'Vue 3', 'Redis'];

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    getProjects().then(setProjects).catch(() => setProjects([]));
  }, []);

  useEffect(() => {
    if (selected) {
      setTags(selected.technologies || []);
    }
  }, [selected]);

  const handleStatusToggle = async (project: Project) => {
    const nextStatus = project.status === 'published' ? 'draft' : 'published';
    try {
      const updated = await toggleProjectStatus(project.id, nextStatus);
      setProjects((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
    } catch (error) {
      return;
    }
  };

  const columns = [
    {
      key: 'name',
      header: 'Project Name',
      render: (row: Project) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border border-white/10">
            <span className="material-icons text-primary">auto_fix_high</span>
          </div>
          <span className="font-semibold text-slate-100">{row.name}</span>
        </div>
      ),
    },
    {
      key: 'slug',
      header: 'Slug',
      render: (row: Project) => (
        <code className="text-xs px-2 py-1 bg-white/5 rounded text-slate-400">{row.slug}</code>
      ),
    },
    {
      key: 'tech',
      header: 'Technologies',
      render: (row: Project) => (
        <div className="flex flex-wrap gap-2">
          {row.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tighter bg-primary/10 text-primary border border-primary/30 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (row: Project) => (
        <label className="relative inline-flex items-center cursor-pointer group">
          <input
            checked={row.status === 'published'}
            onChange={() => handleStatusToggle(row)}
            className="sr-only peer"
            type="checkbox"
          />
          <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          <span className="ml-3 text-xs font-medium text-slate-400">{row.status}</span>
        </label>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      align: 'right' as const,
      render: (row: Project) => (
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => setSelected(row)} className="p-2 hover:bg-primary/20 rounded-lg text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons text-sm">edit</span>
          </button>
          <button className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-icons text-sm">delete_outline</span>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Project Management</h1>
          <p className="text-sm text-slate-500">Control project lifecycles, assets, and status.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
            <input className="bg-slate-900/60 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm" placeholder="Search projects..." type="text" />
          </div>
          <Button>+ Add New Project</Button>
        </div>
      </div>

      <div className="glass-card rounded-xl border border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg border border-white/10">
              <span className="material-icons text-sm">filter_list</span>
              Filter by Tech
              <span className="material-icons text-sm">expand_more</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg border border-white/10">
              <span className="material-icons text-sm">sort</span>
              Sort: Latest
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">Bulk Actions:</span>
            <select className="bg-white/5 border border-white/10 rounded-lg text-xs py-1.5 pl-3 pr-8">
              <option>Select Action</option>
              <option>Batch Publish</option>
              <option>Batch Archive</option>
              <option>Delete Selected</option>
            </select>
            <button className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-900 hover:bg-primary hover:text-white transition-all">
              Apply
            </button>
          </div>
        </div>
        <DataTable columns={columns} data={projects} />
      </div>

      <Modal
        open={Boolean(selected)}
        title={selected?.name || 'Project'}
        onClose={() => setSelected(null)}
        footer={
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <span className="material-icons text-xs">info</span>
              Last autosaved at 14:22
            </span>
            <div className="flex items-center gap-4">
              <Button variant="danger">Discard Changes</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Name</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" defaultValue={selected?.name} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Client Entity</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white" defaultValue={selected?.client} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Detailed Description</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-none" rows={4} defaultValue={selected?.description}></textarea>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Media Assets</label>
              <FileUpload onFilesSelected={() => undefined} />
              <div className="mt-4 grid grid-cols-4 gap-3">
                {(selected?.assets || []).map((asset) => (
                  <div key={asset.id} className="relative group aspect-square rounded-lg overflow-hidden border border-white/10">
                    <img src={asset.url} alt="asset" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <button className="bg-[#0f1623]/80 p-1.5 rounded-full text-red-400">
                        <span className="material-icons text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="aspect-square rounded-lg bg-white/5 border border-dashed border-white/10 flex items-center justify-center">
                  <span className="material-icons text-slate-500">add</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <label className="block text-sm font-medium text-slate-300 mb-4">Technology Stack</label>
          <TagSelector value={tags} onChange={setTags} options={techOptions} />
        </div>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
