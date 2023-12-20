## Searching For Elements

HTML의 element를 가져올 때 주로 `.querySelector()`와 `.getElementById()`를 사용

<br>

### document.querySelector() - CSS selector
```javascript
document.querySelector(.hello h1)
```
- CSS selector를 사용해서 class hello를 찾고, 그 안에 있는 h1을 가져와라
- 동일한 것들이 많은 경우에는, 첫번째 element를 가져온다.
- 모두 가져오고 싶다면, ``.querySelectorAll()`` 을 사용해야 한다.

<br>

## Events

- `console.dir()`을 했을 때 
    - `on`으로 시작하면 `event`
    - 모든 항목들이 전부 JavaScript의 object
    - **style** 항목
        - javascript로 작성되어 있음 →  우리가 JS를 이용해서 바꿀 수 있다!
        - 하지만, 우리가 js로 대부분 할 일은 `event`를 listen 하는 것

<br>

> Notice!! JavaScipt의 object 내부에 있는 property의 값을 변경할 수 있음 (특정 property들은 변경할 수 없음)

<br>

### event?

> click을 하면 그게 event야. <br>`h1`위로 마우스가 올라가도 event야. <br>입력을 끝내거나, 무언가를 적거나, enter를 누르는 등 이런게 event야.

#### click event

> click을 listen 해보자!

1. HTML element를 JavaScript로 가져오기.
2. 가져온 element에 `.addEventListener()` 추가하기; event를 listen 하는 것
    ```javascript
    element.addEventListener()
    ```
    - js에 무슨 event를 listen하고 싶은지 알려줘야 함!
        ```javascript
        element.addEventListner("click")  // click event를 listen
        ```
3. click 했다면 무언가를 해줘야 겠지요.
    ```javascript
    element.addEventListener("click", listenr); // listenr는 event가 발생했을 때 실행되는 것
    ```
    listenr에는 event가 발생하면 호출할 function을 전달해주면 된다.
    중요한 점은 **function을 전달할 때 괄호를 작성하면 안됨!!!** 그래야 event가 발생했을 때 js가 대신 실행해줌. 
    

