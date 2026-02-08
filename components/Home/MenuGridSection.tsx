import Link from "next/link";
import Image from "next/image";

const ITEMS = [
  {
    label: "コンセプト",
    href: "/concept",
    image: "/menu/concept.jpg",
  },
  {
    label: "料金",
    href: "/price",
    image: "/menu/price.jpg",
  },
  {
    label: "ギャラリー",
    href: "/gallery",
    image: "/menu/gallery.jpg",
  },
  {
    label: "アクセス",
    href: "/access",
    image: "/menu/access.jpg",
  },
];

export default function MenuGridSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative aspect-square overflow-hidden rounded-md"
          >
            {/* Background image */}
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 768px) 25vw, 50vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium tracking-wide text-white">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}