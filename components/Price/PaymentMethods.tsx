import Image from "next/image"
import { PAYMENT_METHODS } from "@/data/paymentMethods"

export default function PaymentMethods() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">

        {/* Description */}
        <p className="mb-4 text-sm text-zinc-600">
          {PAYMENT_METHODS.description}
        </p>

        {/* Text list (SEO-friendly) */}
        <p className="mb-8 text-xs text-zinc-500">
          {PAYMENT_METHODS.brands.join(" / ")}
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {PAYMENT_METHODS.brands.map((brand) => (
            <Image
              key={brand}
              src={`/payments/${brand.toLowerCase().replace(/\s/g, "")}.svg`}
              alt={brand}
              width={60}
              height={40}
              className="h-8 w-auto opacity-90"
            />
          ))}
        </div>

      </div>
    </section>
  )
}