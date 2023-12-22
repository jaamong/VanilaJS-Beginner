const h1 = document.querySelector("div.hello:first-child h1");  // `h1` is HTML element.

function handleh1Click() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

h1.onclick = handleh1Click;  // click event에 대해서 listen
h1.addEventListener("mouseenter", handleMouseEnter)  // 마우스를 올리는 것에 대해서 listen
h1.addEventListener("mouseleave", handleMouseLeave) 

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);