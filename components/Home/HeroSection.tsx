"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "https://storage.googleapis.com/photo-portfolio/mintglow/mintglow-banner-3.png",
    mobilePosition: "50% 20%",
  },
  {
    src: "https://storage.googleapis.com/photo-portfolio/mintglow/mintglow-banner-1.png",
    mobilePosition: "50% 25%",
  },
  {
    src: "https://storage.googleapis.com/photo-portfolio/mintglow/mintglow-banner-2.png",
    mobilePosition: "50% 30%",
  },
  {
    src: "https://storage.googleapis.com/photo-portfolio/mintglow/mintglow-banner-4.png",
    mobilePosition: "50% 20%",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        <Image
          src={IMAGES[index].src}
          alt="Mint Glow Nail Salon"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover md:object-center"
          style={{ objectPosition: IMAGES[index].mobilePosition }}
        />

        <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white text-sm">
          <button
            onClick={prev}
            aria-label="前の画像"
            className="opacity-80 hover:opacity-100"
          >
            ‹
          </button>
          <span>
            {index + 1} / {IMAGES.length}
          </span>
          <button
            onClick={next}
            aria-label="次の画像"
            className="opacity-80 hover:opacity-100"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}