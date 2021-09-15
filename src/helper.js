const checkValid = (board, x, y, num) => {
  // console.log(board);
  const validInputs = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  if (!validInputs.has(+num)) return false;

  const checkHorizontal = () => {
    return board[x].every((n) => !n || n !== num);
  };

  const checkVertical = () => {
    return board.every(
      (row, rowIdx) => (!board[rowIdx][y] || board[rowIdx][y] !== num)
    );
  };

  const checkSquare = () => {
    let topLeftX = Math.floor(x / 3);
    let topLeftY = Math.floor(x / 3);

    for (let i = topLeftX; i < topLeftX + 3; i++) {
      for (let j = topLeftY; j < topLeftY + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }

    return true;
  };

  return checkHorizontal() && checkVertical() && checkSquare();
};


const checkWin = (board) => {
  return board.every(row => row.every(num => num !== ""));
}

// const BoardGenerator = () {

// }

export { checkValid, checkWin };

