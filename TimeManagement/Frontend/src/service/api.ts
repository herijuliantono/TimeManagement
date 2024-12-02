export const getTasks = async () => {
    const response = await fetch('/api/tasks');
    return response.json();
  };
  
  export const addTask = async (task: any) => {
    await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  
  export const getTask = async (id: string) => {
    const response = await fetch(`/api/tasks/${id}`);
    return response.json();
  };
  
  export const updateTask = async (id: string, task: any) => {
    await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  