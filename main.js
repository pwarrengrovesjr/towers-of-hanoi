var board = [[5, 4, 3, 2, 1], [], []];

console.log(`Welcome to Towers of Hanoi! \n\n--- ${board[0].join(" ")}\n--- ${board[1].join(" ")}\n--- ${board[2].join(" ")}`);

var moveDisc = function (from, to) {
  var fromPeg = board[from - 1];
  var toPeg = board[to - 1];

  if (toPeg.length === 0) {
    toPeg.push(fromPeg.pop());
  } else if (fromPeg[fromPeg.length - 1] < toPeg[toPeg.length - 1]) {
    toPeg.push(fromPeg.pop());
  } else {console.log("Invalid move! Can't place a larger disk on top of a smaller disc.")}

  return console.log(`--- ${board[0].join(" ")}\n--- ${board[1].join(" ")}\n--- ${board[2].join(" ")}`);;
};