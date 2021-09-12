const fees = [180, 5000, 10, 600];
const records = ["05:34 5961 IN", "06:00 0000 IN"];

function solution(fees, records) {
  var answer = [];
  const map = new Map();
  const stackMap = new Map();

  records.map((v) => {
    const splitRecord = v.split(" ");
    let minute = splitRecord[0].split(":");
    minute = parseInt(minute[0]) * 60 + parseInt(minute[1]);

    if (!map.has(splitRecord[1])) map.set(splitRecord[1], minute);
    else {
      map.set(splitRecord[1], minute - map.get(splitRecord[1]));

      if (!stackMap.has(splitRecord[1]))
        stackMap.set(splitRecord[1], map.get(splitRecord[1]));
      else
        stackMap.set(
          splitRecord[1],
          stackMap.get(splitRecord[1]) + map.get(splitRecord[1])
        );

      map.delete(splitRecord[1]);
    }
  });

  if (map.size !== 0) {
    map.forEach((value, key) => {
      if (!isNaN(stackMap.get(key))) {
        stackMap.set(key, stackMap.get(key) + (1439 - value));
      } else {
        stackMap.set(key, 1439 - value);
      }
    });
  }

  Array.from(stackMap)
    .sort((a, b) => a[0] - b[0] )
    .map((v) => {
      if (v[1] - fees[0] <= 0) answer.push(fees[1]);
      else {
        answer.push(fees[1] + Math.ceil((v[1] - fees[0]) / fees[2]) * fees[3]);
      }
    });

console.log(answer, stackMap, map);

  return answer;
}

solution(fees, records);
