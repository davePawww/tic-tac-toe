import { useState, useCallback, useEffect } from "react";
import logo from "./assets/logo.svg";
import Container from "@/components/container";
import Scoreboard from "@/components/scoreboard";
import XIcon from "@/components/x-icon";
import OIcon from "@/components/o-icon";
import Board from "@/components/board";
import { Button } from "@/components/ui/button";

type Score = {
  X: number;
  O: number;
  draws: number;
};

const startingBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const initialScore: Score = {
  X: 0,
  O: 0,
  draws: 0,
};

export default function App() {
  const [board, setBoard] = useState(startingBoard);
  const [currentTurn, setCurrentTurn] = useState<"X" | "O">("X");
  const [score, setScore] = useState<Score>(initialScore);
  const [gameOver, setGameOver] = useState(false);

  const handleSquareClick = useCallback(
    (rowIndex: number, cellIndex: number) => {
      if (board[rowIndex][cellIndex] !== "") return;

      const updatedBoard = board.map((row, rIndex) => {
        return row.map((cell, cIndex) => {
          if (rowIndex === rIndex && cellIndex === cIndex) {
            return currentTurn;
          }
          return cell;
        });
      });

      setBoard(updatedBoard);
      setCurrentTurn((prev) => (prev === "X" ? "O" : "X"));
    },
    [board, currentTurn],
  );

  const handleResetScores = () => {
    setBoard(startingBoard);
    setCurrentTurn("X");
    setScore(initialScore);
    setGameOver(false);
  };

  const handleNewGame = () => {
    setBoard(startingBoard);
    setCurrentTurn("X");
    setGameOver(false);
  };

  useEffect(() => {
    const checkWinner = () => {
      // rows
      for (let row = 0; row < 3; row++) {
        if (
          board[row][0] &&
          board[row][0] === board[row][1] &&
          board[row][1] === board[row][2]
        ) {
          setGameOver(true);
          return board[row][0];
        }
      }

      // columns
      for (let col = 0; col < 3; col++) {
        if (
          board[0][col] &&
          board[0][col] === board[1][col] &&
          board[1][col] === board[2][col]
        ) {
          setGameOver(true);
          return board[0][col];
        }
      }

      // diagonals
      if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
      ) {
        setGameOver(true);
        return board[0][0];
      }
      if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
      ) {
        setGameOver(true);
        return board[0][2];
      }

      return null;
    };

    const winner = checkWinner();
    if (winner) {
      setScore((prev) => ({
        ...prev,
        [winner]: prev[winner as "X" | "O"] + 1,
      }));
    } else {
      const isDraw = board.every((row) => row.every((cell) => cell !== ""));
      if (isDraw) {
        setScore((prev) => ({
          ...prev,
          draws: prev.draws + 1,
        }));
      }
    }
  }, [board]);

  return (
    <>
      <Container>
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center justify-center gap-4">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <h1 className="text-4xl">Tic Tac Toe</h1>
          </div>
          <p>First to 3 in a row wins!</p>
        </div>
        <Scoreboard score={score} />
        <div className="mb-6 flex h-16 w-full items-center justify-center rounded-xl border-2 bg-gray-50/50">
          Current Turn: {currentTurn === "X" ? <XIcon /> : <OIcon />}
        </div>

        <Board
          board={board}
          onSquareClick={handleSquareClick}
          gameOver={gameOver}
        />
        <div className="flex gap-8">
          <Button className="w-48" onClick={handleNewGame}>
            New Game
          </Button>
          <Button
            className="w-48"
            variant="outline"
            onClick={handleResetScores}
          >
            Reset Scores
          </Button>
        </div>
      </Container>
    </>
  );
}
