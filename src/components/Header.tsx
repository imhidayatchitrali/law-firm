import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Our Commitment", href: "#commitment" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)] abbo-header-preview">
      <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between gap-4 px-5 py-1 sm:px-10 lg:px-20 xl:px-32 abbo-header-preview-inner">
        <Link href="/" aria-label={siteConfig.name} className="relative block shrink-0 abbo-header-preview-logo">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={537}
            height={403}
            priority
            className="h-14 w-auto sm:h-16 lg:h-[78px]"
          />
        </Link>

        <div className="flex flex-1 items-center justify-center abbo-header-nav-wrap">
          <div className="flex flex-col items-center justify-center gap-2 abbo-header-menu-group">
            <nav className="flex items-center justify-center gap-6 text-base font-semibold text-navy abbo-header-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:underline">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="#injury-guide" className="abbo-guide-button abbo-header-cta">
              What to Do After an Injury
            </Link>
          </div>
        </div>

        <Link href={`mailto:${siteConfig.email}`} className="abbo-email-button abbo-header-contact">
          <span className="abbo-email-heading">Contact Us Now!</span>
          <span className="abbo-email-address">{siteConfig.email}</span>
        </Link>
      </div>
    </header>
  );
}
