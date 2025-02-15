import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rock Paper Scissors Lizard Spock",
  description: "Play RPSLS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
