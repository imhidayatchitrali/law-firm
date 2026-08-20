import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { IconScale } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function WrongfulDeath() {
  return (
    <section className="py-20 md:py-24">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Eyebrow>Wrongful Death Claims</Eyebrow>
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Legal Guidance in {siteConfig.state} Wrongful Death Claims
          </h2>
          <p className="text-ink-soft">
            In cases involving wrongful death, compensation is not simply about covering expenses
            — it&apos;s about honoring what was lost and securing your family&apos;s future.
          </p>
          <p className="font-semibold text-ink-soft">
            The law is complex. Your path forward shouldn&apos;t be.
          </p>
          <Button href="#contact" variant="outline-dark" className="self-start">
            Speak With Our Team — Free, No Obligation
          </Button>
        </div>
        <PlaceholderPhoto
          label="Consultation Photo"
          icon={<IconScale className="h-10 w-10" />}
          className="h-64 md:h-80"
        />
      </Container>
    </section>
  );
}
