type SquareProps = {
  cell: string;
  rowIndex: number;
  cellIndex: number;
  onClick: (rowIndex: number, cellIndex: number) => void;
};

export default function Square({
  cell,
  rowIndex,
  cellIndex,
  onClick,
}: SquareProps) {
  return (
    <div
      className="h-20 w-20 border border-white text-white"
      onClick={() => onClick(rowIndex, cellIndex)}
    >
      {cell}
    </div>
  );
}
