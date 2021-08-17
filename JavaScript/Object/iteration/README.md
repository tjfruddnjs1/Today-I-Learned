# Object iteration (객체 순회)

## keys, values, entries

- keys(), values(), entries()를 사용할 수 있는 자료 구조
  > Map, Set, Array, Object

1. Object.keys(obj) : 객체의 키만 담은 `배열`을 반환
2. Object.values(obj) : 객체의 값만 담은 `배열`을 반환
3. Object.entries(obj) : [키, 값] 쌍을 담은 `배열`을 반환

## Map/Set/Array VS Object

| 구분      | 맵            | 객체             |
| --------- | ------------- | ---------------- |
| 호출 문법 | map.keys()    | Object.keys(obj) |
| 반환 값   | iterable 객체 | Array            |

- 첫 번째 차이는 obj.keys()가 아닌 Object.keys(obj)
- JS는 복잡한 자료구조 전체가 객체에 기반하기 때문에 객체(data)에 values()라는 메서드를 구현해 사용하는 경우가 있을 수 있는데, 이렇게 커스텀 메서드를 구현한 상태라도 Object.values(data)같은 형태로 메서드를 호출하면 커스텀 메서드와 내장 메서드 둘 다 사용 가능
- 두 번째 차이는 Object.\*를 호출하면 iterable 객체가 아닌 객체의 종류인 배열을 반환 (하위 호환성 때문)

```js
let user = {
  name: "John",
  age: 30,
};

/*
    Object.keys(user) = ["name", "age"]
    Object.values(user) = ["John", 30]
    Object.entries(user) = [ ["name","John"], ["age",30] ]
*/
```

## 객체 변환하기

- 객체엔 map, filter 같은 배열 전용 메서드를 사용할 수 없기 때문에 `Object.entries, Object.fromEntries`를 적용해 배열 전용 메서드를 사용
- Object.fromEntries() : [키, 값] 목록을 객체로 변환

```js
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

> Object.entries와 Object.fromEntries를 이용해 객체 > 배열 > 객체 예시

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```

## 응용

1. 프로퍼티 값 더하기

- 급여 정보가 저장되어 있는 객체 `salaries`의 모든 급여의 합을 반환하는 함수 sumSalaries(salaries) 만들기
- [1.sumProperty.js]()

> Input

```js
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(sumSalaries(salaries)); // 650
```

2. 프로퍼티 갯수 새기

- 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들기
- [2.count.js]()

> Input

```js
let user = {
  name: "John",
  age: 30,
};

alert(count(user)); // 2
```
