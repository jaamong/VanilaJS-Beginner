const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) { // 따로 space를 만들지 않으면 어떠한 정보도 받지 않음. 공간을 만들어 주면 JS에서 event를 채워줄 것.
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것 
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value; 
    
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);  // form의 submit event 감지
