import Square from "@/components/square";

type BoardProps = {
  board: string[][];
  onSquareClick: (rowIndex: number, cellIndex: number) => void;
  gameOver: boolean;
};

export default function Board({ board, onSquareClick, gameOver }: BoardProps) {
  return (
    <div className="mb-6 flex h-110 w-fit flex-col items-center justify-center gap-4 rounded-xl border-2 bg-gray-50/50">
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex w-full justify-around gap-4 px-4">
            {row.map((cell, cellIndex) => {
              return (
                <Square
                  key={cellIndex}
                  cell={cell}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  onClick={onSquareClick}
                  gameOver={gameOver}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
