
async function createTask(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="task-title"]').value;
    const task_info = document.querySelector('input[name="task-info"]').value;
    const task_timer = document.querySelector('input[name="task-timer"]').value;
  
    const response = await fetch(`/api/task`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        task_info,
        task_timer
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-task-form').addEventListener('submit', createTask);