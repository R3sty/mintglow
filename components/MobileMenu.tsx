"use client";

import Link from "next/link";

const MENU = [
{ label: "トップ", href: "/" },
{ label: "コンセプト", href: "/concept" },
{ label: "料金", href: "/price" },
{ label: "ギャラリー", href: "/gallery" },
{ label: "アクセス", href: "/access" },
{ label: "ご予約", href: "/reserve" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#f7d8c6]">
      {/* Top bar */}
      <div className="flex h-16 items-center justify-between px-4">
        <div />
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

      {/* Menu */}
      <nav className="flex h-[calc(100%-4rem)] flex-col items-center justify-center gap-6 text-lg tracking-wide">
        {MENU.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="hover:opacity-70"
          >
            {item.label}
          </Link>
        ))}

        <div className="my-6 h-px w-40 bg-black/20" />

        <Link
          href="/reserve"
          onClick={onClose}
          className="flex items-center gap-2 text-lg"
        >
          reserve
          <span className="text-sm">📅</span>
        </Link>
      </nav>
    </div>
  );
}