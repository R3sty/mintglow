import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="relative px-4 py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://storage.googleapis.com/photo-portfolio/mintglow/mintglow-banner-2.png"
          alt="マグネットネイル デザイン"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-2xl md:text-3xl font-medium tracking-wide text-[#ADD0B3]">
          カラー豊富なマグネットネイル＆次世代まつ毛パーマ
        </h2>

        <p className="mb-8 text-base md:text-lg font-medium text-[#7C3FA1]">
          マツエク ¥4,950〜（追加でLED変更可）
        </p>

        <div className="text-sm md:text-base leading-relaxed text-zinc-700 space-y-4">
          <p>
            いつも頑張るあなたに“ご褒美”と“パワーチャージ”を。
          </p>
          <p>
            自分がトキメク色やデザインで、毎日を少し特別にしてみませんか？
            サロンが初めての方も大歓迎です。
          </p>
          <p>
            丁寧なカウンセリングと施術で、
            1人ひとりに合ったネイルや目元をご提案させていただきます。
          </p>
          <p>
            自分だけの癒し時間を、ぜひ当店でお過ごしください。
          </p>
        </div>
      </div>
    </section>
  );
}