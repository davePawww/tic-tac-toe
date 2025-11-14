type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50 pt-4 md:pt-10">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-2 sm:px-4">
        {children}
      </div>
    </main>
  );
}
