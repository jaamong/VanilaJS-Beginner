const h1 = document.querySelector("div.hello:first-child h1");  // `h1` is HTML element.

function handleh1Click() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleh1Click);
