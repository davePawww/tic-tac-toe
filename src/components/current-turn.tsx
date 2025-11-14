import OIcon from "@/components/o-icon";
import XIcon from "@/components/x-icon";

type CurrentTurnProps = {
  currentTurn: "X" | "O";
};

export default function CurrentTurn({ currentTurn }: CurrentTurnProps) {
  return (
    <div className="mb-6 flex h-12 w-full items-center justify-center rounded-xl border-2 bg-gray-50/50 md:h-16">
      Current Turn: {currentTurn === "X" ? <XIcon /> : <OIcon />}
    </div>
  );
}
