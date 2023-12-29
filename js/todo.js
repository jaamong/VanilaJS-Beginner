const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // == document.querySelector(#todo-form input)
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;
    toDoInput.value = "";  // 입력하고 엔터를 입력하면 입력 상자 비우기
}

toDoForm.addEventListener("submit", handleToDoSubmit);