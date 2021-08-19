const genres = ["classic", "pop", "classic", "classic", "pop", "hello"];
const plays = [500, 600, 150, 800, 600, 200];

function solution(genres, plays) {
  const types = {};

  for (const idx in genres) {
    if (genres[idx] in types) types[genres[idx]] += plays[idx];
    else types[genres[idx]] = plays[idx];
  }

  const sortTypes = Object.fromEntries(
    Object.entries(types).sort(([, a], [, b]) => b - a)
  );

  const answer = [];

  Object.keys(sortTypes).map((value) => {
    const type = [];
    for (const idx in genres) {
      if (genres[idx] === value) type.push(idx);
    }

    if (type.length > 1) {
      const playType = type.map((e) => plays[e]).sort((a, b) => b - a);

      answer.push(plays.indexOf(playType[0]), plays.lastIndexOf(playType[1]));
    } else answer.push(parseInt(type[0]));
  });

  return answer;
}

console.log(solution(genres, plays));
