import { WEB_COUPONS } from "@/data/webCoupon"

type Props = {
  title?: string
}

export default function WebCoupon({ title = "web coupon" }: Props) {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Section title */}
        <h2 className="mb-10 text-lg font-medium lowercase tracking-wide">
          {title}
        </h2>

        {/* Coupon list */}
        <div className="space-y-8">
          {WEB_COUPONS.map((coupon, index) => (
            <div
              key={index}
              className="border border-zinc-300 px-6 py-5 text-sm"
            >
              <p className="mb-2 font-medium">{coupon.title}</p>

              <div className="flex items-start justify-between gap-6">
                <div>
                  <p>{coupon.description}</p>
                  {coupon.note && (
                    <p className="mt-1 text-xs text-zinc-500">
                      {coupon.note}
                    </p>
                  )}
                </div>

                <span className="whitespace-nowrap font-medium">
                  {coupon.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <p className="mt-10 text-center text-xs text-zinc-500">
          以下のクレジット及びPayPay、電子決済などのご利用が可能です。<br />
          Visa / MasterCard / JCB / American Express / Diners Club / Discover
        </p>
      </div>
    </section>
  )
}