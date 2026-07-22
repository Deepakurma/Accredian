import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function CatFramework() {

  return (
    <section className="bg-surface-blue py-12 px-6 md:px-12" id="cat">
      <SectionHeading
        description={
          <>
            Our Proven Approach to <span className="text-primary">Learning Excellence</span>
          </>
        }
        title={
          <>
            The <span className="text-primary">CAT Framework</span>
          </>
        }
      />
      
      <Image
        alt="CAT Framework"
        width={896}
        height={500}
        className="mx-auto mt-10 md:mt-16 w-full max-w-4xl object-contain"
        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
      />
    </section>
  );
}
