import { cn } from "@/lib/utils";

type ScoreProps = {
  score: {
    X: number;
    O: number;
    draws: number;
  };
};

type ScoreContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Scoreboard({ score }: ScoreProps) {
  return (
    <div className="mb-6 flex w-full flex-col gap-2 md:flex-row md:justify-between md:gap-4">
      <ScoreContainer className="border-blue-200">
        Player X: {score.X}
      </ScoreContainer>
      <ScoreContainer>Draws: {score.draws}</ScoreContainer>
      <ScoreContainer className="border-purple-200">
        Player O: {score.O}
      </ScoreContainer>
    </div>
  );
}

function ScoreContainer({ children, className }: ScoreContainerProps) {
  return (
    <div
      className={cn(
        "flex h-20 w-full items-center justify-center rounded-xl border-2 bg-gray-50/50 md:h-30 md:w-46",
        className,
      )}
    >
      {children}
    </div>
  );
}
