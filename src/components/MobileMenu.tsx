"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { IconMenu, IconClose } from "@/components/icons";

export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-white"
      >
        {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-white/10 bg-navy px-6 py-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="mt-2 rounded-lg px-2 py-3 text-sm font-bold text-white"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-accent px-5 py-3 text-center text-xs font-bold tracking-wide text-white uppercase"
          >
            Free Evaluation
          </a>
        </nav>
      )}
    </div>
  );
}
