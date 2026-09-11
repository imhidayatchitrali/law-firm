import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { practiceAreas } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-cream-alt py-20 md:py-24">
      <Container>
        <div className="flex max-w-xl flex-col gap-3">
          <Eyebrow>Practice Areas</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            What Is a Personal Injury Case?
          </h2>
          <p className="text-ink-soft">
            In {siteConfig.state}, personal injury claims cover a wide range of accidents caused
            by negligence. Here are the cases we handle.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="flex gap-4 rounded-2xl border border-line bg-panel p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                {area.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-lg font-semibold text-navy">{area.title}</h3>
                <p className="text-sm text-ink-soft">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
