/* 
---> Hey, I tried to clean up the code as you mentioned. I have comented out the 
strike function as I understood that if we use the const keyword every other 
task gets it's own function and performs the desired task.

---> 
 */

var input = document.querySelector(".task-input")
var list = document.querySelector(".list")


addTask = () => {
    if(input.value === "")
    {
        alert("Right Something...")
        // Will display an allet if there is nothing typed in the input
    }
    else
    {
        
        var task = document.createElement("li")

        task.setAttribute("class", "task")
        
        var taskName = document.createElement("p")
        taskName.setAttribute("class", "task-name")
        taskName.textContent = `${input.value}`
        console.log(input.value)

        task.append(taskName)
        // task.innerHTML = `<p class="task-name">${input.value}</p>
        // A p tag will be appended to the task li
        
        var taskdiv = document.createElement("div")
        taskdiv.setAttribute("class", "actions")
        
        task.append(taskdiv)
        // taskdiv.innerHTML = `<div class="actions"></div>`
        // A div with class actions will be appended to the task li
        
        var completeButton = document.createElement("i")
        completeButton.setAttribute("class", "bi bi-clipboard-check completed-task")
        completeButton.onclick = () => completeAction()
        taskdiv.append(completeButton)

        // An icon with onclick function completeAction() will be appended to the div
        
        var deleteButton = document.createElement("i")
        deleteButton.setAttribute("class", "bi bi-trash2-fill delete-task")
        deleteButton.onclick = () => deleteAction()
        taskdiv.append(deleteButton)
        
        // An icon with onclick function deleteAction() will be appended to the div

        list.appendChild(task)
        // saveTask(input.value)
        input.value = ""
    }

    const completeAction = () => {
        // strike()
        var taskName = task.querySelector(".task-name")
        taskName.classList.toggle("done")
    }

    // const strike = () => {
    //     var taskName = task.querySelector(".task-name")
    //     taskName.classList.toggle("done")
    // }

    const deleteAction = () => {
        task.remove()
    }
}