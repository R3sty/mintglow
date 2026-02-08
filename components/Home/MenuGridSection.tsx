import Link from "next/link";

const ITEMS = [
  { label: "コンセプト", href: "/concept" },
  { label: "料金", href: "/price" },
  { label: "ギャラリー", href: "/gallery" },
  { label: "アクセス", href: "/access" },
];

export default function MenuGridSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex aspect-square items-center justify-center rounded-md bg-zinc-100 text-sm tracking-wide hover:bg-zinc-200 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}