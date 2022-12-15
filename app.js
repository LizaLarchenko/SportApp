const form = document.getElementById("form");
const todoList = document.getElementById("todolist");

function addTodo(todo) {
  const div = document.createElement("div");
  const todoTitle = document.createElement("span");
  todoTitle.classList.add("p-4", "bg-grey");
  todoTitle.innerText = todo.name;
  const todoGoal = document.createElement("span");
  todoGoal.classList.add("p-4", "text-white", "bg-white");
  todoGoal.innerText = todo.goal;
  div.appendChild(todoTitle);
  div.appendChild(todoGoal);
  todoList.appendChild(div);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    goal: formData.get("goal"),
    type: formData.get("type"),
  };
  addTodo(data);
});
