const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);  // click event에 대해서 listen
title.addEventListener("mouseenter", handleMouseEnter)  // 마우스를 올리는 것에 대해서 listen
title.addEventListener("mouseleave", handleMouseLeave) 