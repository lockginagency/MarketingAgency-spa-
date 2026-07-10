import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/services.css";
import "@/styles/cases.css";
import "@/styles/pricing.css";
import "@/styles/footer.css";
import "@/styles/audit.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lockgin — Медиа Агентство",
  description: "Реклама, SMM, копирайтинг и ведение каналов.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
