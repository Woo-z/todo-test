const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
// let tasks = [];

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    // tasks.push(taskItem);
  }
  taskInput.value = ''
}

function createTaskItem(taskText) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.addEventListener('click', taskDelete);
  taskItem.appendChild(delBtn);

  taskItem.addEventListener('click', taskComplete);

  return taskItem;
}

function taskComplete(event) {
  const taskItem = event.target.closest('li');
  taskItem.classList.toggle('complete');
}

function taskDelete(event) {
  const taskItem = event.target.closest('li');
  taskItem.parentNode.removeChild(taskItem);
}

// function save() {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function load() {
//   tasks = localStorage.getItem('tasks');
//   if (save != 0) {
//     JSON.parse(tasks);
//     for (let i = 0; i < tasks.length; i++) {
//       if (taskText !== "") {
//         const taskItem = createTaskItem(taskText);
//         taskList.appendChild(taskItem);
//         tasks.push(taskItem);
//         taskInput.value = ''
//       }
//     }
//   }
// }

// window.addEventListener('load',load);