document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  const newTask = document.querySelector("#new-task-description");

  console.log(newTask.value);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildToDo(newTask.value);

  });

  function buildToDo(newTask) {
    const taskItem = document.createElement("li");
    taskItem.append(newTask)
    taskList.append(taskItem);
  };
});

