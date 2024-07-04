import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/global.scss'
import Navbar from "@/components/navbar/Navbar";
import '@/app/layout.scss'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Real Estate",
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
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
