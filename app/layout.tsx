import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserveButton from "@/components/FloatingReserveButton";

export const metadata: Metadata = {
  title: {
    default: "Mint Glow Nail Salon｜ネイル＆アイラッシュサロン（おゆみ野）",
    template: "%s｜Mint Glow Nail Salon",
  },
  description:
    "千葉市緑区おゆみ野のネイル＆アイラッシュサロン。丁寧な施術と落ち着いた空間で、指先から美しさを。",
  keywords: [
    "ネイルサロン",
    "アイラッシュ",
    "おゆみ野",
    "千葉市",
    "Mint Glow",
    "ジェルネイル",
    "まつ毛",
  ],
  openGraph: {
    title: "Mint Glow Nail Salon",
    description:
      "千葉市緑区おゆみ野のネイル＆アイラッシュサロン",
    url: "https://mintglow.jp", // replace later
    siteName: "Mint Glow Nail Salon",
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin", "japanese"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={`${notoSansJP.className} antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <FloatingReserveButton />
        <Footer />
      </body>
    </html>
  );
}