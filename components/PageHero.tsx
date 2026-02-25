import Image from "next/image";

type PageHeroProps = {
  image: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ image, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[260px] w-full">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl tracking-wide md:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-xs tracking-widest">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}