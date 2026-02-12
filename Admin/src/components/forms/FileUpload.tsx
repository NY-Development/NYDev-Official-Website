import React from 'react';

interface FileUploadProps {
  onFilesSelected: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesSelected, accept = 'image/*', multiple = false }) => {
  return (
    <label className="neon-dashed p-8 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-colors">
      <span className="material-icons text-primary text-4xl mb-3">cloud_upload</span>
      <p className="text-sm text-slate-300">Drag & drop files here</p>
      <p className="text-xs text-slate-500 mt-1">PNG, JPG, or MP4 (Max 50MB)</p>
      <input
        type="file"
        className="hidden"
        multiple={multiple}
        accept={accept}
        onChange={(event) => onFilesSelected(event.target.files)}
      />
    </label>
  );
};

export default FileUpload;
