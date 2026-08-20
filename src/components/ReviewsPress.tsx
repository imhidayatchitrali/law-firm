import { Container } from "@/components/ui/Container";
import { IconStar } from "@/components/icons";
import { shortReviews, pressLogos } from "@/lib/content";

export function ReviewsPress() {
  return (
    <section id="reviews" className="py-20 md:py-24">
      <Container>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex gap-0.5 text-gold" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="font-serif text-2xl font-bold text-navy">
            5.0 — What Our Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {shortReviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-panel p-8"
            >
              <blockquote className="text-sm text-ink-soft">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="text-sm font-bold text-navy">— {r.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-55">
            {pressLogos.map((logo, i) => (
              <span key={i} className="font-serif text-lg font-bold text-ink-soft">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
