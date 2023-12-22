const h1 = document.querySelector("div.hello:first-child h1");  // `h1` is HTML element.

function handleh1Click() {

    const currentColor = h1.style.color;
    let newColor; 

    if (currentColor == "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }

    h1.style.color = newColor;
}

h1.addEventListener("click", handleh1Click);