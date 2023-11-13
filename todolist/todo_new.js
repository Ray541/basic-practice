console.log('No todo loaded');

/**
 * DOM elements
 */
var input = document.querySelector('.task-input');
var list = document.querySelector('.list');

// {
//     task:name,
//     id: 123
// }

const generateId = () => 'id' + new Date().getTime();

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
  const id = generateId();

  liElement.className = 'task';
  liElement.id = id;
  liElement.innerHTML = `
  <p class="task-name ">${value}</p>
  <div class="actions">
      <i class="bi bi-clipboard-check completed-task" onclick="toggleStatus('${id}')"></i>
      <i class="bi bi-trash2-fill delete-task" onclick="deleteTask('${id}')"></i>
  </div>`;

  list.appendChild(liElement);

  //Clear the input
  input.value = '';
};

const deleteTask = id => document.getElementById(id).remove();

const toggleStatus = id => document.getElementById(id).classList.toggle('done');
