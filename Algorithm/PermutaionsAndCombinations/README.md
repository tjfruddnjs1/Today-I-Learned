# 순열과 조합 알고리즘 JavaScript

## 조합

- 조합을 먼저 구현하게 된 이유는 조합의 코드에서 한 줄만 변경하면 순열을 구하는 코드를 작성할 수 있기 때문
- **차이점** : `순서`의 여부
- 예시 : 4C3 , [1,2,3] = [3,2,1]

```md
Input : [1,2,3,4]
Output : [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]
```

```js
시작
    1을 고정 후, 나머지 [2,3,4] 중 2개씩 조합
    /* [1,2,3] [1,2,4] [1,3,4] */
    2를 고정 후, 나머지 [3,4] 중 2개씩 조합
    /* [2,3,4] */
    3을 고정 후, 나머지 [4] 중 2개씩 조합
    /* [] */
    4을 고정 후, 나머지 [] 중 2개씩 조합
    /* [] */
종료
```

- 재귀(Recursion)를 이용하여 계속해서 반복 될 일에 대해 한번만 명시 해 놓고 들어가는 인자(나를 뺀 나머지)를 바꾸어 준다.

## 구현

1. 재귀 종료 조건 : 하나를 선택할 때에는 모든 배열의 원소를 선택해서 return
2. forEach 문으로, 배열의 모든 원소를 처음부터 끝까지 한 번씩 고정(fixed) 되도록 한다.
3. 고정된 값의 나머지 배열에 대해서 조합을 구하도록 한다. 이때, 선택하는 개수를 하나 줄인다.
4. 조합을 만들어온 결과에 fixed 고정된 값을 앞에 붙여 return할 배열에 spread syntax로 배열화 후 return

- cf. 2C3, 1C2 같이 선택하려는 개수가 많으면 빈 배열이 return 되기 때문에 위 예시에서 3과 4을 선택할 때에는 빈 배열이 돌아와 최종 결과 값에 포함되지 않는다.

```js
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result);
// => [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]
```
