"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconChevronDown } from "@/components/icons";
import { faqs } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-cream-alt py-20 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-base font-semibold text-navy md:text-lg">
                      {String(i + 1).padStart(2, "0")}. {item.q}
                    </span>
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={open ? "pb-6" : "hidden"}
                >
                  <p className="text-sm text-ink-soft">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
