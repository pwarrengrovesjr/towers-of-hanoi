var board = [[5, 4, 3, 2, 1], [], []];

console.log(`--- ${board[0].join(" ")}\n--- ${board[1].join(" ")}\n--- ${board[2].join(" ")}`);

var moveDisc = function (from, to) {
  var fromPeg = board[from - 1];
  var toPeg = board[to - 1];

  if (toPeg.length === 0) {
    toPeg.push(fromPeg.pop());
  }

  return console.log(`--- ${board[0].join(" ")}\n--- ${board[1].join(" ")}\n--- ${board[2].join(" ")}`);;
};