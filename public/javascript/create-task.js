
async function createTask(event) {
  event.preventDefault();

  const title = document.querySelector('#task-title').value;
  const task_info = document.querySelector('#task_info').value;
  
  if (title && task_info) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        title,
        task_info
        
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

  document.querySelector('.task-button').addEventListener('click', createTask);


