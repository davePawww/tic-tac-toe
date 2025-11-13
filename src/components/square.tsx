import OIcon from "./o-icon";
import XIcon from "./x-icon";

type SquareProps = {
  cell: string;
  rowIndex: number;
  cellIndex: number;
  onClick: (rowIndex: number, cellIndex: number) => void;
  gameOver: boolean;
};

export default function Square({
  cell,
  rowIndex,
  cellIndex,
  onClick,
  gameOver,
}: SquareProps) {
  return (
    <div
      className={`flex h-30 w-30 items-center justify-center rounded-xl border-2 border-gray-300 ${cell === "X" ? "bg-blue-100" : cell === "O" ? "bg-purple-100" : "bg-white"} ${gameOver ? "pointer-events-none" : "cursor-pointer"} hover:bg-gray-100`}
      onClick={() => onClick(rowIndex, cellIndex)}
    >
      {cell === "X" ? <XIcon /> : cell === "O" ? <OIcon /> : null}
    </div>
  );
}
