import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';
import { Task } from './services/api';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [filterStatus, setFilterStatus] = useState('all');

  const fetchTasks = async () => {
    // Panggil API untuk mendapatkan tugas
    const response = await fetch('/api/tasks');
    const data = await response.json();
    setTasks(data);
    setFilteredTasks(data); // Setel status filter ke "all" pada awalnya
  };

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
    if (status === 'all') {
      setFilteredTasks(tasks);
    } else if (status === 'completed') {
      setFilteredTasks(tasks.filter(task => task.completed));
    } else {
      setFilteredTasks(tasks.filter(task => !task.completed));
    }
  };

  const addNewTask = (newTask: Task) => {
    // Tambahkan tugas baru ke daftar
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
  };

  // Panggil fetchTasks saat komponen pertama kali dimuat
  React.useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Aplikasi Manajemen Waktu</h1>
      <TaskFilter onFilter={handleFilterChange} />
      <AddTask onAddTask={addNewTask} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
