import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTask, updateTask } from '../services/api';

const TaskDetail: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  
  const [task, setTask] = useState<any>({});
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    const fetchTask = async () => {
      const data = await getTask(id);
      setTask(data);
      setIsCompleted(data.completed);
    };
    fetchTask();
  }, [id]);

  const handleSave = async () => {
    const updatedTask = { ...task, completed: isCompleted };
    await updateTask(id, updatedTask);
    history.push('/');
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Deadline: {task.deadline}</p>
      <label>
        Selesai:
        <input 
          type="checkbox" 
          checked={isCompleted} 
          onChange={() => setIsCompleted(!isCompleted)} 
        />
      </label>
      <button onClick={handleSave}>Simpan</button>
    </div>
  );
};

export default TaskDetail;
