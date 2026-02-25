"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

type Row = {
  label: string;
  value: React.ReactNode;
};

export default function Access() {
  const [showPhone, setShowPhone] = useState(false);

  const bookingUrl = "https://calendar.app.google/rXLxYtSWcYWRkUtc6";
  const address =
    "千葉県千葉市緑区おゆみ野3丁目13−9 アブロード301号";
  const nearest =
    "鎌取駅南口より徒歩10分（目安）";
  const accessGuide =
    "鎌取駅南口を出てイオンを左に見て真っ直ぐ進むと区役所があります。区役所とイオンの間に駐輪場があり、通り抜けて横断歩道も渡り真っ直ぐ進むと右手にマンションの細い小道（左手、歯科医院が目印）を抜けて左に曲がると右側に3階建ての建物があります（2階、法律事務所の看板が目印）その建物の3階、301号室が当店になります。";
  const businessHours = "10:00〜17:00";
  const holiday = "不定休";
  const payments =
    "Visa／Mastercard／JCB／American Express／Diners Club／UnionPay（銀聯）／Discover／交通系IC／WAON／nanaco／QUICPay";
  const equipment = "総数3（ネイル2／アイ1／リクライニングチェア1）";
  const staff = "総数3人（施術者（ネイル）2人／施術者（まつげ）1人）";
  const parking = "提携している駐車場はありません。";
  const notes =
    "スタッフ募集中！！";

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.451266572455!2d140.17634282063182!3d35.55957366051568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60229be4d9bdd431%3A0xbaf29501209cac2e!2zTWludCBnbG9344CQ44Of44Oz44OIIOOCsOODreODvOOAkQ!5e1!3m2!1sen!2sus!4v1772024001972!5m2!1sen!2sus";

  const handlePrint = () => {
    window.print();
  };

  const handleSendToMobile = async () => {
    // Prefer native share if available; fallback to mail draft.
    const text = `Mint glow（ミントグロー）\n住所：${address}\nアクセス：${nearest}\n予約：${bookingUrl}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Mint glow（ミントグロー）アクセス",
          text,
          url: bookingUrl,
        });
        return;
      }
    } catch {
      // ignore and fallback
    }
    const mailto = `mailto:?subject=${encodeURIComponent(
      "Mint glow（ミントグロー）アクセス"
    )}&body=${encodeURIComponent(text)}`;
    window.location.href = mailto;
  };

  const rows: Row[] = [
    {
      label: "電話番号",
      value: (
        <div className="flex items-center gap-3">
          {showPhone ? (
            <a
              href="tel:0000000000"
              className="underline underline-offset-2 hover:opacity-80"
            >
              000-0000-0000
            </a>
          ) : (
            <span className="text-zinc-500">番号を表示</span>
          )}
          <button
            type="button"
            onClick={() => setShowPhone((v) => !v)}
            className="text-sm underline underline-offset-2 hover:opacity-80"
          >
            {showPhone ? "非表示" : "表示"}
          </button>
        </div>
      ),
    },
    { label: "住所", value: address },
    {
      label: "アクセス・道案内",
      value: (
        <div className="space-y-2">
          <p className="text-sm text-zinc-700">{nearest}</p>
          <p className="text-sm leading-relaxed text-zinc-700">{accessGuide}</p>
        </div>
      ),
    },
    { label: "営業時間", value: businessHours },
    { label: "定休日", value: holiday },
    { label: "支払い方法", value: payments },
    { label: "設備", value: equipment },
    { label: "スタッフ数", value: staff },
    { label: "駐車場", value: parking },
    {
      label: "こだわり条件",
      value: (
        <span className="text-sm text-zinc-700">
          当日受付OK／女性専用／駅から徒歩5分以内／2回目以降特典あり／店頭でのカード支払いOK／女性スタッフ在籍／完全予約制／指名予約OK／1人で貸切OK／お子さま同伴可／リクライニングチェア（ベッド）／つけ放題メニューあり／都度払いメニューあり／プライダルメニューあり
        </span>
      ),
    },
    { label: "備考", value: notes },
  ];

  return (
    <>
      <PageHero image="/menu/access.jpg" title="Access" subtitle="アクセス" />

      <section className="px-4 pb-16 pt-10">
        <div className="mx-auto max-w-5xl">
          {/* Map */}
          <div className="overflow-hidden border border-zinc-200 bg-white">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Mint glow map"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 border-t border-zinc-200 p-4 sm:flex-row sm:items-center sm:justify-end">
              <Button
                className="rounded-none"
                onClick={() => window.open(bookingUrl, "_blank", "noopener,noreferrer")}
              >
                予約する
              </Button>
              <Button
                variant="outline"
                className="rounded-none"
                onClick={handlePrint}
              >
                印刷画面を表示する
              </Button>
              <Button
                variant="outline"
                className="rounded-none"
                onClick={handleSendToMobile}
              >
                携帯に送る
              </Button>
            </div>
          </div>

          {/* Salon data */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold tracking-wide">
              ミント グロー（Mint glow）のサロンデータ
            </h2>

            <div className="mt-4 overflow-hidden border border-zinc-200 bg-white">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="border-t border-zinc-200">
                      <th className="w-40 bg-zinc-50 px-4 py-4 text-left align-top font-medium text-zinc-800">
                        {row.label}
                      </th>
                      <td className="px-4 py-4 text-zinc-800">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              ※住所の詳細はご予約確定後にご案内いたします。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}