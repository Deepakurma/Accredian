import { Headset, ChevronRight } from "lucide-react";

type FinalCtaProps = {
  onEnquire: () => void;
};

export function FinalCta({ onEnquire }: FinalCtaProps) {
  return (
    <section className="px-6 md:px-12" id="contact">
      <div className="mx-auto flex min-h-48 max-w-7xl flex-col gap-8 overflow-hidden rounded-lg bg-primary px-10 py-10 text-white lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col md:flex-row items-center gap-7">
          <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-lg border-4 border-blue-300 bg-white text-primary">
            <Headset size={40} />
          </span>
          <div>
            <h2 className="text-xl text-center md:text-left sm:text-3xl font-semibold leading-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="mt-2 hidden text-center md:text-left md:flex text-base font-semibold text-blue-100">
              Get Expert Guidance for Your Team&apos;s Success!
            </p>
          </div>
        </div>
        <button
          className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white px-8 py-4 text-base font-bold leading-none text-primary transition hover:bg-primary-soft"
          onClick={onEnquire}
          type="button"
        >
          Contact Us <ChevronRight className="ml-1" size={18} />
        </button>
      </div>
    </section>
  );
}
