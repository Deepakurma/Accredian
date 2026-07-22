import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChartNoAxesCombined, MonitorPlay, Presentation } from "lucide-react";

const steps = [
  {
    title: "Skill Gap Analysis",
    text: "Assess team skill gaps and developmental needs.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Customized Training Plan",
    text: "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    title: "Flexible Program Delivery",
    text: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 md:px-12" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          description={
            <>
              A Structured Three-Step Approach to{" "}
              <span className="text-primary">Skill Development</span>
            </>
          }
          title={
            <>
              How We <span className="text-primary">Deliver Results</span> That
              Matter?
            </>
          }
        />
        <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative w-full max-w-[300px] rounded-lg border border-blue-300 bg-primary-muted px-7 py-6 text-center shadow-md
    before:absolute before:-left-1 sm:before:-left-2 before:top-1/2 before:h-20 sm:before:h-32 before:w-1 sm:before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-primary
    after:absolute after:-right-1 sm:after:-right-2 after:top-1/2 after:h-20 sm:after:h-32 after:w-1 sm:after:w-2 after:-translate-y-1/2 after:rounded-full after:bg-primary"
            >
              <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-xs font-bold text-text-primary">
                {index + 1}
              </span>
              <span className="mx-auto shrink-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-white shadow-md">
                <step.icon className="size-6 sm:size-8" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mx-auto hidden sm:block mt-3 max-w-56 text-xs font-medium leading-5 text-text-secondary">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
