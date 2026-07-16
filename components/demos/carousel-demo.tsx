"use client";

import { Carousel, CarouselItem } from "@/registry/mountainview-ui/carousel";

const slides = [
  ["Alpine lakes", "linear-gradient(135deg,#6750A4,#00639b)"],
  ["Desert light", "linear-gradient(135deg,#7d5260,#b3261e)"],
  ["Forest floor", "linear-gradient(135deg,#006e1c,#625b71)"],
  ["City nights", "linear-gradient(135deg,#141218,#4f378b)"],
];

export default function CarouselDemo() {
  return (
    <Carousel className="max-w-md">
      {slides.map(([label, bg], i) => (
        <CarouselItem
          key={label}
          label={label}
          className={i % 2 === 1 ? "w-[45%]" : undefined}
        >
          <div className="size-full" style={{ background: bg }} />
        </CarouselItem>
      ))}
    </Carousel>
  );
}
