import React, { useEffect, useState } from 'react';
import type { ContentBlock } from '../../types/content';
import { getContentBlocks, updateContentBlock } from '../../services/content.service';
import RichTextEditor from '../../components/forms/RichTextEditor';
import Button from '../../components/ui/Button';

const ContentPage: React.FC = () => {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [active, setActive] = useState<ContentBlock | null>(null);
  const [editorValue, setEditorValue] = useState('');

  useEffect(() => {
    getContentBlocks().then((data) => {
      setBlocks(data);
      setActive(data[0] || null);
      setEditorValue(data[0]?.value || '');
    });
  }, []);

  const handleSave = async () => {
    if (!active) return;
    const updated = await updateContentBlock(active.key, editorValue);
    setBlocks((prev) => prev.map((item) => (item.key === updated.key ? updated : item)));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Content Manager</h1>
            <p className="text-sm text-slate-500">Edit content blocks and sync across the site.</p>
          </div>
          <Button onClick={handleSave}>Sync to Production</Button>
        </div>
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2 min-w-[720px]">
            <thead>
              <tr className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-4 pb-2">Content Key</th>
                <th className="px-4 pb-2">Current Value</th>
                <th className="px-4 pb-2">Status</th>
                <th className="px-4 pb-2">Modified</th>
                <th className="px-4 pb-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blocks.map((block) => (
                <tr
                  key={block.key}
                  className={`bg-slate-900/40 hover:bg-slate-900 transition-colors ${active?.key === block.key ? 'border-l-2 border-primary' : ''}`}
                >
                  <td className="px-4 py-4 rounded-l-xl">
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">{block.key}</span>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-slate-300 max-w-xs truncate">{block.value}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {block.status}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-xs text-slate-500">{block.updatedAt}</td>
                  <td className="px-4 py-4 rounded-r-xl text-right">
                    <button
                      onClick={() => {
                        setActive(block);
                        setEditorValue(block.value);
                      }}
                      className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-all"
                    >
                      <span className="material-icons text-base">edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
      <aside className="w-full lg:w-[520px] glass-panel rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold">Edit Content Block</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">{active?.key}</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Content Editor</label>
            <RichTextEditor value={editorValue} onChange={setEditorValue} />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Search Engine Preview (SEO)</label>
            <div className="bg-white p-4 rounded-lg text-slate-900">
              <p className="text-[#1a0dab] text-lg">NYDev | Enterprise Software Solutions</p>
              <p className="text-[#006621] text-sm py-0.5">https://nydev.com</p>
              <p className="text-[#545454] text-xs">{editorValue.slice(0, 140)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="text-slate-400 hover:text-white text-sm font-medium">Discard Changes</button>
            <div className="flex gap-3">
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium">Save as Draft</button>
              <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg">Stage for Release</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ContentPage;
