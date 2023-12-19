// querySelector - CSS selector
// CSS selector를 사용해서 class hello를 찾고, 그 안에 있는 h1을 가져와라
// 동일한 것들이 많은 경우에는, 첫번째 element를 가져온다.
// 모두 가져오고 싶다면, querySelectorAll 을 사용해야 한다.

const title = document.querySelector(".hello h1");
const titles = document.querySelectorAll(".hello h1");


console.log(title);
console.log(titles);