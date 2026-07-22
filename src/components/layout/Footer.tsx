import { siteConfig } from "@/data/site";
import Link from "next/link";
import {
  FaSquareFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const SocialLinks = [
  { href: "https://www.facebook.com/accredianlearn", icon: FaSquareFacebook },
  { href: "https://www.linkedin.com/school/accredianedu/", icon: FaLinkedin },
  { href: "https://x.com/accredianedu", icon: FaXTwitter },
  {
    href: "https://www.instagram.com/accredian_edu",
    icon: FaInstagram,
  },
  {
    href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
    icon: FaYoutube,
  },
];

const PageLinks = [
  {
    name: "About",
    href: "https://accredian.com/About",
  },
  {
    name: "Blog",
    href: "https://blog.accredian.com",
  },
  {
    name: "Why Accredian",
    href: "https://accredian.com/whyaccredian",
  },
];

type FooterProps = {
  onEnquire: () => void;
};

export function Footer({ onEnquire }: FooterProps) {
  return (
    <footer className="mt-18 bg-foreground p-6 pb-4 text-white md:bg-transparent md:text-inherit md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 md:flex-row md:items-start md:justify-between md:border-border-strong">
          <div>
            <p className="text-2xl font-bold leading-none text-white md:text-primary">
              {siteConfig.name}
            </p>

            <p className="mt-1 text-xs text-white/70 md:text-text-muted">
              {siteConfig.tagline}
            </p>

            <div className="mt-6 flex gap-4">
              {SocialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6 text-white/80 transition-colors hover:text-white md:text-slate-600 md:hover:text-slate-900" />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-left md:text-right">
            <button
              type="button"
              onClick={onEnquire}
              className="inline-flex cursor-pointer items-center justify-center rounded-sm bg-primary px-8 py-3 text-base font-semibold leading-none text-white shadow-lg transition-all duration-300 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-primary/20"
            >
              Enquire Now
            </button>

            <p className="mt-3 text-sm font-semibold text-white/80 md:text-text-secondary">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/15 py-8 text-sm md:grid-cols-2 md:border-border-strong">
          <div>
            <h3 className="font-bold text-white md:text-text-primary">
              Accredian
            </h3>

            <ul className="mt-4 space-y-3 font-medium">
              {PageLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-white/80 transition-colors hover:text-white md:text-text-secondary md:hover:text-primary"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white md:text-text-primary">
              Contact Us
            </h3>

            <p className="mt-4 font-medium text-white/80 md:text-text-secondary">
              Email us:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>

            <p className="mt-3 max-w-xl font-medium text-white/80 md:text-text-secondary">
              Office Address: {siteConfig.address}
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-3 w-fit text-center text-sm font-medium text-white/70 md:text-text-primary">
        © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        Reserved
      </p>
    </footer>
  );
}
