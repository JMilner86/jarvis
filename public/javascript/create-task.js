//  async function createTask(event) {
//    event.preventDefault();

//   const title = document.querySelector('#task_title').value.trim();
//  // const taskInfo = document.querySelector(#task_info).value.trim();

//   if (title) {
//     const response = await fetch('/api/tasks', {
//       method: 'POST',
//       body: JSON.stringify({
//         title
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.replace('/task');
//     } else {
//       alert(response.statusText);
//     }
//   }
// //}

// document.querySelector('.add-button').addEventListener('submit', createTask);


async function createTask(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="task-title"]').value;
  const task_info = document.querySelector('textarea[name="task-info"]').value;


  if (title && task_info) {
    const response = await fetch('/api/tasks', {
      method: 'post',
      body: JSON.stringify({
        title,
        task_info
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

  
  document.querySelector('.task-button').addEventListener('submit', createTask);


