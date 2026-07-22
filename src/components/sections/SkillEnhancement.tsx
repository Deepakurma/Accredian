import {
  BriefcaseBusiness,
  GraduationCap,
  MonitorCheck,
  MonitorX,
} from "lucide-react";
import Image from "next/image";

export function SkillEnhancement() {
  const audiences = [
    {
      title: "Tech Professionals",
      text: "Enhance expertise, embrace tech, drive innovation.",
      icon: MonitorCheck,
    },
    {
      title: "Non-Tech Professionals",
      text: "Adapt digitally, collaborate in tech environments.",
      icon: MonitorX,
    },
    {
      title: "Emerging Professionals",
      text: "Develop powerful skills for rapid career growth.",
      icon: GraduationCap,
    },
    {
      title: "Senior Professionals",
      text: "Strengthen leadership, enhance strategic decisions.",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <section className="md:px-12">
      <div className="mx-auto flex max-w-7xl overflow-hidden bg-primary p-4 py-8 sm:p-8 sm:py-10 text-white flex-col lg:flex-row gap-8 md:rounded-md md:px-12 md:pb-0 md:pt-12">
        <div className="relative">
          <p className="text-sm font-semibold uppercase text-blue-200">
            Who Should Join?
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-white mt-2 md:text-4xl">
            Strategic Skill Enhancement
          </h2>
          <Image
            alt="Professionals learning"
            width={320}
            height={224}
            className="absolute bottom-0 left-0 hidden max-h-56 w-80 object-contain object-bottom lg:block"
            src={
              "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
            }
          />
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-12 md:pb-12">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <div
                className="flex items-start gap-4 sm:gap-6 md:block"
                key={audience.title}
              >
                <Icon className="shrink-0 size-10 sm:size-12" strokeWidth={2} />
                <div>
                  <h3 className="text-md font-semibold leading-tight md:mt-5 sm:text-xl">
                    {audience.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-xs sm:text-sm font-medium text-white md:mt-1 md:max-w-xs md:text-sm md:leading-5 md:text-blue-100">
                    {audience.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
