// const loginForm = document.getElementById("login-form");  // == .querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;

    if (username === "") {
        alert("Please write you name");
    } else if(username.length > 15) {
        alert("Your name is too long.");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);

