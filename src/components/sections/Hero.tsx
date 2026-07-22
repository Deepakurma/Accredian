import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  onEnquire: () => void;
};

export function Hero({ onEnquire }: HeroProps) {
  const benefits = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance",
    "Measurable Impact",
  ];

  return (
    <section className="px-4 md:px-5 pt-6 md:pt-12" id="home">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-primary-muted shadow-2xl md:min-h-96 md:grid-cols-2 rounded-3xl">
        <div className="order-2 md:pr-0 flex flex-col gap-6 sm:gap-8 md:gap-6 lg:gap-10 p-6 text-center md:order-1 md:px-10 md:py-8 md:text-left">
          <h1 className="mx-auto text-md font-semibold leading-tight text-black md:mx-0 sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl md:leading-none">
            Next-Gen <span className="text-primary">Expertise</span> For Your{" "}
            <span className="text-primary">Enterprise</span>
          </h1>
          <p className="mx-auto max-w-xl text-xs sm:text-sm font-medium leading-snug text-black md:mx-0 md:max-w-md md:text-lg lg:text-xl md:font-semibold">
            Cultivate high-performance teams through expert learning.
          </p>
          <div className=" grid grid-cols-2 justify-items-center gap-x-0 gap-y-6 text-left md:flex md:flex-wrap md:gap-x-6 md:gap-y-3">
            {benefits.map((benefit) => (
              <span
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-primary md:gap-2 md:text-sm"
                key={benefit}
              >
                <CheckCircle2 className="shrink-0 text-green-600 size-4 sm:size-6" />
                {benefit}
              </span>
            ))}
          </div>
          <button
            className="mt-2 w-full md:w-fit cursor-pointer flex items-center justify-center rounded-md bg-primary px-8 py-3 sm:py-4 text-md sm:text-lg font-semibold leading-none text-white shadow-lg transition-all duration-300 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-primary/20 md:rounded-sm md:py-3"
            onClick={onEnquire}
            type="button"
          >
            Enquire Now
          </button>
        </div>
        <div className="order-1 px-12 md:px-0 flex items-end justify-center pt-6 md:order-2 md:min-h-96 md:pr-2 md:pt-0">
          <Image
            alt="Enterprise professionals"
            width={600}
            height={400}
            className="w-full object-contain object-bottom md:h-full md:max-h-full"
            src={
              "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
            }
          />
        </div>
      </div>
    </section>
  );
}
