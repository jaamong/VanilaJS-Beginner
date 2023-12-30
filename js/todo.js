const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // == document.querySelector(#todo-form input)
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  // 브라우저가 시작될 때 빈 배열 상태, 업데이트를 위해 let으로 수정

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // button의 parent
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li 태그 내부에 span 태그 추가
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";  // 입력하고 엔터를 입력하면 입력 상자 비우기

    const newTodoObj = {  // 각 todo를 식별하기 위해 id 값 주기
        id: Date.now(),
        text: newTodo
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  // 배열의 각 요소가 paintToDo 함수로 전달됨
}