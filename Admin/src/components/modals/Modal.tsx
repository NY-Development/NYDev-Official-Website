import React from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, title, onClose, children, footer }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1221]/80 backdrop-blur-sm px-6">
      <div className="w-full max-w-4xl glass-card rounded-xl overflow-hidden">
        <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">{children}</div>
        {footer && <div className="px-8 py-6 border-t border-white/10 bg-white/5">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
