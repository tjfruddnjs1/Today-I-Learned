let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;

  for (let val of Object.values(salaries)) {
    sum += val;
  }

  return sum;
}

function sumSalariesReduce(salaries) {
  return Object.values(salaries).reduce((acc, cur) => acc + cur, 0);
}

console.log(sumSalariesReduce(salaries));
