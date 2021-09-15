# 콘솔로 값 입력 받기, readline

## 인터페이스 객체 생성

```js
const readline = require("readline");

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

- readline 모듈의 rl 객체는 `event-driven` 방식으로 동작
- **event-driven** 이란 ? 이벤트 발생시 해당 이벤트 로그를 보관하고 이를 기반으로 동작하며, 비동기 통신을 통해 시스템 내 통합을 수행하는 Architecture
- programming , architecture 등과 연결되어 다양한 정의로 표현

> 컴퓨터 회로를 구동시키기 위해 발생하는 일 — 마우스 클릭, 키보드 타이핑, 모바일 터치 등
> 특정 행동이 자동으로/순서에 따라 발생하는 것이 아닌 어떤 일에 대한 반응으로 동작하는 디자인 패턴
> IOT 기기 등의 센서로부터 유입되는 데이터 스트리밍 기반의 동작
> 시스템 내 외부에 발생한 주목할 만한 상태의 변화에 기반한 동작

- "line"은 한 줄이 입력되는 이벤트이고, "close"는 EOF 또는 직접 close() 함수를 호출 했을 때 발생하는 이벤트
- readline 모듈의 기본이 되는 이벤트 > line, close

## readline 사용하는 상황

1. 정수 하나 입력 받기 (1회)

```js
let N; // 정수를 저장할 변수
rl.on("line", function (line) {
  console.log(`print input string ${line}`);
  N = Number(line);
  console.log(`print input number ${N}`);
  rl.close();
});
```

2. 무한히 입력받기 : close 함수의 유무

```js
let N; // 정수를 저장할 변수
rl.on("line", function (line) {
  console.log(`print input string ${line}`);
  N = Number(line);
  console.log(`print input number ${N}`);
});
```

3. 정수 2개 입력받기 (1회)

```js
let input = [];
rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", function () {
  let A = input[0];
  let B = input[1];
  console.log(A + B);
});
```

- 두 정수가 공백을 기준으로 입력되기 때문에 split('')
- 입력된 정수를 바로int형으로 변환하기 위해 parseInt()
- map(...)은 리스트 자료형인 line.split('')의 각 원소에 콜백 함수를 적용
- 이후 기능은 rl.on("close", ...) 에서 처리

4. 정수 2개 입력 후 출력 > 잘못된 예시

```js
let input = [];
rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

let A = input[0];
let B = input[1];
console.log(A + B);
```

- 출력 결과 : A, B = NaN
- 이유는 rl 객체가 event-driven 방식으로 작동
- 따라서, 입력을 받고 rl.close()를 호출하여 입력이 끝났다는 것을 알려줘야 한다.

>  rl.on("line", ...)의 입력을 모두 받은 후에, rl.on("close", ...) 함수에서 작업을 처리


