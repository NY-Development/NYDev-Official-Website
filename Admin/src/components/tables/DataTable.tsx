import React from 'react';

interface Column<T> {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  align?: 'left' | 'right' | 'center';
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T,>({ columns, data }: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/[0.02] text-slate-500 text-xs font-bold uppercase tracking-wider">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-6 py-3 ${
                  column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : ''
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-white/5 transition-colors">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`px-6 py-4 ${
                    column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : ''
                  }`}
                >
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
