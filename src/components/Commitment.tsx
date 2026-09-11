import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { IconBuilding, IconClock, IconUsers, IconStar } from "@/components/icons";

const highlights = [
  { icon: <IconStar className="h-5 w-5" />, text: "5-star come from skinner" },
  { icon: <IconBuilding className="h-5 w-5" />, text: "Conveniently located in Orlando" },
  { icon: <IconClock className="h-5 w-5" />, text: "Experience that counts and gets results" },
  { icon: <IconUsers className="h-5 w-5" />, text: "A vast network of attorneys" },
];

export function Commitment() {
  return (
    <section className="py-20 md:py-24">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <PlaceholderPhoto
          label="Office / Consultation Photo"
          icon={<IconBuilding className="h-10 w-10" />}
          className="order-2 h-80 md:order-1 md:h-[400px]"
        />
        <div className="order-1 flex flex-col gap-5 md:order-2">
          <Eyebrow>Our Commitment</Eyebrow>
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            We Take It Personally. Because It Is.
          </h2>
          <p className="text-ink-soft">
            Serious injuries change lives. That&apos;s why we treat every client like family —
            not a case number. From the moment you call, we&apos;re in your corner, handling the
            insurance companies and legal complexity so you can focus on getting better.
          </p>
          <Button href="#contact" variant="outline-dark" className="self-start">
            Reach Out Today
          </Button>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  {h.icon}
                </span>
                <span className="text-sm font-semibold text-navy">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
