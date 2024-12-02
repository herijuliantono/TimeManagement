import express from 'express';
import { getTasks, addTask, getTask, updateTask } from './task_api';

const app = express();
app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  const tasks = await getTasks();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const task = req.body;
  await addTask(task);
  res.status(201).json({ message: 'Task added' });
});

app.get('/api/tasks/:id', async (req, res) => {
  const task = await getTask(req.params.id);
  res.json(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const task = req.body;
  await updateTask(req.params.id, task);
  res.json({ message: 'Task updated' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
