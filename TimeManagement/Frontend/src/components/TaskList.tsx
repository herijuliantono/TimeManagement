import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Daftar Tugas</h1>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Selesai' : 'Belum Selesai'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
