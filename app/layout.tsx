import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/services.css";
import "@/styles/pricing.css";
import "@/styles/footer.css";
import "@/styles/audit.css";
import "@/styles/growth.css";
import "@/styles/howwework.css";
import "@/styles/marquee.css";
import "@/styles/preloader.css";
import "@/styles/telegram.css";
import "@/styles/platforms.css";
import YandexMetrika from "@/app/components/YandexMetrika";
import TelegramButton from "@/app/components/TelegramButton";
import Preloader from "@/app/components/Preloader";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lockgin.ru"),
  title: {
    default: "Lockgin — маркетинговое агентство полного цикла",
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
    url: "https://lockgin.ru",
    siteName: "Lockgin",
    title: "Lockgin — маркетинговое агентство полного цикла",
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
    title: "Lockgin — маркетинговое агентство полного цикла",
    description:
      "Реклама в VK и Яндексе, SMM, контент и воронки под ключ. Работаем на результат.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lockgin.ru",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="antialiased">
        <YandexMetrika />
        <Preloader />
        <TelegramButton />
        {children}
      </body>
    </html>
  );
}
