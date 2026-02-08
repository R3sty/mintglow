const CARDS = [
  {
    title: "衛生管理について",
    description:
      "Mint Glow Nail Salonでは、お客様に安心してご利用いただけるよう、衛生管理を徹底しています。",
  },
  {
    title: "採用情報",
    description:
      "Mint Glow Nail Salonでは、一緒に働くスタッフを募集しています。",
  },
];

export default function InfoCardsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-md border border-zinc-200 p-6"
          >
            <h3 className="mb-2 text-sm font-medium tracking-wide">
              {card.title}
            </h3>
            <p className="text-xs leading-relaxed text-zinc-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}