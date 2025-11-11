"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({
  images,
  alt = "Project image",
}: {
  images: string[];
  alt?: string;
}) {
  const [open, setOpen] = useState(false);
  if (!images?.length) return null;

  return (
    <div className="space-y-3">
      <div className=" relative">
        {/* Dots ที่มองเห็นแน่นอน */}
        <div className="flex justify-center gap-1.5 bg-background/60 backdrop-blur-sm rounded-full py-1 px-2 w-fit mx-auto absolute bottom-1 left-1/2 -translate-x-1/2 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                i === 0 ? "bg-blue-300" : "bg-blue-500"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          className="block w-full rounded-lg overflow-hidden border border-border focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="Open gallery"
        >
          <div className="relative w-full h-80 sm:h-96">
            <Image
              src={images[0]}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </button>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        carousel={{ finite: false }}
      />
    </div>
  );
}
