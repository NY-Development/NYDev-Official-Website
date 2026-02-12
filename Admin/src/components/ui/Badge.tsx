import React from 'react';

interface BadgeProps {
  label: string;
  tone?: 'primary' | 'emerald' | 'amber' | 'cyan' | 'purple';
}

const toneClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary border-primary/30',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
};

const Badge: React.FC<BadgeProps> = ({ label, tone = 'primary' }) => {
  return (
    <span
      className={`px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-widest font-bold ${
        toneClasses[tone]
      }`}
    >
      {label}
    </span>
  );
};

export default Badge;
