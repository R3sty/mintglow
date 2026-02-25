"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { WEB_COUPONS } from "@/data/webCoupon"
import { Button } from "@/components/ui/button"

type Props = {
  title?: string
}

export default function WebCoupon({ title = "web coupon" }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  const copiedTimerRef = useRef<number | null>(null)
  const toastTimerRef = useRef<number | null>(null)

  const handleCopy = async (code: string, index: number) => {
    // Clear any existing timers so repeated clicks always show the toast.
    if (copiedTimerRef.current) window.clearTimeout(copiedTimerRef.current)
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current)

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(code)
      } else {
        // Fallback for environments where Clipboard API is unavailable.
        window.prompt("コピーしてご利用ください", code)
      }

      setCopiedIndex(index)
      setToast(`クーポンコード「${code}」をコピーしました`)

      copiedTimerRef.current = window.setTimeout(() => setCopiedIndex(null), 1500)
      toastTimerRef.current = window.setTimeout(() => setToast(null), 2200)
    } catch {
      setToast("コピーに失敗しました。手動でコピーしてください。")
      toastTimerRef.current = window.setTimeout(() => setToast(null), 2500)
    }
  }
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Section title */}
        <h2 className="mb-10 text-lg font-medium lowercase tracking-wide">
          {title}
        </h2>

        {/* Coupon list */}
        <div className="space-y-10">
          {WEB_COUPONS.map((coupon, index) => (
            <div
              key={index}
              className="border border-zinc-300 p-6 text-sm"
            >

              {/* Thumbnail */}
              <div className="mb-4 overflow-hidden">
                <Image
                  src={coupon.thumbnail}
                  alt={coupon.title}
                  width={1200}
                  height={750}
                  sizes="(min-width: 768px) 640px, 100vw"
                  className="h-40 w-full object-cover"
                  unoptimized
                />
              </div>

              {/* Target badge */}
              <div className="mb-3 flex items-center gap-3">
                {coupon.target && (
                  <span className="bg-zinc-200 px-3 py-1 text-xs">
                    {coupon.target}
                  </span>
                )}
                {coupon.isNew && (
                  <span className="bg-zinc-100 px-3 py-1 text-xs">
                    新規
                  </span>
                )}
              </div>

              {/* Title + Price */}
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-base font-medium leading-snug">
                  {coupon.title}
                </h3>

                {coupon.price && (
                  <span className="whitespace-nowrap text-base font-semibold text-[#d26b6b]">
                    {coupon.price}
                  </span>
                )}
              </div>

              {/* Subtitle / About */}
              {coupon.subtitle && (
                <p className="mb-2 text-zinc-600">
                  {coupon.subtitle}
                </p>
              )}

              {/* Coupon Code */}
              {coupon.code && (
                <div className="mb-4">
                  <p className="mb-2 text-xs text-zinc-500">
                    ※ご予約前にクーポンコードをコピーしてください
                  </p>
                  <div className="flex items-center justify-between border border-zinc-300 px-3 py-2">
                    <span className="text-sm font-medium tracking-wider">
                      {coupon.code}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-7 rounded-full px-3 text-xs"
                      onClick={() => handleCopy(coupon.code!, index)}
                    >
                      {copiedIndex === index ? "コピー済み ✓" : "コピー"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Tags */}
              {coupon.tags && (
                <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-500">
                  {coupon.tags.map((tag: string, i: number) => (
                    <span key={i} className="border border-zinc-300 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Conditions */}
              <div className="space-y-2 text-xs text-zinc-600">
                <div>
                  <span className="font-medium">提示条件：</span>
                  <span>{coupon.presentationCondition}</span>
                </div>
                <div>
                  <span className="font-medium">利用条件：</span>
                  <span>{coupon.usageCondition}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex justify-end">
                <Button
                  asChild
                  className="rounded-full bg-[#cfe6d6] text-black hover:bg-[#bfe0c8] px-6"
                >
                  <a
                    href="https://calendar.app.google/rXLxYtSWcYWRkUtc6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ご予約はこちら
                  </a>
                </Button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="pointer-events-none fixed inset-x-0 bottom-6 z-[9999] flex justify-center px-4"
        >
          <div className="rounded-full bg-black/90 px-4 py-3 text-sm text-white shadow">
            {toast}
          </div>
        </div>
      )}
    </section>
  )
}