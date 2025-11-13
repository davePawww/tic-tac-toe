import logo from "./assets/logo.svg";

export default function Header() {
  return (
    <div className="mb-6 flex flex-col items-center">
      <div className="mb-2 flex items-center justify-center gap-4">
        <img src={logo} alt="Logo" className="h-16 w-16" />
        <h1 className="text-4xl">Tic Tac Toe</h1>
      </div>
      <p>First to 3 in a row wins!</p>
    </div>
  );
}
