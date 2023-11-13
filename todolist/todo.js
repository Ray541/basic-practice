var input = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-task");
var list = document.querySelector(".list");

const getLocalStorageData = () => {
  /**
   * check if there is any todo task
   * if null then create a new todo array
   * else pass it to the array viz todo
   */
  return localStorage.getItem("todo") === null
    ? []
    : JSON.parse(localStorage.getItem("todo"));
};

let todoList = getLocalStorageData();

document.addEventListener("DOMContentLoaded", retriveData);

const genreateID = () => "task" + new Date().getTime();

const addTask = () => {
  const text = input.value;

  if (todoList.findIndex((task) => task.text == text) != -1) {
    input.value = "";
    return alert("Task already exists");
  }

  let task = document.createElement("li");
  task.id = genreateID();

  task.className = "task";

  task.innerHTML = `
    <p class="task-name">${input.value}</p>
    <div class="actions">
        <i class="bi bi-clipboard-check completed-task" onclick="completedTask('${task.id}')"></i>
        <i class="bi bi-trash2-fill delete-task" onclick="deleteTask('${task.id}')"></i>
    </div>`;

  list.append(task);
  saveData(task.id);
  input.value = "";
};

const completedTask = (id) => {
  const taskIndex = todoList.findIndex((item) => item.id === id);

  todoList[taskIndex].completed = !todoList[taskIndex].completed;

  localStorage.setItem("todo", JSON.stringify(todoList));

  retriveData();
};

const deleteTask = (id) => {
  const task = document.getElementById(id);
  task.remove();
  removeLocalData(id);
};

const saveData = (taskid) => {
  const newTask = {
    id: taskid,
    text: input.value,
    completed: false,
  };

  todoList.push(newTask);
  localStorage.setItem("todo", JSON.stringify(todoList));
};

function retriveData() {
  list.innerHTML = "";
  todoList.forEach((storedTask) => {
    let task = document.createElement("li");
    task.className = "task";
    task.id = storedTask.id;
    task.innerHTML = `
        <p class="task-name ${storedTask.completed ? "done" : ""}">${
      storedTask.text
    }</p>
        <div class="actions">
            <i class="bi bi-clipboard-check completed-task" onclick="completedTask('${
              storedTask.id
            }')"></i>
            <i class="bi bi-trash2-fill delete-task" onclick="deleteTask('${
              storedTask.id
            }')"></i>
        </div>`;
    list.append(task);
  });
}

removeLocalData = (id) => {
  const taskIndex = todoList.findIndex((task) => {
    return task.id == id;
  });
  todoList.splice(taskIndex, 1);
  //update the todo array
  localStorage.setItem("todo", JSON.stringify(todoList));
};
