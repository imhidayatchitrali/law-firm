import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { IconBuilding } from "@/components/icons";

const stats = [
  { value: "[X],000+", label: "5-Star Reviews" },
  { value: "17+", label: "Years of Experience" },
  { value: "[XX]+", label: "Office Locations" },
  { value: "[XX]+", label: "Attorneys" },
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
          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
