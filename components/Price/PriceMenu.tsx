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
              <p className="mt-1 text-sm text-zinc-500">
                {section.subtitle}
              </p>
            </div>

            {/* ===== Price List ===== */}
            <ul className="space-y-4 text-sm">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-6 border-b border-zinc-200 pb-2"
                >
                  <span>{item.name}</span>
                  <span className="whitespace-nowrap font-medium">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}