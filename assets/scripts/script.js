const addTask = () => {
  const newTaskInput = document.getElementById("new-task");
  const newTaskValue = newTaskInput.value.trim();

  if (newTaskValue != "") {
    const taskListUl = document.getElementById("task-list");
    const newTaskLi = document.createElement("li");
    newTaskLi.innerText = newTaskValue;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    deleteButton.className = "delete";

    newTaskLi.appendChild(deleteButton);
    taskListUl.appendChild(newTaskLi);
    deleteButton.addEventListener("click", () => {
      taskListUl.removeChild(deleteButton.parentElement);
    });
    newTaskInput.value = "";
  }
}

const completedTaskMark = (task) => {
  task.classList.toggle("completed");
}

const completeTaskFilter = () => {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => {
    if (task.style.display == "none") {
      task.removeAttribute("style");
    } else if (task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

const incompleteTaskFilter = () => {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => {
    if (task.style.display == "none") {
      task.removeAttribute("style");
    } else if (!task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

const allFilter = () => {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => {
    task.removeAttribute("style");
    
    // if (task.attributes.contains("style")) {
    // task.removeAttribute("style");
    // }
  });
}

window.onload = () => {
  document.getElementById("task-list").addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
      completedTaskMark(event.target);
    }
  });

  document.getElementById("complete-filter").addEventListener("click", completeTaskFilter);
  document.getElementById("incomplete-filter").addEventListener("click", incompleteTaskFilter);
  document.getElementById("all-filter").addEventListener("click", allFilter);
}