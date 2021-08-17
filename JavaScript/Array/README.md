# 필수 배열 함수

## push()

- 배열의 끝에 n 개의 요소를 넣는다

```js
const numArr = [1, 2, 3, 4, 5];
numArr.push(6, 7, 8);
console.log(numArr); //[1, 2, 3, 4, 5, 6, 7, 8]
```

## pop()

- 배열의 마지막 요소를 제거

```js
const numArr = [1, 2, 3, 4, 5];
numArr.pop();
const popped = numArr.pop();
console.log(popped); //5
console.log(numArr); //[1, 2, 3, 4]
```

## concat() : 배열 > 배열 (새 배열)

- 두 개 혹은 더 많은 배열들을 합친다 , 원래 있던 배열을 바꾸지 않고 **새 배열 생성**

```js
const numArr = [1, 2, 3, 4, 5];
const numArr2 = [6, 7, 8];
const numArr3 = numArr.concat(numArr2);

console.log(numArr3); //[1, 2, 3, 4, 5, 6, 7, 8]
```

## reverse() : 배열 > 배열 (원래 배열)

- 배열의 순서가 반대가 된다 , 새 배열 생성이 아닌 **원래 배열에 덮어 씌운다**

```js
const numArr = [1, 2, 3, 4, 5];
numArr.reverse();
console.log(numArr); //[5, 4, 3, 2, 1]
```

## join() : 배열 > 문자열

- 배열을 문자열로 반환
- 인자로는 배열 각 요소들 사이 들어갈 separator를 넣는다
- 공백 없이 요소들을 이어주고 싶다면 ''를 넣는다
- 아무것도 적지 않으면 자동으로 ,를 함께 출력

```js
const strArr = ["hello", "my", "name", "is"];
console.log(strArr.join("")); //hellomynameis
console.log(strArr.join()); //hello,my,name,is
```

## split() : 문자열 > 배열

- 문자열을 원하는 기준에 따라 자른다
- 인자로 separator 와 limit(몇 개 까지 자를 것인지)가 들어간다
- limit을 지정하지 않으면 seperator 기준대로 전부 잘라진다
- ex. 지역 번호 추출에 이용

```js
const stringEx = "032-0000-1111";
const splitedNum = stringEx.split("-");
console.log(splitedNum[0]); //032
```

## splice() : 배열 > 배열 (원래 배열)

- 배열의 원래 요소를 다른 요소로 대체하거나 다른 요소를 배열에 삽입
- 총 3개의 인자 (시작 배열 index, 삭제 개수, 새롭게 삽입할 요소(여러개 가능))

```js
const aniList = ["rabbit", "cow", "pig", "dog", "cat", "human", "monkey"];
aniList.splice(2, 0, "fish");

console.log(aniList); //['rabbit', 'cow', 'pig', 'fish', 'dog', 'cat', 'human', 'monkey']
```

## slice() : 배열 > 배열 (새 배열)

- 원래의 배열은 수정 되지 않는다
- 총 2개의 인자 (선택될 시작 인덱스, 마지막 인덱스(이 인덱스 전까지 포함))
- 마지막 인덱스 인자가 없다면, 시작 인덱스부터 끝까지 추출

```js
const aniList = ["rabbit", "cow", "pig", "dog", "cat", "human", "monkey"];
console.log(aniList.slice(3)); //['dog', 'cat', 'human', 'monkey']
console.log(aniList.slice(2, 5)); //['pig', 'dog', 'cat']
```

## find() : 배열 > 조건 만족하는 처음 값

- 배열을 리턴하지 않고 인자 값을 리턴
- 인자로는 조건 함수가 들어간다
- arrow function(=>)과 함께 사용
- 객체에서 많이 사용

```js
const animal = [
  {
    id: 0,
    diverse: "cat",
    isIt: true,
  },
  {
    id: 2,
    diverse: "carrot",
    isIt: false,
  },
  {
    id: 2,
    diverse: "dog",
    isIt: true,
  },
];

const aniArr1 = animal.find((animals) => animals.id === 2);

console.log(aniArr1); //{id: 2, diverse: "carrot", isIt: false}
```

- 다음 객체도 id가 2이지만 find는 원하는 요소를 찾으면 함수 break
- 모든 요소를 찾기 위해서는 filter 사용

## filter() : 배열 > 조건 만족하는 모든 값 (배열)

- find가 처음 true가 나온 요소를 반환한다면 filter는 전체 배열 요소를 돌어 true 나오는 요소 모두 반환

```js
const animal = [
  {
    id: 0,
    diverse: "cat",
    isIt: true,
  },
  {
    id: 2,
    diverse: "carrot",
    isIt: false,
  },
  {
    id: 2,
    diverse: "dog",
    isIt: true,
  },
];

const aniArr1 = animal.filter((animals) => animals.id === 2);
console.log(aniArr1);
/*
[
  { id: 2, diverse: 'carrot', isIt: false },
  { id: 2, diverse: 'dog', isIt: true }
]
*/
```

## map() : 배열 > 배열 (새 배열)

- 조건에 맞게 짝지어진 새로운 배열 반환
- 함수 내에 조건문을 이용하여 해당 조건에 맞는 값만 반환할 수 있다

```js
const addArr = [1, 2, 3];
let result = addArr.map((num) => {
  return num + 5;
});
console.log(result); //[6, 7, 8]
```

## some() :

## 출처 : https://jae04099.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC
