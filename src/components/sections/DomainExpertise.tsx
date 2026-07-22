import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BarChart3,
  Brain,
  ChartNoAxesColumnIncreasing,
  Globe2,
  Lightbulb,
  Settings,
  UsersRound,
  WalletCards,
} from "lucide-react";

const domains = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: UsersRound },
  { title: "Tech & Data Insights", icon: ChartNoAxesColumnIncreasing },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe2 },
  { title: "Fintech Innovation Lab", icon: WalletCards },
];

export function DomainExpertise() {
  return (
    <section className="px-6 md:px-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          description={
            <>
              <span className="text-primary">Specialized Programs</span>{" "}
              Designed to Fuel Innovation
            </>
          }
          title={
            <>
              Our <span className="text-primary">Domain Expertise</span>
            </>
          }
        />
        <div className="mt-10 md:mt-16 flex flex-wrap gap-4 justify-center w-full">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                className="flex gap-2 w-[45%] sm:w-[30%] sm:flex-col items-center sm:justify-center rounded-lg border border-border-soft bg-white px-5 py-4 sm:text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                key={domain.title}
              >
                <Icon
                  className="text-primary shrink-0 size-6 sm:size-8"
                  strokeWidth={2.2}
                />
                <h3 className="text-[10px] sm:text-base font-medium sm:font-semibold text-text-primary">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
