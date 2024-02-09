import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import StarsCanvas from "@/components/main/StarFrame";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nithin Kamal",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme=""
      className={`bg-cover 
    bg-center h-screen bg-fixed bg-no-repeat
    w-full z-0 
    bg-[linear-gradient(to_right_bottom,rgba(31,42,58,0.9),rgba(12,37,71,0.9)),url('/keyboard.jpg')]
  `}
    >
      <body className={inter.className}>
        <Providers>
          <StarsCanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
