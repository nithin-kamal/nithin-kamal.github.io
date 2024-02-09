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
    <html lang="en" data-theme="" className="h-full">
      <body className={inter.className}>
        <Providers>
          <StarsCanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
