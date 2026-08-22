import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white">
      <div className="flex items-center py-3 md:py-4">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="relative block shrink-0 left-12"
        >
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={537}
            height={403}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>
      </div>
    </header>
  );
}
