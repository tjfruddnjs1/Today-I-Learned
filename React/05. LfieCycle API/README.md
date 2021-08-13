# LifeCycle API

> 이 API는 컴포넌트가 브라우저에서 나타날 때, 사라질 때, 업데이트 될때 호출되는 API

## 컴포넌트 초기 생성

> 컴포넌트가 브라우저에 나타나기 전, 후 호출되는 API

1. constructor

- 컴포넌트 생성자 함수, 컴포넌트가 새로만들어 질 때마다 함수 호출

```jsx
constructor(props) {
  super(props);
}
```

2. componentWillMount

- 컴포넌트가 화면에 나가기 직전에 호출되는 API > 별로 신경쓰지 않아도 되는 API
- 원래 주로 브라우저가 아닌 환경(server-side)에서도 호출하는 용도로 사용했었는데, 이 API가 더이상 필요하지 않게 되어 리액트 Version 16.3 에서는 해당 API가 deprecated
- 16.3 이후 부터는 `UNSAFE_compoenentWillMount()`라는 이름으로 사용
- 기존 이 API에서 하던것들은 constructor와 componentDidMount에서 충분히 처리 가능

```jsx
componentWillMount() {

}
```

3. componentDidMount

- 이 API는 컴포넌트가 화면에 나타나게 됐을 때 호출
- 주로 D3, masonry 처럼 DOM을 사용해야하는 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해 axios, fetch 등을 통해 ajax 요청을 하거나, DOM 속성을 읽거나 직접 변경하는 작업 진행

```jsx
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```

## 컴포넌트 업데이트

- 컴포넌트가 업데이트는 props의 변화, state의 변화에 따라 결정

1. componentWillReceiveProps

- 이 API는 컴포넌트가 새로운 props를 받게됐을 때 호출
- 이 안에서는 주로 state가 props에 따라 변해야 하는 로직을 작성
- 새로 받게될 props는 nextProps로 조회 가능하며 this.props를 조회하면 업데이트 되기 전의 API이니 참고
- **이 API 또한 v16.3부터 deprecate** 16.3 부터는 `UNSAFE_componentWillReceiveProps()`라는 이름으로 사용
- 또한 이 기능은 상황에 따라 새로운 API : `getDerivedStateFromProps`로 대체 가능

2. [NEW] static getDerivedStateFromProps()

- v16.3 이후 만들어진 라이프사이클 API로 이 API는 props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우 사용

```jsx
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
  // 사용됩니다.
  /*
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  */
}
```

3. shouldComponentUpdate

- 이 API는 컴포넌트를 최적화하는 작업에서 유용하게 사용
- 리액트에서는 변화가 발생하는 부분만 업데이트를 해줘서 성능 향상
- 하지만 변화가 발생한 부분만 감지해내기 위해서는 Virtual DOM에 그려줘야 한다.
- 즉, 현재 컴포넌트의 상태가 업데이트 되지 않아도, 부모 컴포넌트가 re-rendering 되면, 자식 컴포넌트들도 rendering(render()함수가 호출됨을 의미)
- 변화가 없으면 DOM 조작 X, Virtual DOM에만 렌더링
- 그렇게 부하가 많은 작업은 아니지만 컴포넌트가 무수히 많이 렌더링된다면 CPU 자원을 많이 사용
- CPU 처리량을 줄이기 위해서는 Virtual DOM에 리렌더링 하는 것도, 불필요한 경우를 방지하기 위해 shouldComponentUpdate를 작성
- 기본적으로 true를 반환, 조건에 따라 false를 반환하면 해당 조건에는 render 함수를 호출하지 않음

```jsx
shouldComponentUpdate(nextProps, nextState) {
  // return false 하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;
```

4. componentWillUpdate

- 이 API는 shouldComponentUpdate에서 true를 반환헀을때만 호출
- 만약 false 반환했다면 호출하지 X
- 주로 애니메이션 효과를 초기화하거나 이벤트 리스너를 없애는 작업 수행
- 이 함수가 호출되고 난 다음 render() 호출
- **이 API 또한 v16.3 이후 deprecate**
- 기존의 기능은 getSnapshotBeforeUpdate로 대체

5. [New] getSnapshotBeforeUpdate()

- 이 API가 발생하는 시점
  > render(), getSnapshotBeforeUpdate(), 실제 DOM에 변화 발생, componentDidUpdate
- 이 API를 통해 DOM 변화가 일어나기 직전의 DOM 상태를 가져오고 리턴하는 값은 componentDidUpdate에서 3번째 파라미터로 받아올 수 있게 된다.

```jsx
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점입니다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데,
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if (prevState.array !== this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
```

6. componentDidUpdate

- 이 API는 컴포넌트에서 render() 호출하고 난 다음 발생
- 이 시점에선 this.props와 this.state가 바뀌어 있습니다.
- 그리고 파라미터를 통해 이전의 값이 prevProps와 prevState를 조회 가능
- getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옵니다.

```jsx
componentDidUpdate(prevProps, prevState, snapshot) {

}
```

## 컴포넌트 제거

- 컴포넌트가 더 이상 필요하지 않게 되면 단 하나의 API 호출

1. componentWillUnmount

- 등록한 이벤트를 제거하고 만약 setTimeout을 걸은 것이 있다면 clearTimeout을 통해 제거
- 추가적으로, 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose(처분) 기능이 있다면 여기서 호출

## 컴포넌트에 에러 발생시

- render함수에서 에러가 발생한다면 react app이 crash
- 에러 발생시 componentDidCatch가 실행되게 하고 state.error를 true로 설정하게 하고 render 함수쪽에서 이에 따라 에러를 띄우면 된다.
- 주의 할점이 있는데 컴포넌트 자신의 render 함수에서 에러가 발생해버리는 것은 잡아낼 수는 없지만 대신 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러를 잡을 수 있다.

> 주로 발생하는 에러

1. 존재하지 않는 함수를 호출하려고 할때

- ex. props로 받앗을줄 알았던 함수가 전달되지 않았을 때

```jsx
this.props.onClick();
```

2. 배열이나 객체가 올 줄 알았는데, 해당 객체나 배열이 존재하지 않을 때

```jsx
this.props.object.value; // object is undefined
this.props.array.length; // array is undefined
```

- 이러한 것들은 render 함수에서 다음과 같은 형식으로 막아 줄 수 있습니다.

```jsx
render() {
  if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
  // object 나 array 를 사용하는 코드
}
```

- 혹은 이전에 배웠던 컴포넌트의 기본값을 설정하는 defaultProps를 통해 설정하면 됩니다.

```jsx
class Sample extends Component {
  static defaultProps = {
    onIncrement: () => console.warn("onIncrement is not defined"),
    object: {},
    array: [],
  };
}
```

### 출처 : https://velopert.com/3631
