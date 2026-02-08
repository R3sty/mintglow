import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-mint-muted/40 px-4 py-12 text-sm text-zinc-700">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-4 text-xs leading-relaxed">
            ネイル＆アイラッシュサロン<br />
            Mint Glow Nail Salon
          </p>
        </div>

        {/* Salon info */}
        <div className="text-xs leading-relaxed">
          <p className="mb-2 font-medium">サロン情報</p>

          <p className="mt-2">
            住所<br />
            〒266-0033<br />
            千葉県千葉市緑区おゆみ野<br />
            3丁目13−9 アプロード301
          </p>

          <p className="mt-3">
            電話番号<br />
            <a
              href="tel:09043160789"
              className="hover:underline"
            >
              090-4316-0789
            </a>
          </p>

          <div className="mt-4">
            <Button
              variant="mintOutline"
              size="sm"
              asChild
            >
              <a
                href="https://maps.app.goo.gl/5BB8abUMRv41jb6A6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google map
              </a>
            </Button>
          </div>
        </div>

        {/* Contact / links */}
        <div className="flex flex-col gap-3 md:items-end">
          <Button
            variant="mintOutline"
            size="sm"
            className="rounded-full px-6"
            asChild
          >
            <Link href="/contact">
              メールでのお問い合わせ
            </Link>
          </Button>

          <div className="mt-3 flex gap-4 text-xs">
            <Link href="https://www.instagram.com/mint_glow_beautysalon" className="hover:underline">
              Instagram
            </Link>
            <Link href="https://lin.ee/oJhdiAQ" className="hover:underline">
              LINE
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-[11px] text-zinc-500">
        © {new Date().getFullYear()} Mint Glow Nail Salon
      </div>
    </footer>
  );
}