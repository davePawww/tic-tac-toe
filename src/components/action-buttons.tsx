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
    <div className="flex gap-8">
      <Button className="w-48" onClick={handleNewGame}>
        New Game
      </Button>
      <Button className="w-48" variant="outline" onClick={handleResetScores}>
        Reset Scores
      </Button>
    </div>
  );
}
