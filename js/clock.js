const clock = document.querySelector("h2#clock");

function getclock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getclock(); // 웹 사이트가 load 되자마자 getClock() 실행
setInterval(getclock, 1000);  // 매 초마다 새로운 Date 객체를 생성