import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return (
    <div className="bg-black/30 border border-white/10 rounded-xl overflow-hidden focus-within:border-primary transition-all">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};

export default RichTextEditor;
