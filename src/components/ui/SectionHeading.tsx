import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-xl sm:text-2xl font-semibold leading-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-xs sm:text-base font-medium leading-4 text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
