import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { IconUsers, IconCheck } from "@/components/icons";
import { attorneyBio } from "@/lib/content";

export function AboutAttorney() {
  return (
    <section id="about" className="bg-panel py-20 md:py-24">
      <Container className="grid items-start gap-14 md:grid-cols-2">
        <PlaceholderPhoto
          label="Attorney Headshot"
          icon={<IconUsers className="h-10 w-10" />}
          className="h-80 md:h-[460px]"
        />
        <div className="flex flex-col gap-5">
          <Eyebrow>Meet Your Attorney</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            {attorneyBio.name}
          </h2>
          <p className="text-sm font-bold tracking-wide text-accent uppercase">
            {attorneyBio.credential}
          </p>
          <p className="text-ink-soft">{attorneyBio.summary}</p>

          <ul className="flex flex-col gap-3">
            {attorneyBio.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-soft">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-col gap-1 border-t border-line pt-5">
            {attorneyBio.education.map((e) => (
              <p key={e.degree} className="text-sm text-ink-soft">
                <span className="font-bold text-navy">{e.degree}</span> — {e.school}
              </p>
            ))}
          </div>

          <Button href="#contact" variant="outline-dark" className="mt-2 self-start">
            Schedule a Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
