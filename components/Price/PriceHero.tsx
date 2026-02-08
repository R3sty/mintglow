import Image from "next/image";

export default function PriceHero() {
  return (
    <section className="relative h-[40vh] min-h-[260px] w-full">
      <Image
        src="/menu/price.jpg"
        alt="料金"
        fill
        priority
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl tracking-wide md:text-3xl">price</h1>
        <p className="mt-1 text-xs tracking-widest">料金</p>
      </div>
    </section>
  );
}