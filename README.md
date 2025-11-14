# Tic Tac Toe

A classic Tic Tac Toe game built with React, TypeScript, and Tailwind CSS. This is a practice project demonstrating modern web development techniques.

## Live Demo

Play the game online: [tictactoe-davepaw.vercel.app/](https://tictactoe-davepaw.vercel.app/)

## Features

- **Two-Player Gameplay**: Alternating turns between Player X and Player O
- **Win Detection**: Automatically detects wins in rows, columns, and diagonals
- **Draw Detection**: Recognizes when the game ends in a draw
- **Score Tracking**: Keeps track of wins for both players and draws
- **Game Controls**:
  - New Game button to start a fresh game
  - Reset Scores button to clear all scores
- **Responsive Design**: Clean, modern UI with Tailwind CSS
- **Visual Feedback**: Different colors for X (blue) and O (purple) squares

## How to Play

1. The game starts with Player X's turn
2. Click on any empty square to place your mark
3. Players alternate turns
4. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 squares are filled without a winner, it's a draw
6. Use "New Game" to start over or "Reset Scores" to clear the scoreboard

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **Lucide React** - Icons
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/davePawww/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

## Development

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

## Build

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Format code with Prettier

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── action-buttons.tsx
│   ├── board.tsx
│   ├── container.tsx
│   ├── current-turn.tsx
│   ├── header.tsx
│   ├── o-icon.tsx
│   ├── scoreboard.tsx
│   ├── square.tsx
│   └── x-icon.tsx
├── lib/
│   └── utils.ts
├── assets/
├── App.tsx
├── index.css
└── main.tsx
```

## Contributing

This is a practice project, but feel free to fork and experiment!
