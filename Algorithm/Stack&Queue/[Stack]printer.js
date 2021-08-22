const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function solution(priorities, location) {
  let answer = 0;
  let order = [];

  let idxPriorities = priorities.map((val, idx)=>{
      return [idx , val];
  })

  while (true) {
    let compare = idxPriorities.shift();
    let isBig = idxPriorities.find((val) => val[1] > compare[1]);

    if (isBig !== undefined) idxPriorities.push(compare);
    else order.push(compare);

    if (idxPriorities.length == 0) break;
  }

  order.map((val,idx)=>{
      if(val[0] === location) answer = idx+1;
  })

  return answer;
}

solution(priorities, location);
