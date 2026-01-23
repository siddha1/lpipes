import type { Metadata } from "next";
import { Spectral, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-spectral",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MINT | Liquidity Infrastructure",
  description: "Liquidity Pipes for Global Finance. Deploy Capital at Machine Speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.variable} ${jetbrainsMono.variable} antialiased bg-obsidian`}
      >
        {children}
      </body>
    </html>
  );
}
