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



#### 기존 class를 유지한 채로, class name을 수정하는 방법 ➯ `classList` 사용하기! 

`className`은 이전 class 값은 고려하지 않고, 모든 걸 교체해버린다. 
`classList`는 class들의 목록으로, 여러 함수를 지원해주는데 여러가지 작업을 할 수 있게끔 허용해준다. 

<br>

:small_blue_diamond: **.contains**

`classList`의 함수 중 `.contains`는 인자로 넘겨준 class가 HTML element의 class에 포함되어 있는지 알려준다. 
```javascript
if (h1.classList.contains(clickedClass)) { // clickedClass가 있는지
    ...
}
```
<br>

:small_blue_diamond: **.remove**

인자로 넘겨준 class를 해당 element에서 제거한다.

<br>

:small_blue_diamond: **.add**

인자로 넘겨준 class를 해당 element에 추가한다.

<br>

:small_blue_diamond: **.toggle**

- 인자로 넘겨준 class가 있는지 확인한다.
- 존재하면 제거(remove)하고, 그렇지 않으면 추가(add)한다.
- 아래 코드를 toggle 함수가 수행한다.
    ```javascript
        //use toggle
        h1.classList.toggle(className);

        //not use toggle
        if (h1.classList.contains(className)) { //class 존재 여부 확인
            h1.classList.remove(className);  // class 제거
        } else {
            h1.classList.add(className);  // class 추가
        }
    ```

<br>

## LOGIN

> :star2: `input` 태그의 유효성 검사를 작동시키기 위해서는 `input`이 `form` 태그 안에 있어야 한다.

> :star2: `input` 태그 안에 있는 `button`을 누르거나 type이 `submit`인 `input` 태그을 클릭하면, 작성한 form이 submit 된다. <br> ➯ form을 submit 할 때마다 **브라우저가 재시작(새로고침) 됨!**

but, 우리는 form을 submit 할 때마다 브라우저를 새로고침 하고 싶지 않아. 어떻게 고치면 될까? <br>
submit 이라는 event가 발생하는 걸 아예 막거나 중간에 개입해서 submit event가 발생했다는 걸 파악하고 싶어. <br>

> :bulb: submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.

<br>

### EventListener function의 첫 번째 argument

JS가 하게 될 일은(아래 작성한 코드가 하고 있는 일), 
`onLoginSubmit` 함수의 첫 번째 argument로 발생한 일에 대해 네가 필요로 할 만한 정보들을 주는 것이다.
```javascript
function onLoginSubmit(event) { // 따로 space를 만들지 않으면 어떠한 정보도 받지 않음. 공간을 만들어 주면 JS에서 event를 채워줄 것.
// 1. event가 발생할 때 브라우저가 function을 호출
// 2. function을 호출할 때 argument로써 추가적인 정보를 가진 채로 호출한다.
//   ->  like this : `function(event)`
// 어떤 정보를 브라우저가 보여주고 있는지 알기 위해서 아래 코드 추가
    event.preventDefault();
    console.log(event);  // event object 출력
}

loginForm.addEventListener("submit", onLoginSubmit); // 누군가 form을 submit하면 JS가 이 function을 호출하도록 하고 있다.
```
모든 EventListener function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 된다. 이 정보는 JS가 제공한다.<br>
우리는 space만 제공하면 돼! argument 공간만 제공하면 JS가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣을 거야!

<br>

:small_blue_diamond: **.preventDefault**

- 어떤 event의 **기본 행동**이든지 발생되지 않도록 막는다.
    > **기본 행동**<br> 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작<br>
    *Ex.* 누군가 form을 submit 하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어 있다 ➯ 새로 고침을 막는다!
- `event object`는 기본적으로 제공되는 function을 갖고 있는데, 그게 바로 `preventDefault`


<br>

#### `console.log(info)`의 결과: 실행된 event에 관한 정보
```javascript
// event object
SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form#login-form, currentTarget: form#login-form, …}
```

<br>

> :bulb: alert는 모든 동작을 막는다. "확인 / OK" 버튼을 눌러야만 링크로 이동.

> :star2: `localStorage.get(key)`을 했을 때 해당하는 값이 없으면 `null`을 반환한다.

<br>

## CLOCK

### Intervals

> :bulb: **interval** <br> '매번' 일어나야 하는 무언가 <br> Ex. '매 2초' ➯ interval 

JS에는 interval 기능이 이미 내장되어 있다. 이런 기능을 제공하는 tool이 바로 `setInterval()`이다. 

`setInterval()`은 두 개의 argument를 받는다. 
1. 실행하고자 하는 function
2. 호출되는 function의 간격 (단위: ms)

<br>

### Timeouts

> :bulb: 일정 시간이 흐른 뒤에 함수를 한 번만 호출하고 싶어! <br> ➯ `setTimeout()` 함수

`setTimeout()`은 두 개의 argument를 받는다.
1. 호출하려고 하는 function
2. 얼마나 기다릴지 (단위: ms)

```javascript
setTimeout(getclock, 5000);  // 5초 뒤 getclock 함수 호출
```

<br>

### Dates

날짜와 시간을 얻거나 생성하고 싶다면 `Date` 객체를 사용하자.
```javascript
const date = new Date();

date.getHours();
date.getMinutes();
date.getSeconds();

date.getDate();
date.getDay();
date.getMonth();
date.getFullYear();
```

<br>

### PadStart

`padStart()`는 string에 쓸 수 있는 function이다. 해당 함수를 이용하여 padding을 추가한다.
1. 채울 길이
2. 채울 길이가 아닌 경우, 적용할 채울 문자
```javascript
"1".padStart(2, "0");  // string의 길이를 2로 만든다. 길이가 2가 아닌 경우 앞에 "0"을 추가한다.
```

반대의 기능을 하는 함수로 `padEnd()`가 있다. 해당 함수는 뒤쪽에 padding을 추가한다.

<br>

## Quotes

### Math 모듈

> Math 모듈은 JS에서 이미 load 돼서 무료로 제공되고 있다. Math는 흥미로운 function도 많이 가지고 있는데, 그 중 하나가 `random()`이다. 

`random()`은 0부터 1사이의 임의의 숫자를 제공한다. 여기에 임의의 숫자 n을 곱하면 n 사이의 숫자들을 얻을 수 있다.
```javascript
Math.random() * 10  // 0에서 10 사이의 숫자를 얻을 수 있음
```

반환되는 값은 float이므로 자연수만 필요한 경우 아래 function들로 자연수를 얻을 수 있다. 
- `Math.round()`: 입력값을 반올림한 수와 가장 가까운 정수 값 반환 (Ex: 1.4 → 1, 1.5 → 2)
- `Math.ceil()`: 숫자를 천장(ceil)까지 높여준다. (Ex: 1.1 → 2, 1.01 → 2)
- `Math.floor()`: 숫자를 바닥(floor)까지 내려준다. (Ex: 1.9 → 1, 1.99999999 → 1) 

<br>

### Element.appendChild(), Element.prependChild()

#### `appendChild()` 

- appendChild는 DOM 메서드이므로 생성되어 있는 요소만 추가 가능
    - 태그를 먼저 생성해놓고, 태그를 추가할 때 사용
    - 텍스트의 경우에도 TextNode로 노드를 생성한 후 추가해야 함
- 추가된 요소는 맨 마지막에 위치하게 됨

#### `prepend()`

- append와 달리 맨 앞에 추가됨
- append 처럼 문자열, 요소 추가 가능 