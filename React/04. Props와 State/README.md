# Props와 State

> 리액트의 기초 지식 중의 가장 핵심

- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값, 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 직접 수정할 수 없다.

- state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있다.

<img src="https://user-images.githubusercontent.com/41010744/129291184-ac65046d-60dd-4be3-b935-ec184dad36dc.png">

## 새 컴포넌트 만들기

- src/MyName.jsx → `01. 새 컴포넌트 만들기.jsx`
- 자신이 받아온 props 값은 **this.** 키워드를 통해 조회 가능
- 위의 컴포넌트를 (App.jsx → `02. App.jsx`)에서 사용
- props 값은 **name="리액트"**와 같이 태그의 속성을 설정

## props의 기본 값 설정

- defaultProps → `03. props의 기본 값 설정(1).jsx`
- defaultProps → `03. props의 기본 값 설정(2).jsx`
- 곧 알아볼 함수형 컴포넌트에서 defaultProps를 설정할 때에는 (2)번 방식으로 사용

## 함수형 컴포넌트

- 단순히 props만 받아와 보여주기만 하는 컴포넌트의 경우 함수형태로 작성시 더 간편한 문법으로 사용 가능
- `04. 함수형 컴포넌트.jsx`
- 함수형 컴포넌트 vs 클래스형 컴포넌트
- 함수형 컴포넌트는 **state와 lifeCycle**이 빠져있는 데 클래스형 컴포넌트와의 주요 차이점
- 따라서, 컴포넌트 초기 마운트가 미세하게 빠르고 메모리 자원을 덜 사용
- 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없다.

## state

- 동적인 데이터를 다룰 땐 state를 사용
- `05. 동적인 데이터 다루기(Counter).jsx`

> state 정의

- 컴포넌트의 state를 정의할 때는 **class fields** 문법을 사용해서 정의
- (5) class fields를 사용하는 건 편의를 위함 → (6) constructor에 넣는 것 보다 편함
- (6) constructor에서 `super(props)`를 호출한 이유는 컴포넌트를 만들게 되면서 Component를 상속했으며, 이렇게 constructor를 작성하게 되면 기존 클래스 생성자를 덮어 쓰게 된다.
- 따라서 리액트 컴포넌트가 지니고 있던 생성자를 super를 통해 미리 실행하고 다음 할 작업(state 설정)을 해주는 것
- 만약 class fields도 사용하고 constructor도 사용하게 된다면 class fields 먼저 실행되고 다음 constructor에서 설정된 것이 나오게 된다.

<img src="https://user-images.githubusercontent.com/41010744/129292700-763a9213-d6f0-4af1-a3cb-5039ad7ba81d.png">

> 메소드 작성

```jsx
handleIncrease = () => {
  this.setState({
    number: this.state.number + 1,
  });
};

handleDecrease = () => {
  this.setState({
    number: this.state.number - 1,
  });
};
```

- (5)에서 컴포넌트에 메소드를 위와 같이 작성하였는데 컴포넌트에 메소드는 아래와 같이 작성도 가능하다.
- 하지만 아래와 같이 작성시 버튼에 클릭이벤트 발생시 this가 undefined 로 나타나 제대로 처리되지 않게 됩니다. 이는 함수가 버튼의 클릭이벤트로 전달이 되는 과정에서 "this"와 연결이 끊겨버리기 때문입니다.

```jsx
  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  }
```

- 이를 고치려면 constructor에서 아래와 같이 해주면 됩니다.

```jsx
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
```

## setState

- 각 메소드에 들어있는 `this.setState`
- state에 있는 값을 바꾸기 위해서는 this.setState를 무조건 거쳐야 한다.
- react에서 이 함수가 호출되면 컴포넌트가 **re-rendering**되도록 설계

```jsx
state = {
  number: 0,
  foo: "bar",
};
```

- 만일, this.setState({number : 1});하게 될 시 foo는 그대로 남고, number만 업데이트
- 하지만 setState는 객체의 깊숙한 곳까지 확인하지 못합니다.

```jsx
state = {
  number: 0,
  foo: {
    bar: 0,
    foobar: 1,
  },
};
```

- 아래와 같이 한다고 해서 foobar 값이 업데이트 되지 않습니다.

```jsx
this.setState({
  foo: {
    foobar: 2,
  },
});

/* result */
{
  number: 0,
  foo: {
    foobar: 2
  }
}
```

- 위의 상황에서는 아래와 같이 해주어야 한다.

```jsx
this.setState({
  number: 0,
  foo: {
    ...this.state.foo,
    foobar: 2,
  },
});
```

- **...**은 `전개 연산자`로 기존 객체안에 있는 내용을 해당 위치에다가 풀어준다는 의미
- 그 다음 설정하고 싶은 값을 넣어주면 해당 값을 덮어쓰게 됩니다.

## setState에 객체 대신 함수 전달하기

- setState를 사용하여 값을 업데이트하게 될 때, 기존의 값을 참고하여 값을 업데이트를 하게 될때, 조금 더 나은 문법

1. 기존 작성 코드

```jsx
this.setState({
  number: this.state.number + 1,
});
```

2. this.state를 통해 조회

```jsx
this.setState((state) => ({
  number: state.number,
}));
```

3. 비구조화 할당

```jsx
this.setState(({ number }) => ({
  number: number + 1,
}));
```

4.  비구조화 할당 활용

```jsx
const { number } = this.state;
this.setState({
  number: number + 1,
});
```

- (5)에서 작성했던 함수를 비구조화 할당 활용을 이용하여 재 작성

```jsx
handleIncrease = () => {
  const { number } = this.state;
  this.setState({
    number: number + 1,
  });
};

handleDecrease = () => {
  this.setState(({ number }) => ({
    number: number - 1,
  }));
};
```

## 이벤트 설정

- render 함수에서 이벤트 설정 한 부분을 확인

```jsx
<button onClick={this.handleIncrease}>+</button>
```

- html에서는 onclick 속성에 클릭되면 실행 할 JS를 문자열 형태로 넣어줍니다.
  > Warning : 리액트에서는 이벤트 함수 설정시 html과의 다른 점

1. 이벤트 이름을 설정할 때 camelCase로 설정

- onclick → onClick , onmousedown → onMouseDown, onchange → onChange

2. 이벤트에 전달해주는 값은 **함수**

- 만일 `onClick={this.handleIncrease()}` 형태가 된다면 렌더링 할 때마다 해당 함수 호출
- 렌더링 > 함수 호출 > setState > 렌더링 > 함수 호출 > 무한 반복

### 출처 : https://velopert.com/3629
