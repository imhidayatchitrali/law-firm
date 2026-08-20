import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white">
      <div className="flex items-center py-5 md:py-6">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="relative block h-12 w-62.25 shrink-0 md:h-13.5 md:w-70 left-12"
        >
          {/* Drop your logo file at public/images/logo.svg (or .png) — sized to
              match a 280x54 logo at its native resolution (no upscaling). For a
              crisp look on Retina/HiDPI screens, use a 2x-3x resolution source
              (e.g. 560x108 or 840x162) or, ideally, an SVG. */}
          <Image
            src="/images/logo.jpg"
            alt={siteConfig.name}
            fill
            priority
            sizes="(min-width: 768px) 280px, 249px"
            className="object-contain object-left"
          />
        </Link>
      </div>
    </header>
  );
}
