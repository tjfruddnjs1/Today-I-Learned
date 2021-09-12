const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let countUser = new Map();
  let classifyUser = new Map();

  report.map((v) => {
    const splitUser = v.split(" ");
    const duplicateUser = classifyUser.get(splitUser[1]);

    if (!countUser.get(splitUser[1])) {
      countUser.set(splitUser[1], 1);
      classifyUser.set(splitUser[1], [splitUser[0]]);
    } else {
      if (!duplicateUser.includes(splitUser[0])) {
        countUser.set(splitUser[1], countUser.get(splitUser[1]) + 1);
        duplicateUser.push(splitUser[0]);
        classifyUser.set(splitUser[1], duplicateUser);
      }
    }
  });

  countUser.forEach((value, key) => {
    if (value >= k) {
      classifyUser.get(key).map((v) => {
        const idx = id_list.indexOf(v);
        return answer[idx]++;
      });
    }
  });

  console.log(answer);

  return answer;
}

solution(id_list, report, k);
