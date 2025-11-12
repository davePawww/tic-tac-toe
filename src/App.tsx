import { useState, useCallback, useEffect } from "react";
import Square from "./components/square";
import { Button } from "@/components/ui/button";

const startingBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function App() {
  const [board, setBoard] = useState(startingBoard);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState("");

  const handleSquareClick = useCallback(
    (rowIndex: number, cellIndex: number) => {
      if (board[rowIndex][cellIndex] !== "") return;

      const updatedBoard = board.map((row, rIndex) => {
        return row.map((cell, cIndex) => {
          if (rowIndex === rIndex && cellIndex === cIndex) {
            return currentPlayer;
          }
          return cell;
        });
      });

      setBoard(updatedBoard);
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    },
    [board, currentPlayer],
  );

  const handleResetGame = () => {
    setBoard(startingBoard);
    setCurrentPlayer("X");
    setWinner("");
  };

  useEffect(() => {
    // rows
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] &&
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2]
      ) {
        setWinner(board[row][0]);
      }
    }

    // columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]
      ) {
        setWinner(board[0][col]);
      }
    }

    // diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      setWinner(board[0][0]);
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      setWinner(board[0][2]);
    }
  }, [board]);

  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center bg-gray-950">
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl text-white">Tic Tac Toe</h1>
          <p className="text-white">Current Player: {currentPlayer}</p>
          {winner && <p className="text-white">Winner: {winner}</p>}
          <Button onClick={handleResetGame}>Reset Game</Button>
        </div>

        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="flex">
              {row.map((cell, cellIndex) => {
                return (
                  <Square
                    key={cellIndex}
                    cell={cell}
                    rowIndex={rowIndex}
                    cellIndex={cellIndex}
                    onClick={handleSquareClick}
                  />
                );
              })}
            </div>
          );
        })}
      </main>
    </>
  );
}
