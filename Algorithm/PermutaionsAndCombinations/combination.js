const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    console.log(`rest ${rest}`);
    const combinations = getCombinations(rest, selectNumber - 1);
    console.log(`comb ${combinations}`);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    console.log(`att ${attached}`);
    results.push(...attached);
  });

  return results;
};

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result);
/* [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ] */
