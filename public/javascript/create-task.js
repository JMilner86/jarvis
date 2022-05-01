async function createTask(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="title"]').value.trim();
 // const taskInfo = document.querySelector

  if (title) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        title
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
}

document.querySelector('.add-button').addEventListener('submit', createTask);
