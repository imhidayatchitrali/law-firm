import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12 text-white/70">
      <Container className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-7">
        <Link href="/" className="font-serif text-xl font-bold text-white">
          {siteConfig.name}
        </Link>
        <a href={siteConfig.phoneHref} className="text-sm font-bold text-white hover:text-gold">
          Free Consultation: {siteConfig.phoneDisplay}
        </a>
      </Container>
      <Container className="pt-6 text-xs">
        <p>
          &copy; {year} {siteConfig.legalName}. All rights reserved. Attorney advertising. Prior
          results do not guarantee a similar outcome.
        </p>
        <p className="mt-2">
          {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
          {siteConfig.address.postalCode}
        </p>
      </Container>
    </footer>
  );
}
