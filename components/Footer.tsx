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
            大阪・堀江にある大人かわいいネイルサロン。<br />
            指先から日常に、やさしい輝きを。
          </p>
        </div>

        {/* Salon info */}
        <div className="text-xs leading-relaxed">
          <p className="mb-2 font-medium">サロン情報</p>
          <p>〒000-0000 大阪府〇〇区〇〇町1-2-3</p>
          <p>営業時間：10:00 – 20:00</p>
          <p>定休日：不定休</p>

          <div className="mt-3">
            <Button
              variant="mintOutline"
              size="sm"
              asChild
            >
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google map
              </a>
            </Button>
          </div>
        </div>

        {/* CTA / links */}
        <div className="flex flex-col gap-3 md:items-end">
          {/* <Button
            variant="mint"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <Link href="/reserve">
              ご予約はこちら
            </Link>
          </Button> */}

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
            <Link href="#" className="hover:underline">
              Instagram
            </Link>
            <Link href="#" className="hover:underline">
              Facebook
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
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