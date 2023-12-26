const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) { // 따로 space를 만들지 않으면 어떠한 정보도 받지 않음. 공간을 만들어 주면 JS에서 event를 채워줄 것.
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것 
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);  // form의 submit event 감지
