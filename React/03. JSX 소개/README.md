# JSX 소개

```jsx
const element = <h1>Hello, world!</h1>;
```

- 위 태그 구문은 문자열이나 HTML이 아닌 JSX라고 부르는 Javascript 확장 구문
- 쉽게 말해 JavaScript와 HTML을 합쳐놓은 문법으로 JSX는 React의 **요소(element)**를 생성 → **createElement**

> Warning

- jsx는 HTML보다 javascript에 가깝기 때문에 React DOM은 camelCaseHTML 속성 이름 대신 속성 이름 지정 규칙을 사용한다.
- ex. class → **className** , tabindex → **tabIndex**

## JSX의 중괄호 안에 JavaScript 표현식을 넣을 수 있다.

- 아래의 예에서는, JS 함수 호출 결과를 중괄호({})로 묶어 사용하고 있다.

```jsx
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = (
  <h1>
    Hello, {formatName(user)}! // JSX는 JS 표현식을 중괄호로 묶어 사용한다.
  </h1>
);

ReactDOM.render(element, document.getElementById("root"));
```

> Warning

- JSX의 태그는 항상 닫혀 있어야 하며, Element는 div로 꼭 감싸져 있어야 한다.

## JSX는 객체를 나타낸다.

- Babel(webpack의 일종)은 JSX를 React.createElement() 호출로 컴파일 한다.
- 아래의 두 예시는 동일한 내용을 나타낸다.

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

## ES6에서 더 이상 var 선언은 사용하지 않는다. 대신 const와 let을 사용

- const : 선언 후 고정적인 값 (블록 기준)
- let : 선언 후 유동적인 값 (블록 기준)

## React는 클라이언트 렌더링과 서버 사이드 렌더링을 모두 지원한다.

- 클라이언트 렌더링 : 필요할 때 요소를 가져오는 구조
- 서버사이드 렌더링 : 미리 웹사이트에 필요한 요소를 서버에서 미리 만들어 한꺼번에 클라이언트로 보내주는 구조

> 따라서 Ajax와 같은 비동기 방식보다 검색 엔진 최적화(SEO)에 유리하다.

### 출처 : https://velopert.com/3626
