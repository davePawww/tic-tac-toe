type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="h-screen bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50 pt-10">
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}
