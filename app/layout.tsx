import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { AuthContextProvider } from "@/context/AuthContext";
import '@/app/global.scss'
import '@/app/layout.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Win Real Estate",
  description: "Win Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="root">
          <AuthContextProvider>
            <Navbar/>
            {children}
          </AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
