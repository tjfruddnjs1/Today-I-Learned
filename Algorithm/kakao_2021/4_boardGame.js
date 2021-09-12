const board = [
  [
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
  ],
];

const skill = [
  [
    [1, 0, 0, 3, 4, 4],
    [1, 2, 0, 2, 3, 2],
    [2, 1, 0, 3, 1, 2],
    [1, 0, 1, 3, 3, 1],
  ],
];

function solution(board, skill) {
  let answer = 0;
  let horizon = board[0].length;
  let vertical = board.length;

  skill.map((v) => {
    if (v[0] == 1) {
      for (let i = v[1]; i <= v[3]; i++) {
        for (let j = v[2]; j <= v[4]; j++) {
          board[i][j] -= v[5];
        }
      }
    } else {
      for (let i = v[1]; i <= v[3]; i++) {
        for (let j = v[2]; j <= v[4]; j++) {
          board[i][j] += v[5];
        }
      }
    }

    console.log(board);
  });

  for (let i = 0; i < vertical; i++) {
    for (let j = 0; j < horizon; j++) {
      if (board[i][j] > 0) answer++;
    }
  }

  return answer;
}

solution(board, skill);
