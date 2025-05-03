export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-[#FFFDF6] p-4">
        {children}
      </div>    
    );
  }