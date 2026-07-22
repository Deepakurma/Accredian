import { stats } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Stats() {
  return (
    <section className="px-6" id="stats">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description={
            <>
              The Numbers Behind{" "}
              <span className="text-primary">Our Success</span>
            </>
          }
          title={
            <>
              Our <span className="text-primary">Track Record</span>
            </>
          }
        />
        <div className="mt-4 sm:mt-10 md:mt-16 grid justify-center gap-0 md:grid-cols-3">
          {stats.map((item) => (
            <div
              className="flex justify-center w-fit items-center gap-6 border-b-2 border-border-soft px-3 py-8 text-left last:border-b-0 md:block md:border-b-0 md:border-r-2 md:px-8 md:py-0 md:text-center md:last:border-r-0"
              key={item.value}
            >
              <p className="flex h-10 w-20 sm:h-14 sm:w-26 shrink-0 items-center justify-center rounded-full bg-primary-soft text-lg sm:text-2xl font-semibold text-primary md:mx-auto md:h-12 md:w-24">
                {item.value}
              </p>
              <p className="max-w-sm text-md sm:text-lg font-medium leading-7 text-black md:mx-auto md:mt-5 md:max-w-xs md:text-base md:leading-6 md:text-text-primary">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
