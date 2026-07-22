"use client";

import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDesktopSlide, setActiveDesktopSlide] = useState(0);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const desktopSliderRef = useRef<HTMLDivElement>(null);
  const totalDesktopSlides = Math.ceil(testimonials.length / 2);

  function goToDesktopSlide(index: number) {
    setActiveDesktopSlide(index);
    desktopSliderRef.current?.scrollTo({
      left: desktopSliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  }

  function goToMobileSlide(index: number) {
    setActiveSlide(index);
    mobileSliderRef.current?.scrollTo({
      left: mobileSliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  }

  function handleDesktopScroll(event: React.UIEvent<HTMLDivElement>) {
    setActiveDesktopSlide(
      Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth),
    );
  }

  function handleMobileScroll(event: React.UIEvent<HTMLDivElement>) {
    setActiveSlide(
      Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth),
    );
  }

  return (
    <section className="px-6" id="testimonials">
      <SectionHeading
        description={
          <>
            What <span className="text-primary">Our Clients</span> Are Saying
          </>
        }
        title={
          <>
            Testimonials from <span className="text-primary">Our Partners</span>
          </>
        }
      />

      <div
        className="scrollbar-hidden mx-auto mt-10 md:mt-16 hidden max-w-7xl snap-x snap-mandatory overflow-x-auto scroll-smooth md:flex"
        onScroll={handleDesktopScroll}
        ref={desktopSliderRef}
      >
          {Array.from({ length: totalDesktopSlides }).map((_, slideIndex) => (
            <div
              className="grid w-full shrink-0 snap-center grid-cols-2 gap-5 pr-5"
              key={slideIndex}
            >
              {testimonials
                .slice(slideIndex * 2, slideIndex * 2 + 2)
                .map((testimonial) => (
                  <div
                    key={testimonial.company}
                    className="min-h-56 rounded-lg border border-border-soft bg-white px-10 py-7"
                  >
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      width={96}
                      height={56}
                      className="h-14 max-w-24 object-contain"
                    />

                    <p className="mt-7 text-sm font-semibold leading-6 text-text-secondary">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                ))}
            </div>
          ))}
      </div>

      <div className="mt-6 hidden items-center justify-center gap-4 md:flex">
        <button
          aria-label="Previous slide"
          onClick={() => goToDesktopSlide((activeDesktopSlide - 1 + totalDesktopSlides) % totalDesktopSlides)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          {Array.from({ length: totalDesktopSlides }).map((_, index) => (
            <button
              aria-label={`Show testimonial slide ${index + 1}`}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                activeDesktopSlide === index
                  ? "w-2 bg-primary"
                  : "w-2 bg-border-strong hover:bg-primary/50"
              }`}
              key={index}
              onClick={() => goToDesktopSlide(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next slide"
          onClick={() => goToDesktopSlide((activeDesktopSlide + 1) % totalDesktopSlides)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
          type="button"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div
        className="scrollbar-hidden -mx-3 mt-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth md:hidden"
        onScroll={handleMobileScroll}
        ref={mobileSliderRef}
      >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.company}
              className="w-full shrink-0 snap-center px-3"
            >
              <div className="rounded-lg border border-border-soft bg-white px-9 py-9">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  width={96}
                  height={56}
                  className="h-12 max-w-20 object-contain"
                />

                <p className="mt-7 text-sm font-semibold leading-6 text-text-secondary">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
        <button
          aria-label="Previous slide"
          onClick={() => goToMobileSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              aria-label={`Show ${testimonial.company} testimonial`}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-2 bg-primary"
                  : "w-2 bg-border-strong hover:bg-primary/50"
              }`}
              key={testimonial.company}
              onClick={() => goToMobileSlide(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next slide"
          onClick={() => goToMobileSlide((activeSlide + 1) % testimonials.length)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
          type="button"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
