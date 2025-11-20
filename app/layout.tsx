import type { Metadata } from "next";
import { Inter, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Cevizyon - Aycan'ın Bahçesi",
  description: "Amasya Merzifon'dan Evinize Gelen Doğallık.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${caveat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
