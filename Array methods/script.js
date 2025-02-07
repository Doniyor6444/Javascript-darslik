let tasks = [];

function renderTasks() {
  document.getElementById("todoList").innerHTML = tasks
    .map(
      (task, i) =>
        `<li>${task} <button onclick="tasks.splice(${i}, 1); renderTasks()">O'chirish</button></li>`
    )
    .join("");
}

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value);
    input.value = "";
    renderTasks();
  }
};
