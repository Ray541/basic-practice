var input = document.querySelector(".task-input")
var list = document.querySelector(".list")


addTask = () => {
    if(input.value == "")
    {
        alert("Right something")
    }
    else
    {
        document.addEventListener("DOMContentLoaded", getTasks());
        
        var task = document.createElement("li")

        task.setAttribute("class", "task")
        
        var taskName = document.createElement("p")
        taskName.setAttribute("class", "task-name")
        taskName.textContent = `${input.value}`
        console.log(input.value)

        task.append(taskName)
        // task.innerHTML = `<p class="task-name">${input.value}</p>`
        
        var taskdiv = document.createElement("div")
        taskdiv.setAttribute("class", "actions")

        task.append(taskdiv)
        // taskdiv.innerHTML = `<div class="actions"></div>`
        
        var completeButton = document.createElement("i")
        completeButton.setAttribute("class", "bi bi-clipboard-check completed-task")
        completeButton.onclick = () => completeAction()
        taskdiv.append(completeButton)
        
        var deleteButton = document.createElement("i")
        deleteButton.setAttribute("class", "bi bi-trash2-fill delete-task")
        deleteButton.onclick = () => deleteAction()
        taskdiv.append(deleteButton)
        
        list.appendChild(task)
        saveTask(input.value)
        input.value = ""
    }

    function completeAction()
    {
        strike()
    }

    function strike()
    {
        var taskName = task.querySelector(".task-name")
        taskName.classList.toggle("done")
    }

    function deleteAction()
    {
        task.remove()
    }

    function saveTask(task)
    {
        var todo;

        if(localStorage.getItem("todo") === null)
        {
            todo = [];
        }
        else
        {
            todo = JSON.parse(localStorage.getItem("todo"))
        }
        todo.push(task)
        localStorage.setItem("todo", JSON.stringify(todo))
    }

    function getTasks()
    {
        var todo;

        if(localStorage.getItem("todo") === null)
        {
            todo = [];
        }
        else
        {
            todo = JSON.parse(localStorage.getItem("todo"))
        }

        todo.forEach(function (task){
            var task = document.createElement("li")

        task.setAttribute("class", "task")
        
        var taskName = document.createElement("p")
        taskName.setAttribute("class", "task-name")
        taskName.textContent = `${task}`
        console.log(input.value)

        task.append(taskName)
        // task.innerHTML = `<p class="task-name">${input.value}</p>`
        
        var taskdiv = document.createElement("div")
        taskdiv.setAttribute("class", "actions")

        task.append(taskdiv)
        // taskdiv.innerHTML = `<div class="actions"></div>`
        
        var completeButton = document.createElement("i")
        completeButton.setAttribute("class", "bi bi-clipboard-check completed-task")
        completeButton.onclick = () => completeAction()
        taskdiv.append(completeButton)
        
        var deleteButton = document.createElement("i")
        deleteButton.setAttribute("class", "bi bi-trash2-fill delete-task")
        deleteButton.onclick = () => deleteAction()
        taskdiv.append(deleteButton)
        
        list.appendChild(task)
        })
    }
}