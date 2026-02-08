import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserveButton from "@/components/FloatingReserveButton";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mint Glow Salon",
  description: "ネイルサロン Grace Nail Factory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <FloatingReserveButton />
        <Footer />
      </body>
    </html>
  );
}