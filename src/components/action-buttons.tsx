import { Button } from "@/components/ui/button";

type ActionButtonsProps = {
  handleNewGame: () => void;
  handleResetScores: () => void;
};

export default function ActionButtons({
  handleNewGame,
  handleResetScores,
}: ActionButtonsProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:gap-8">
      <Button className="w-full cursor-pointer md:w-48" onClick={handleNewGame}>
        New Game
      </Button>
      <Button
        className="w-full cursor-pointer md:w-48"
        variant="outline"
        onClick={handleResetScores}
      >
        Reset Scores
      </Button>
    </div>
  );
}
