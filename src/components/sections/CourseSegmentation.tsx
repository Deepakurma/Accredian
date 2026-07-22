"use client";

import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courseSegments } from "@/data/site";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CourseSegmentation() {
  const [activeSegment, setActiveSegment] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  function goToSegment(index: number) {
    setActiveSegment(index);
    sliderRef.current?.scrollTo({
      left: sliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  }

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const index = Math.round(
      event.currentTarget.scrollLeft / event.currentTarget.clientWidth,
    );

    setActiveSegment(index);
  }

  return (
    <section className="px-6 md:px-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description={
            <>
              Explore <span className="text-primary">Custom-fit Courses</span> Designed to
              Address Every Professional Focus
            </>
          }
          title={
            <>
              Tailored <span className="text-primary">Course Segmentation</span>
            </>
          }
        />
        <div className="mt-10 md:mt-16 md:hidden">
          <div
            className="scrollbar-hidden -mx-3 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            onScroll={handleScroll}
            ref={sliderRef}
          >
            {courseSegments.map((segment) => (
              <div className="w-full shrink-0 snap-center px-3" key={segment.title}>
                <div className="overflow-hidden rounded-lg border border-border-soft bg-white text-center shadow-md">
                  <Image
                    alt=""
                    width={400}
                    height={240}
                    className="h-45 w-full object-cover"
                    src={segment.image}
                  />
                  <div className="px-5 py-6">
                    <h3 className="text-2xl font-semibold leading-tight text-primary">
                      {segment.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous slide"
              onClick={() => goToSegment((activeSegment - 1 + courseSegments.length) % courseSegments.length)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
              type="button"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              {courseSegments.map((item, index) => (
                <button
                  aria-label={`Show ${item.title}`}
                  className={`h-2 w-2 cursor-pointer rounded-full transition ${
                    activeSegment === index ? "bg-primary" : "bg-border-strong"
                  }`}
                  key={item.title}
                  onClick={() => goToSegment(index)}
                  type="button"
                />
              ))}
            </div>

            <button
              aria-label="Next slide"
              onClick={() => goToSegment((activeSegment + 1) % courseSegments.length)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
              type="button"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {courseSegments.map((segment) => (
            <div
              className="overflow-hidden border border-border-soft rounded-md bg-white text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              key={segment.title}
            >
              <Image
                alt=""
                width={300}
                height={144}
                className="h-36 w-full object-cover"
                src={segment.image}
              />
              <div className="min-h-28 px-5 py-5">
                <h3 className="text-xl font-semibold leading-tight text-primary">
                  {segment.title}
                </h3>
                <p className="mt-3 text-xs font-medium leading-5 text-text-secondary">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
