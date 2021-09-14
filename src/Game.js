import React, { useState } from "react";
import Cell from "./Cell";
import { checkValid, checkWin } from './helper';

export default function Game() {
  // const initBoard = Array(9).fill(Array(9).fill(""));
  const randomBoard = [
    ["2", "3", "", "9", "4", "", "6", "7", ""],
    ["8", "", "", "3", "2", "5", "9", "1", "4"],
    ["9", "", "", "7", "6", "", "3", "2", ""],
    ["1", "", "", "", "", "", "7", "9", "2"],
    ["5", "", "3", "2", "1", "", "4", "8", "6"],
    ["4", "", "", "6", "8", "", "5", "3", "1"],
    ["7", "", "", "1", "", "", "", "", "9"],
    ["6", "5", "9", "8", "7", "2", "1", "4", "3"],
    ["3", "", "", "", "9", "", "", "", "7"]
  ]
  const [board, setBoard] = useState(randomBoard);
  const [isInputValid, setIsInputValid] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const reStartGame = () => {
    setIsInputValid(true);
    setIsStarted(false);
    setBoard(randomBoard);
    setIsWin(false);
  }

  const fillCell = (x, y, num) => {
    setIsStarted(true);
    setIsInputValid(checkValid(board, x, y, num));
    setBoard(board => {
      const newBoard = board.map((row) => [...row]);
      newBoard[x][y] = num;
      setIsWin(checkWin(newBoard));
      return newBoard;
    });

  };

  const renderTable = () => {
    return (
      <table>
        <tbody>
          {board.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {board[0].map((cell, colIdx) => (
                <td key={colIdx}>
                  <Cell val={board[rowIdx][colIdx]} x={rowIdx} y={colIdx} onType={fillCell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="Game">
      <h1>Sudoku</h1>
      <div className={"Game-validationInfo"}>
        {!isInputValid ? <p><b className="warning">Warnning: </b>Invalid Input!</p> : ""}
      </div>
      <div>
        {isWin && isInputValid ? <p>You Win!</p> : null}
      </div>
      {renderTable()}
      {isStarted && <button onClick={reStartGame}>Restart</button>}
    </div>
  );
}
