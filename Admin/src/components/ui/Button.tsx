import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'px-4 py-2.5 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/20',
    ghost: 'text-slate-400 hover:text-white',
    outline: 'border border-slate-700 text-slate-200 hover:border-primary/50',
    danger: 'border border-red-500/40 text-red-400 hover:bg-red-500/10',
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;
