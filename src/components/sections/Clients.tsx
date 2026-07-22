import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/data/site";
import Image from "next/image";

export function Clients() {
  return (
    <section className="px-6 md:px-14" id="clients">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description={
            <>
              Successful Collaborations With the{" "}
              <span className="text-primary">Industry&apos;s Best</span>
            </>
          }
          title={
            <>
              Our Proven <span className="text-primary">Partnerships</span>
            </>
          }
        />
        <div className="mt-4 sm:mt-10 md:mt-16 overflow-hidden md:hidden">
          <div className="logo-marquee flex w-max items-center gap-6">
            {[...clients, ...clients].map((client, index) => (
              <div
                className="flex h-24 w-32 items-center justify-center"
                key={`${client.name}-${index}`}
              >
                {client.logo ? (
                  <Image
                    alt={`${client.name} logo`}
                    width={50}
                    height={50}
                    className="h-14 w-20 object-contain"
                    src={client.logo}
                  />
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-16 hidden items-center gap-10 md:gap-0 lg:gap-10 md:grid md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              className="flex h-24 items-center justify-center"
              key={client.name}
            >
              {client.logo ? (
                <Image
                  width={112}
                  height={56}
                  alt={`${client.name} logo`}
                  className="h-24 w-24 object-contain"
                  src={client.logo}
                />
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
