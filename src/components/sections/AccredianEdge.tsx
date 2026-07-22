import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AccredianEdge() {
  return (
    <section className="px-6 md:px-12" id="edge">
      <SectionHeading
        description={
          <>
            Key Aspects of{" "}
            <span className="text-primary">Our Strategic Training</span>
          </>
        }
        title={
          <>
            The <span className="text-primary">Accredian Edge</span>
          </>
        }
      />
      <Image
        alt="Accredian Edge framework"
        width={50}
        height={50}
        className="mx-auto mt-10 md:mt-16 hidden w-full max-w-7xl object-contain md:block"
        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
      />
      <Image
        alt="Accredian Edge framework"
        width={50}
        height={50}
        className="mx-auto mt-10 md:mt-16 w-full max-w-7xl object-contain md:hidden"
        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
      />
    </section>
  );
}
