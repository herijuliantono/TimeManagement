import React, { useState } from 'react';
import { addTask } from '../services/api';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { title, description, deadline, category, completed: false };
    await addTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Judul Tugas" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Deskripsi Tugas" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="datetime-local" 
        value={deadline} 
        onChange={(e) => setDeadline(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Kategori" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button type="submit">Tambah Tugas</button>
    </form>
  );
};

export default AddTask;
