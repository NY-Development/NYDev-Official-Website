import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../utils/constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`w-64 border-r border-slate-800 bg-[#0f1623] flex flex-col fixed h-full z-40 transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-6 flex items-center gap-3">
        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
          <span className="material-icons text-white text-sm">terminal</span>
        </div>
        <span className="hidden lg:block font-bold text-xl tracking-tight">NY<span className="text-primary">DEV</span></span>
      </div>
      <button
        type="button"
        className="lg:hidden absolute top-5 right-5 text-slate-400 hover:text-white"
        onClick={onClose}
        aria-label="Close navigation"
      >
        <span className="material-icons">close</span>
      </button>
      <nav className="flex-1 mt-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center px-6 py-4 transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 text-primary border-r-2 border-primary'
                  : 'text-slate-500 hover:text-primary'
              }`
            }
          >
            <span className="material-icons">{item.icon}</span>
            <span className="hidden lg:block ml-4 font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
