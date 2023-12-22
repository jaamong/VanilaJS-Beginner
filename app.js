const h1 = document.querySelector("div.hello:first-child h1");  // `h1` is HTML element.

function handleh1Click() {
    const clickedClass = "clicked"

    if (h1.className === clickedClass) {
        h1.className = "";  // class 제거
    } else {
        h1.className = clickedClass;  // style.css에서 정의한 클래스 명
    }
}

h1.addEventListener("click", handleh1Click);
