import { MENU } from "@/data/menu";

export default function PriceMenu() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-20">

        {Object.entries(MENU).map(([key, section]) => (
          <div key={key}>

            {/* ===== Section Title ===== */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-medium tracking-wide">
                {section.title}
              </h2>
            </div>

            {/* ===== Price List ===== */}
            <ul className="space-y-6 text-sm">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-zinc-200 pb-4"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {(() => {
                        const desc =
                          (item as any).description ??
                          (item as any).desc ??
                          (item as any).subtitle
                        return desc ? (
                          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                            {desc}
                          </p>
                        ) : null
                      })()}
                    </div>
                    <span className="whitespace-nowrap font-medium">
                      {item.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}