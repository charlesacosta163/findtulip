import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const session = await auth();

    if (!session) {
      redirect("/signin");
    }

    return (
      <div className="min-h-screen max-w-[1200px] w-full flex flex-col mx-auto">

        <Navbar avatar={session.user?.image as string} username={session.user?.name as string} />

        <main className="flex-1 w-full p-4 flex items-center justify-center">
            {children}
        </main>

        <Footer />

      </div>
    );
  }
  