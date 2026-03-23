import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Warszawski Czas | Luksusowe Zegarki i Biżuteria",
    template: "%s | Warszawski Czas",
  },
  description:
    "Ekskluzywny butik z luksusowymi zegarkami i biżuterią w sercu Warszawy. Mokotowska 71 — gdzie czas spotyka się z elegancją.",
  keywords: [
    "luksusowe zegarki",
    "biżuteria Warszawa",
    "zegarki premium",
    "butik zegarków",
    "Mokotowska 71",
    "Warszawski Czas",
  ],
  authors: [{ name: "Warszawski Czas" }],
  creator: "Warszawski Czas",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Warszawski Czas",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
