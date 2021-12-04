const ulTodo = document.querySelector(".ulTodo");
const input = document.querySelector(".input");
const add = document.querySelector(".button");
const sucMes = document.querySelector(".successDivHide");
const errorMes = document.querySelector(".errorDivHide");
const closingDiv = document.querySelector(".closingDiv");

ulTodo.addEventListener("click", deleteCheck);
closingDiv.addEventListener("click", del);
add.addEventListener("click", addTodo);
function addTodo() {
  if (input.value.trim() == "") {
    errorMes.classList.toggle("errorDivShow");
    setTimeout(function () {
      errorMes.classList.remove("errorDivShow");
    }, 3000);
  } else {
    sucMes.classList.toggle("successDivShow");
    setTimeout(function () {
      sucMes.classList.remove("successDivShow");
    }, 3000);
    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    ulTodo.appendChild(todoDiv);
    //Create TODO Li
    const newLi = document.createElement("li");
    newLi.classList.add("li");
    newLi.innerText = input.value;
    todoDiv.appendChild(newLi);
    //Create Close Button
    const newBtn = document.createElement("i");
    newBtn.classList.add("fa-times", "fas");
    todoDiv.appendChild(newBtn);
    input.value = "";
  }
}
function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "fa-times") {
    const todo = item.parentElement;
    todo.remove();
  }
  //CHECK MARK
  if (item.classList[0] === "li") {
    const todo = item.parentElement;
    todo.classList.toggle("checked");
  }
}
function del(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "del") {
    sucMes.style.display = "none";
    errorMes.style.display = "none";
  }
}
