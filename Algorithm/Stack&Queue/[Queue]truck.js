const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let sum = 0;
  let queue = new Array(bridge_length);

  queue.fill(0);

  while (queue.length > 0) {
    answer++;

    sum -= queue.shift();

    if (truck_weights.length > 0) {
      if (sum + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        sum += truck;
        queue.push(truck);
      } else {
        queue.push(0);
      }
    }
  }

  return answer;
}

let start = new Date();
console.log(solution(bridge_length, weight, truck_weights));
let end = new Date();

console.log(end - start);
