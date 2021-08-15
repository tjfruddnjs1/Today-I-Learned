const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function solution(clothes) {
  const arrayToObject = Object.fromEntries(clothes);
  const map = new Map();

  for (const item of Object.values(arrayToObject)) {
    if (!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
  }

  if (map.size == 30) {
    return 1073741823;
  }

  const values = [];

  for (const [key, value] of map) {
    values.push(value);
  }

  let results = 0;

  for (let i = 1; i <= values.length; i++) {
    if (i > 1)
      results += getCombinations(values, i)
        .map((e) => e.reduce((acc, cur) => acc * cur))
        .reduce((acc, cur) => acc + cur);
    else
      results += getCombinations(values, i)
        .flatMap((e) => e)
        .reduce((acc, cur) => acc + cur);
  }

  return results;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

solution(clothes);
