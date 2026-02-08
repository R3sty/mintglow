"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const MENU = [
  { label: "トップ", href: "/" },
  { label: "コンセプト", href: "/concept" },
  { label: "料金", href: "/price" },
  { label: "ギャラリー", href: "/gallery" },
  { label: "アクセス", href: "/access" },
  { label: "ご予約", href: "/reserve" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="mx-auto mt-10 flex h-16 max-w-7xl items-center justify-between px-4">
          <Logo />

          {/* Hamburger */}
          <button
            aria-label="メニューを開く"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1"
          >
            <span className="h-px w-6 bg-black" />
            <span className="h-px w-6 bg-black" />
            <span className="h-px w-6 bg-black" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#ADD0B3]">
          {/* Close bar */}
          <div className="flex h-16 items-center justify-end px-4">
            <button
              aria-label="メニューを閉じる"
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex h-[calc(100%-4rem)] flex-col items-center justify-center gap-6 text-lg tracking-wide">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}