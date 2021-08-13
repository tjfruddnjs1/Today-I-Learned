# JavaScript Immutability(불변성)

## 개요

> " var 선언문 하나로 number, array 등 다양한 데이터 타입들을 다루면서 어떤 타이밍에 값을 유지하고 변화시켜야 하지 ? "

- JS Immutability는 redux, time travel 과 같은 고급 기법을 구현하는 데의 기초
- React의 기초 지식 `state`를 이해하는 데 에도 큰 도움
- **원본 데이터 유지를 위해 생각해야 하는 부분이 무엇인지 학습**

## 정의

> Immutability ? 불변성 , 데이터의 원본이 훼손되는 것을 막는 것

- 데이터를 불변하게 다루면 간섭으로 인한 버그의 가능성을 낮출 수 있다
- 데이터가 변경되었는지 여부를 쉽게 체크할 수 있으며 CRUD(Create, Read, Update, Delete) 작업 시, 불변성 보장은 중요 !!

## 불변함의 종류

> 이름에 대한 불변함

- 불변하게 하는 방법은 **const**를 사용 → 선언한 변수를 수정할 수 없게 하며, 수정 시도시 error 발생

> 내용에 대한 불변함

- 변수 할당 방식 비교 image

<img src="https://user-images.githubusercontent.com/41010744/129166449-12c6154b-aa9b-4a27-b097-7eb0e3fb2b7a.png">

- JavaScript는 값이 바뀌지 않는 원시 데이터 타입과 값이 바뀔 수 있는 객체 타입(Object)를 다르게 취급

- Data Type

1. Primitive : Number, String, Boolean, Null, undefined, Symbol ...
2. Object : Object, Array, Function

## 객체의 가변성

<img src="https://user-images.githubusercontent.com/41010744/129166994-68816ddb-a456-47c1-85e0-b5401282f6a3.png">

## 객체의 복사

<img src="https://user-images.githubusercontent.com/41010744/129167120-eaecc69f-472b-44bc-b087-b8d087c9c447.png">

- Object.assign(a, b) : a 와 b를 합쳐서 return

## 원본 객체를 수정하지 않고 복제본을 수정하는 방법

```js
var o1 = { name: "kim", score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat(); // o2.score를 복제
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
// {name:'kim', score:[1,2]} {name:'kim', score:[1,2,3]} false false
```

> Nested Data의 복제 (concat)

- Object가 Object 형태로 내부 property를 가지고 있는 경우 **Nested Data(중첩된 데이터)**라고 부른다.
- Array를 property로 가지고 있는 경우, 해당 값 변경 시 원본 데이터 값이 영향을 받게 된다.
- 따라서 Object와 내부 property 값도 복제(concat)해서 사용해야 원본 데이터를 유지할 수 있다.
- 위의 코드와 같이 **assign, concat**을 통해 불변성을 유지해야 한다.

## const vs Object.freeze

- const : name이 가리키는 값을 다른 것으로 못 바꾸게 하는 것
- Object.freeze : 값 자체를 못 바꾸게 하는 것

> const와 freeze를 적재적소에 활용하면 불변하게 유지할 수 있다

### 출처 : https://geniee.tistory.com/6
