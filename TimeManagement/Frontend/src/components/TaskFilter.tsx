import React, { useState } from 'react';

const TaskFilter: React.FC = ({ onFilter }) => {
  const [status, setStatus] = useState('all');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label>
        Filter Status:
        <select value={status} onChange={handleFilterChange}>
          <option value="all">Semua</option>
          <option value="completed">Selesai</option>
          <option value="pending">Belum Selesai</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;
