//в проекте ToDO List сделать так,
//что бы кнопка "Done" после отметки задачи как выполненной,
// меняла свое название и назначение.
//Нажатие на кнопку должно возвращать задачу в работу.
const task = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskListOl = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

taskListOl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const task = e.target.previousElementSibling;
    task.style.textDecoration =
      task.style.textDecoration === "line-through black" ? "none"
        : "line-through black";
    const doneTaskButton = document.getElementById("doneTask");
    doneTaskButton.innerHTML =
      doneTaskButton.innerHTML === "Done Task" ? "Do Task" : "Done Task";
  }
});

function addTask() {
  const taskName = task.value.trim();
  if (taskName) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskName}</span><button id="doneTask">Done Task</button>`;

    taskListOl.append(li);
  }
}
