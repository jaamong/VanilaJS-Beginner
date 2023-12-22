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

> :bulb: JavaScipt의 object 내부에 있는 property의 값을 변경할 수 있음 (특정 property들은 변경할 수 없음)

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
    
<br>

### listen 하고 싶은 event를 찾는 방법

1. 구글에 찾고 싶은 element의 이름, html element, mdn(Mozilla Developer Network)에 검색
    ```text
    Ex. h1 html element mdn
    ```

2. 검색 후 링크에 `Web APIs` 문장이 포함된 페이지를 찾기
3. 페이지에서 `event` 찾기

또는 
1. `console.dir(element)`로 콘솔에 출력하기
2. 수많은 property 중에서 앞에 `on`이 붙어있는 것 찾기
➯ 그것이 바로 `event listner`

> :bulb: 해당 event listner를 사용할 때는 **`on`을 제외하고 사용**해야 함!  

<br>

### window의 interface 또는 object

> Window Events <br> https://developer.mozilla.org/ko/docs/Web/API/Window#%EC%9D%B4%EB%B2%A4%ED%8A%B8

<br>

#### event를 사용하는 두 가지 방법
1. `element.addEventListner()`를 해주고, 원하는 type을 넘겨주는 것
    ```javascript
    element.addEventListner("click", function);
    ```
    이 방법은 나중에 `.removeEventListner()`를 통해서 event를 제거해줄 수 있다!
2. `element.ontype` 
    ```javascript
    element.onclick = function;
    Ex. 
    ```

<br>

> :blub: `document.body`, `document.head`, `document.title` 은 가져올 수 있지만 `div` 같은 그 외 element들은 `querySelector`나 `getElementById`로 가져와야 한다!

<br>

### CSS in Javascript

> style은 js 말고 css 에서 고치는 것이 좋다. 
 
