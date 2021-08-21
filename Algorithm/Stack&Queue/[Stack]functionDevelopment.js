const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const answer = [];
  const remains = [];

  progresses.map((val, idx) => {
    remains.push(Math.ceil((100 - val) / speeds[idx]));
  });

  console.log(remains);
  let separator = [];
  remains.forEach((val, idx) => {
    if (separator.length == 0) separator.push(val);
    else {
      if (val <= separator[0]) {
        separator.push(val);
      } else {
        answer.push(separator.length);
        separator = [val];
      }
    }

    if (idx == remains.length - 1) answer.push(separator.length);
  });

  console.log(answer);
  return answer;
}

solution(progresses, speeds);
