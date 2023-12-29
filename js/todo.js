const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // == document.querySelector(#todo-form input)
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    
    span.innerText = newTodo;
    
    li.appendChild(span); // li 태그 내부에 span 태그 추가
    toDoList.appendChild(li);
 }

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;
    toDoInput.value = "";  // 입력하고 엔터를 입력하면 입력 상자 비우기

    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);