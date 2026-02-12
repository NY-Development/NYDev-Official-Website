import React, { useMemo, useState } from 'react';

interface TagSelectorProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
}

const TagSelector: React.FC<TagSelectorProps> = ({ value, onChange, options }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => options.filter((option) => option.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  );

  const addTag = (tag: string) => {
    if (!value.includes(tag)) {
      onChange([...value, tag]);
    }
    setQuery('');
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((item) => item !== tag));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-4">
        {value.map((tag) => (
          <span key={tag} className="px-3 py-1.5 bg-primary/20 text-primary border border-primary/40 rounded-lg text-sm font-medium flex items-center gap-2">
            {tag}
            <button onClick={() => removeTag(tag)} className="text-primary/60 hover:text-primary leading-none">
              <span className="material-icons text-[14px]">close</span>
            </button>
          </span>
        ))}
      </div>
      <div className="relative">
        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Search technology to add..."
          type="text"
        />
      </div>
      {query && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {filtered.map((option) => (
            <button
              key={option}
              onClick={() => addTag(option)}
              className="text-left px-3 py-2 rounded-lg bg-white/5 hover:bg-primary/10 text-sm"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSelector;
