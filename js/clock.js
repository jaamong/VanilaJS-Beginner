const clock = document.querySelector("h2#clock");

function getclock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getclock(); // 웹 사이트가 load 되자마자 getClock() 실행
setInterval(getclock, 1000);  // 매 초마다 새로운 Date 객체를 생성