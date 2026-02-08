"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image carousel */}
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        <Image
          src={IMAGES[index]}
          alt="grace nail factory"
          fill
          priority
          className="object-cover"
        />

        {/* Carousel controls */}
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