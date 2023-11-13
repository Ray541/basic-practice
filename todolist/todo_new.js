console.log('No todo loaded');

/**
 * DOM elements
 */
var input = document.querySelector('.task-input');
var list = document.querySelector('.list');

/**
 * Add todo
 */
const addTask = () => {
  const value = input.value;

  if (value.trim() === '') return alert('Task input empty');

  /**
   * Add task to list
   */
  const liElement = document.createElement('li');

  liElement.className = 'task';
  liElement.innerHTML = `
  <p class="task-name ">${value}</p>
  <div class="actions">
      <i class="bi bi-clipboard-check completed-task" onclick="toggleStatus(event)"></i>
      <i class="bi bi-trash2-fill delete-task" onclick="deleteTask(event)"></i>
  </div>`;

  list.appendChild(liElement);

  //Clear the input
  input.value = '';
};

/**
 * @description Deletes the tasks from dom
 * @param e - Click Event
 */
const deleteTask = e => {
  // Get the parent <li> element and remove it
  const taskElement = e.target.parentElement.parentElement;
  if (taskElement) {
    taskElement.remove();
  }
};

const toggleStatus = e => {
  // Get the parent <li> element and toggle the 'done' class
  const taskElement = e.target.parentElement.parentElement;
  taskElement.classList.toggle('done');
};
