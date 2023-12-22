const h1 = document.querySelector("div.hello:first-child h1");  // `h1` is HTML element.

function handleh1Click() {
    const clickedClass = "clicked"

    if (h1.classList.contains(clickedClass)) { //class 존재 여부 확인
        h1.classList.remove(clickedClass);  // class 제거
    } else {
        h1.classList.add(clickedClass);  // class 추가
    }
}

h1.addEventListener("click", handleh1Click);
