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
import "@/styles/growth.css";
import "@/styles/howwework.css";
import "@/styles/marquee.css";
import "@/styles/preloader.css";
import "@/styles/telegram.css";
import YandexMetrika from "@/app/components/YandexMetrika";
import TelegramButton from "@/app/components/TelegramButton";
import Preloader from "@/app/components/Preloader";
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lockgin.netlify.app"),
  title: {
    default: "Lockgin — Маркетинговое агентство полного цикла",
    template: "%s — Lockgin",
  },
  description:
    "Маркетинговое агентство Lockgin: реклама в VK и Яндексе, SMM, контент и воронки под ключ. От стратегии до заявок — работаем на результат.",
  keywords: [
    "маркетинговое агентство",
    "реклама VK",
    "Яндекс Директ",
    "SMM продвижение",
    "продвижение бизнеса",
    "таргетированная реклама",
    "контент маркетинг",
    "Lockgin",
  ],
  authors: [{ name: "Lockgin" }],
  creator: "Lockgin",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://lockgin.netlify.app",
    siteName: "Lockgin",
    title: "Lockgin — Маркетинговое агентство полного цикла",
    description:
      "Реклама в VK и Яндексе, SMM, контент и воронки под ключ. От стратегии до заявок — работаем на результат.",
    images: [
      {
        url: "/og-image.jpg",
        width: 640,
        height: 640,
        alt: "Lockgin Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lockgin — Маркетинговое агентство полного цикла",
    description:
      "Реклама в VK и Яндексе, SMM, контент и воронки под ключ. Работаем на результат.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lockgin.netlify.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">
        <YandexMetrika />
        <Preloader />
        <TelegramButton />
        {children}
      </body>
    </html>
  );
}
