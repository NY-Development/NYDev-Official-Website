import React, { useEffect, useState } from 'react';
import DataTable from '../../components/tables/DataTable';
import Modal from '../../components/modals/Modal';
import TagSelector from '../../components/forms/TagSelector';
import FileUpload from '../../components/forms/FileUpload';
import Button from '../../components/ui/Button';
import type { Project } from '../../types/project';
import { createProject, getProjects, updateProject } from '../../services/project.service';
import { uploadAsset } from '../../services/upload.service';

const techOptions = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Nestjs',
  'MongoDB',
  'PostgreSQL',
  'Django',
  'Python',
  'TypeScript',
  'Tailwind CSS',
  'Tailwindcss',
  'ChakraUI',
  'Framer Motion',
  'Google OAuth',
];

const categoryOptions = [
  'Web Development',
  'Backend & API',
  'Software Solutions',
  'Mobile App',
  'UI/UX Design',
  'Full Stack Development',
];

const emptyForm: Project = {
  id: '',
  title: '',
  desc: '',
  image: '',
  link: '',
  techTags: [],
  category: [],
  isDone: 'pending',
  createdAt: '',
  updatedAt: '',
};

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [form, setForm] = useState<Project>(emptyForm);
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getProjects().then(setProjects).catch(() => setProjects([]));
  }, []);

  const openCreate = () => {
    setSelected(null);
    setForm({ ...emptyForm, id: '' });
    setOpen(true);
  };

  const openEdit = (project: Project) => {
    setSelected(project);
    setForm({ ...project });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  const handleSave = async () => {
    try {
      if (selected) {
        const updated = await updateProject(selected.id, form);
        setProjects((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
      } else {
        const created = await createProject(form);
        setProjects((prev) => [created, ...prev]);
      }
      closeModal();
    } catch (error) {
      return;
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

  const columns = [
    {
      key: 'title',
      header: 'Project Name',
      render: (row: Project) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border border-white/10">
            <span className="material-icons text-primary">auto_fix_high</span>
          </div>
          <span className="font-semibold text-slate-100">{row.title}</span>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      render: (row: Project) => (
        <div className="flex flex-wrap gap-2">
          {(row.category || []).map((item) => (
            <span key={item} className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tighter bg-white/5 text-slate-300 border border-white/10 rounded-full">
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'techTags',
      header: 'Technologies',
      render: (row: Project) => (
        <div className="flex flex-wrap gap-2">
          {row.techTags.map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tighter bg-primary/10 text-primary border border-primary/30 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'isDone',
      header: 'Delivery',
      render: (row: Project) => (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
          row.isDone === 'done'
            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
            : row.isDone === 'testing'
              ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              : 'bg-slate-500/10 text-slate-300 border-slate-500/30'
        }`}>
          {row.isDone}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      align: 'right' as const,
      render: (row: Project) => (
        <div className="flex items-center justify-end gap-2">
          <button onClick={() => openEdit(row)} className="p-2 hover:bg-primary/20 rounded-lg text-slate-400 hover:text-primary transition-colors">
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
          <Button onClick={openCreate}>+ Add New Project</Button>
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
        open={open}
        title={selected ? `Edit ${selected.title}` : 'Add Project'}
        onClose={closeModal}
        footer={
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <span className="material-icons text-xs">info</span>
              Review details before saving
            </span>
            <div className="flex items-center gap-4">
              <Button variant="danger" onClick={closeModal}>Discard Changes</Button>
              <Button onClick={handleSave}>Save Project</Button>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Name</label>
              <input
                value={form.title}
                onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                placeholder="Project title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Link</label>
              <input
                value={form.link}
                onChange={(event) => setForm((prev) => ({ ...prev, link: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Detailed Description</label>
              <textarea
                value={form.desc}
                onChange={(event) => setForm((prev) => ({ ...prev, desc: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-none"
                rows={4}
                placeholder="Project summary"
              ></textarea>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Image Path</label>
              <input
                value={form.image}
                onChange={(event) => setForm((prev) => ({ ...prev, image: event.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                placeholder="/projects/cover.jpg"
              />
              <div className="mt-4">
                <FileUpload onFilesSelected={handleUpload} accept="image/*" />
                {uploading && <p className="mt-2 text-xs text-slate-500">Uploading image...</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Delivery Status</label>
              <select
                value={form.isDone}
                onChange={(event) => setForm((prev) => ({ ...prev, isDone: event.target.value as Project['isDone'] }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
              >
                <option value="pending">In Development</option>
                <option value="testing">Testing</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <label className="block text-sm font-medium text-slate-300 mb-4">Technology Stack</label>
          <TagSelector
            value={form.techTags}
            onChange={(value) => setForm((prev) => ({ ...prev, techTags: value }))}
            options={techOptions}
          />
        </div>
        <div className="mt-10">
          <label className="block text-sm font-medium text-slate-300 mb-4">Category</label>
          <TagSelector
            value={form.category}
            onChange={(value) => setForm((prev) => ({ ...prev, category: value }))}
            options={categoryOptions}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
