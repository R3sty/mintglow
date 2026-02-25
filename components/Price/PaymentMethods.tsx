import Image from "next/image"

const PAYMENT_METHODS = {
  description:
    "以下のクレジットカードおよび電子決済のご利用が可能です。",
  brands: [
    {
      name: "Visa",
      logo: "https://storage.googleapis.com/photo-portfolio/mintglow/logos/VISA-logo.png",
    },
    {
      name: "MasterCard",
      logo: "https://storage.googleapis.com/photo-portfolio/mintglow/logos/mastercardlogo.png",
    },
    {
      name: "JCB",
      logo: "https://storage.googleapis.com/photo-portfolio/mintglow/logos/jcblogo.jpeg",
    },
    {
      name: "American Express",
      logo: "https://storage.googleapis.com/photo-portfolio/mintglow/logos/amexlogo.png",
    },
  ],
}

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
          {PAYMENT_METHODS.brands.map((b) => b.name).join(" / ")}
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {PAYMENT_METHODS.brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={60}
              className="h-8 w-auto opacity-90"
              unoptimized
            />
          ))}
        </div>

      </div>
    </section>
  )
}