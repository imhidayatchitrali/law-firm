import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconStar } from "@/components/icons";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Real Client Stories
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-panel p-8"
            >
              <div className="flex gap-0.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-sm text-ink-soft italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm font-bold text-navy">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
